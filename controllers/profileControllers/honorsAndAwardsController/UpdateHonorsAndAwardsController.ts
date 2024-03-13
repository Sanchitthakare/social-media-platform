import { Request, Response } from "express";
import { connection } from "../../../SqlDatabaseConnection";

import mysql from "mysql2"

export default async function updateHonorsAndAwards (req: Request, res: Response)
 {
  
    try {
  const { HonorsAndAwardsID, Tital, AssociatedWith, Issuer, IssueDate, Description, Media } = req.body;
  console.log(HonorsAndAwardsID)
        const [row]= await (
          await connection
          ).query<mysql.ResultSetHeader>(
            "UPDATE HonorsAndAwards SET Tital=?, AssociatedWith=?, Issuer=?, IssueDate=?, Description=?, Media=? WHERE HonorsAndAwardsID=?",
            [Tital, AssociatedWith, Issuer, IssueDate, Description, Media, HonorsAndAwardsID]
            ); 
             console.log("row", row.affectedRows)
          if (row.affectedRows === 1) {
            return res.status(201).json({
              firstTimelogin: true,
              success: true,
              message: "HonorsAndAwards Updated successfully",
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
  



