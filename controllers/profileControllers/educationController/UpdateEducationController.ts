import { Request, Response } from "express";
import { connection } from "../../../SqlDatabaseConnection";
import mysql from "mysql2"

export default async function updateEducation (req: Request, res: Response)
 {
  
  
    try {
  const { EducationID, School, Degree, FieldOfStudy, StartDate, EndDate  } = req.body;
  console.log(EducationID)
        const [row]= await (
          await connection
          ).query<mysql.ResultSetHeader>(
            "UPDATE Education SET School=?, Degree=?, FieldOfStudy=?, StartDate=?, EndDate=? WHERE EducationID=?",
            [School, Degree, FieldOfStudy, StartDate, EndDate, EducationID]
            ); 
             console.log("row", row.affectedRows)
          if (row.affectedRows === 1) {
            return res.status(201).json({
              firstTimelogin: true,
              success: true,
              message: "Education Updated successfully",
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
  



