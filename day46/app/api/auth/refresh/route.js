import { NextResponse } from "next/server"
import { refreshCookieOptions, signAccessToken, signRefreshToken, verifyRefreshToken } from "../../../../lib/jwt";
import prisma from "@/lib/prisma";

export async function POST(req){
    try {
        const refreshToken=await req.cookies.get("refreshToken")?.value;
        if(!refreshToken)
        {
            return NextResponse.json({success:false,message:"Refresh Token not provided"},{status:401});
        }
        let decode;
        try {
            decode=verifyRefreshToken(refreshToken);
        } catch (error) {
            const message=error.name==="TokenExpiredError" ? "Refresh Token expired Please login again": "Invalid refresh Token please log in again";
            const response=NextResponse.json({success:false,message},{status:500});
            response.cookies.delete("refreshToken",refreshCookieOptions);
            return response;
        }
        const user=await prisma.user.findUnique({
            where:{id:decode.id},select:{
                id:true,
                name:true,
                email:true
            }
        });

        if(!user)
        {
            const response= NextResponse.json({success:false,message:"User not found"});
            response.cookies.delete("refreshToken");
            return response
        }
        const payload={
            id:user.id,
            name:user.name,
            email:user.email
        }
        const newAccessToken=signAccessToken(payload);
        const newRefreshToken=signRefreshToken({id:user.id});

        const response=NextResponse.json({success:true,message:"Token refreshed successfully",newAccessToken});
        response.cookies.set("refreshToken",newRefreshToken,refreshCookieOptions);
        return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json({success:false,message:"Internal server Error"},{status:500});
    }
}