import prisma from "@/lib/prisma";
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"
import { refreshCookieOptions, signAccessToken, signRefreshToken } from "../../../../lib/jwt";

export async function POST(request){
    try {
        const {email,password}=await request.json();

        if(!email || !password)
        {
            return NextResponse.json({success:false,message:"Al fields are required"});
        }
        const userExist=await prisma.user.findUnique({
            where:{email:email},select:{id:true,email:true,password:true}
        });
        if(!userExist)
        {
            return NextResponse.json({success:false,messge:"User not exist in the database"});
        }
        const comparePass=await bcrypt.compare(password,userExist.password);
        if(!comparePass)
        {
            return NextResponse.json({success:false,message:"Email or password is not correct"});
        }
        const tokenPayload={
            id:userExist.id,
            email:userExist.email
        }
        const accessToken=signAccessToken(tokenPayload);
        const refreshToken=signRefreshToken({id:userExist.id});

        const response=NextResponse.json({success:true,message:"User log in successfully",accessToken},{status:200});
        response.cookies.set("refreshToken",refreshToken,refreshCookieOptions);
        return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json({success:false,message:"Internal server Error"},{status:500});
    }
}