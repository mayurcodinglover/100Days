import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";
import bcrypt from "bcrypt";
import { signAccessToken,signRefreshToken,refreshCookieOptions } from "../../../../lib/jwt";

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

    const User=await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:passwordHash
        },
        select:{
            name:true,
            email:true,
            password:true
        }
    });

    const tokenPayload={
        id:User.id,
        email:User.email
    };

    const accessToken=signAccessToken(tokenPayload);

    const refreshToken=signRefreshToken({id:User.id});

    const response=NextResponse.json({
        success:true,
        message:"User Registered successfully",
        data:{
            User,
            accessToken
        }
    },{status:201});

    response.cookies.set("refreshToken",refreshToken,refreshCookieOptions);
    return response;
   } catch (error) {
        console.error(error)
        return NextResponse.json({success:false,message:"Internal server Error"},{status:500});
   }
}