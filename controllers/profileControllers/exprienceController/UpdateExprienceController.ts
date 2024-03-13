import { Request, Response } from "express";
import { connection } from "../../../SqlDatabaseConnection";
import  jwt  from "jsonwebtoken";
import mysql from "mysql2"

export default async function updateWorkExprience(req: Request, res: Response)
 {
  
    try {
  const { WorkExprienceID, WorkTital, EmploymentType, CompanyName, Location, LocationType, CurrentlyWorking, StartDate, EndDate, Industry, Discription  } = req.body;
  console.log(WorkExprienceID)
        const [row]= await (
          await connection
          ).query<mysql.ResultSetHeader>(
            "UPDATE WorkExprience SET WorkTital=?, EmploymentType=?, CompanyName=?, Location=?, LocationType=?,CurrentlyWorking=?, StartDate=?, EndDate=?, Industry=?, Discription=? WHERE WorkExprienceID=?",
            [WorkTital, EmploymentType, CompanyName, Location, LocationType, CurrentlyWorking, StartDate, EndDate,Industry, Discription, WorkExprienceID]
            ); 
             console.log("row", row.affectedRows)
          if (row.affectedRows === 1) {
            return res.status(201).json({
              firstTimelogin: true,
              success: true,
              message: "WorkExprience Updated successfully",
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
  



