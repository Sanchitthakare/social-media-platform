import { Request, Response } from "express";
import { connection } from "../../../SqlDatabaseConnection";
import  jwt  from "jsonwebtoken";
import mysql from "mysql2"

export default async function addLicenseOrCertification(req: Request, res: Response)
 {
  

  
    try {
  const { UserID, Name, IssuingOrganization, IssueDate, ExpirationDate, CredentialID, CredentialURL, Media  } = req.body;
  console.log(UserID)
  const insertQuery = 'INSERT INTO LicenseOrCertification(UserID, Name, IssuingOrganization, IssueDate, ExpirationDate, CredentialID, CredentialURL, Media) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        const insertData = [UserID, Name, IssuingOrganization, IssueDate, ExpirationDate, CredentialID, CredentialURL, Media];
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
              message: "LicenseOrCertification added successfully",
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
  

