import { Request, Response } from "express";
import { connection } from "../../../SqlDatabaseConnection";
import  jwt  from "jsonwebtoken";
import mysql from "mysql2"

export default async function addWorkExprience(req: Request, res: Response)
 {
  
    try {
  const { UserID, WorkTital, EmploymentType, CompanyName, Location, LocationType, CurrentlyWorking, StartDate, EndDate, Industry, Discription  } = req.body;
  console.log(UserID)
  const insertQuery = 'INSERT INTO WorkExprience(UserID, WorkTital, EmploymentType, CompanyName, Location, LocationType, CurrentlyWorking, StartDate, EndDate, Industry, Discription) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const insertData = [UserID, WorkTital, EmploymentType, CompanyName, Location, LocationType, CurrentlyWorking, StartDate, EndDate, Industry, Discription];
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
              message: "WorkExprience added successfully",
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
  







