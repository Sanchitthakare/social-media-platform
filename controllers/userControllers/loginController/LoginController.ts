import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connection } from "../../../SqlDatabaseConnection";
import { Request, Response } from "express";
import mysql from "mysql2";

export default async function Login(req: Request, res: Response) {
  try {
    const q = "SELECT * FROM User WHERE EmailId = ?";
    const [userData] = await (
      await connection
    ).query<mysql.RowDataPacket[]>(q, [req.body.EmailId]);

    if (userData.length === 0) {
      return res.status(404).json("User not found!");
    }

    const checkPassword = bcrypt.compareSync(
      req.body.Password,
      userData[0].Password
    );

    if (!checkPassword) {
      return res.status(400).json("Wrong Password or EmailId!");
    }

    const token = jwt.sign({ id: userData[0].id }, "secretkey");

    const { Password, ...others } = userData[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (error) {
    console.log("error", error);
    return res.status(500).json("Internal server error");
  }
}
