import { Request, Response } from "express";
import { connection } from "../../../SqlDatabaseConnection";
import  jwt  from "jsonwebtoken";
import mysql from "mysql2"

export default async function addEducation(req: Request, res: Response)
 {
  
    try {
  const { UserID, School, Degree, FieldOfStudy, StartDate, EndDate  } = req.body;
  console.log(UserID)
       const insertQuery= 'INSERT INTO Education (UserID, School, Degree, FieldOfStudy, StartDate, EndDate) VALUES (?, ?, ?, ?, ?, ?)';
       const insertData= [UserID, School, Degree, FieldOfStudy, StartDate, EndDate ];
        const [row]= await (
          await connection
          ).query<mysql.ResultSetHeader>(
            insertQuery,
            insertData
            ); 
             console.log("row", row.affectedRows)
          if (row.affectedRows === 1) {
            return res.status(201).json({
              firstTimelogin: true,
              success: true,
              message: "Education added successfully",
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
  




