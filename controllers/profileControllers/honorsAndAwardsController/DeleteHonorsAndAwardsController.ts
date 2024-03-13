import { Request, Response } from "express";
import { connection } from "../../../SqlDatabaseConnection";
import mysql from "mysql2"

export default async function deleteHonorsAndAwards (req: Request, res: Response) {
  
    
    try {
    const { HonorsAndAwardsID } = req.body;
    console.log(HonorsAndAwardsID)
        const insertQuery = 'DELETE FROM HonorsAndAwards WHERE HonorsAndAwardsID=?';
          const insertData = [HonorsAndAwardsID];
  
         const [row]= await (
            await connection
            ).query<mysql.ResultSetHeader>(insertQuery, insertData);
            console.log("row", row.affectedRows)
          if (row.affectedRows === 1) {
            return res.status(201).json({
              firstTimelogin: true,
              success: true,
              message: "HonorsAndAwards deleted successfully",
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
  



