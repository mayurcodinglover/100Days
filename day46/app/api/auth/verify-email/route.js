import prisma from "@/lib/prisma";
import { NextResponse } from "next/server"

export async function GET(req){
    try {
        const {searchParams}=new URL(req.url);
        const token=searchParams.get("token");

        if(!token)
        {
            return NextResponse.json({success:false,message:"Token is not provided"},{status:400});
        }
        const userExist=await prisma.user.findFirst({
            where:{verifiedToken:token}
        });
        if(!userExist)
        {
            return NextResponse.json({success:false,message:"Invalid Token"},{status:400});
        }
        if(userExist.isVerified)
        {
            return NextResponse.json({success:false,message:"User Already Verified"},{status:400});
        }
        if(new Date() > new Date(userExist.verifiedExpiry))
        {
            return NextResponse.json({success:false,message:"Token Expired Please Request a new Verification Email"},{status:410});
        }
        await prisma.user.update({
            where:{id:userExist.id},
            data:{
                isVerified:true,
                verifiedToken:null,
                verifiedExpiry:null
            }
        });
        return NextResponse.json({success:true,message:"Email Verified Successfully"},{status:200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({success:false,message:"Internal server Error"},{status:500});
    }
}