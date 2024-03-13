import { Request, Response } from "express";
import { connection } from "../../../SqlDatabaseConnection";
import  jwt  from "jsonwebtoken";
import mysql from "mysql2"

export default async function deleteLicenseOrCertification(req: Request, res: Response) {
    
    try {
    const { LicenseOrCertificationID } = req.body;
    console.log(LicenseOrCertificationID)
        const insertQuery = 'DELETE FROM WorkLicenseOrCertification WHERE LicenseOrCertificationID=?';;
          const insertData = [LicenseOrCertificationID];
  
         const [row]= await (
            await connection
            ).query<mysql.ResultSetHeader>(insertQuery, insertData);
            console.log("row", row.affectedRows)
          if (row.affectedRows === 1) {
            return res.status(201).json({
              firstTimelogin: true,
              success: true,
              message: "LicenseOrCertification deleted successfully",
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


