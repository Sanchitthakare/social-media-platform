import { Request, Response } from "express";
import { connection } from "../../../SqlDatabaseConnection";
import  jwt  from "jsonwebtoken";
import mysql from "mysql2"

export default async function deleteEducation(req: Request, res: Response) {
  
    try {
    const { EducationID } = req.body;
    console.log(EducationID)
        const insertQuery = 'DELETE FROM Education WHERE EducationID=?';;
          const insertData = [EducationID];
  
         const [row]= await (
            await connection
            ).query<mysql.ResultSetHeader>(insertQuery, insertData);
            console.log("row", row.affectedRows)
          if (row.affectedRows === 1) {
            return res.status(201).json({
              firstTimelogin: true,
              success: true,
              message: "Education deleted successfully",
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
  



