import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";
import bcrypt from "bcrypt";
import crypto from "crypto"
import { signAccessToken,signRefreshToken,refreshCookieOptions } from "../../../../lib/jwt";
import { sendValidationEmail } from "../../../../lib/email";

export async function POST(request){
   try {
         const {name,email,password}=await request.json();

    if(!name || !email || !password)
    {
        return NextResponse.json({success:false,message:"All Fields are required"},{status:400});
    }
    if(password.length<6)
    {
        return NextResponse.json({success:false,message:"Password should be greater than 6"},{status:400});
    }
    if(typeof email !=="string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    {
        return NextResponse.json({success:false,message:"Email not valid"});
    }
    const existingUser=await prisma.user.findUnique({where:{email:email.toLowerCase().trim()},});
    if(existingUser)
    {
        return NextResponse.json({success:false,message:"User Already Exist"});
    }
    const passwordHash=await bcrypt.hash(password,10);
    const verificationToken=crypto.randomBytes(32).toString("hex");
    const verificationExpiry=new Date(Date.now()+24*60*60*1000);
    const User=await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:passwordHash,
            verifiedToken:verificationToken,
            verifiedExpiry:verificationExpiry
        },
        select:{
            name:true,
            email:true,
            password:true
        }
    });

    sendValidationEmail(User.email,User.name,verificationToken).catch((err)=>console.error("Email send Failed ",err));

    return response;
   } catch (error) {
        console.error(error)
        return NextResponse.json({success:false,message:"Internal server Error"},{status:500});
   }
}