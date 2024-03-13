import { Request, Response } from "express";
import { connection } from "../../../SqlDatabaseConnection";
import mysql from "mysql2"

export default async function addHonorsAndAwards (req: Request, res: Response)
 {
  
    try {
  const { UserID, Tital, AssociatedWith, Issuer, IssueDate, Description, Media } = req.body;
  console.log(UserID)
        const [row]= await (
          await connection
          ).query<mysql.ResultSetHeader>(
            'INSERT INTO HonorsAndAwards(UserID, Tital, AssociatedWith, Issuer, IssueDate, Description, Media) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [UserID, Tital, AssociatedWith, Issuer, IssueDate, Description, Media]
            ); 
             console.log("row", row.affectedRows)
          if (row.affectedRows === 1) {
            return res.status(201).json({
              firstTimelogin: true,
              success: true,
              message: "HonorsAndAwards added successfully",
            });
          }
        } catch (err) {
          console.log("error", err);
          return res.status(500).json({
            success: false,
            message: "Internal server error",
          });
        }
    }
  



