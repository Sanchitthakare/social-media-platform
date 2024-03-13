import { Request, Response } from "express";
import { connection } from "../../../SqlDatabaseConnection";
import  jwt  from "jsonwebtoken";
import mysql from "mysql2"

export default async function deleteWorkExprience(req: Request, res: Response) {
    
    try {
    const { WorkExprienceID } = req.body;
    console.log(WorkExprienceID)
        const insertQuery = 'DELETE FROM WorkExprience WHERE WorkExprienceID=?';;
          const insertData = [WorkExprienceID];
  
         const [row]= await (
            await connection
            ).query<mysql.ResultSetHeader>(insertQuery, insertData);
            console.log("row", row.affectedRows)
          if (row.affectedRows === 1) {
            return res.status(201).json({
              firstTimelogin: true,
              success: true,
              message: "WorkExprience deleted successfully",
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
  



