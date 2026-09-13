import { authOptions } from "@/auth";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";

export default NextAuth(authOptions);