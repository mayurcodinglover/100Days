import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { sendValidationEmail } from "../../../../lib/email";

import crypto from "crypto";
export async function POST(req)
{
   try {
         const {email}=await req.json();
    if(!email)
    {
        return NextResponse.json({success:false,message:"Email is required"},{status:400});
    }
    const user=await prisma.user.findUnique({where:{email:email.toLowerCase().trim()}});
    if(!user || user.isVerified)
    {
        return NextResponse.json({success:false,message:"If this email is exist and is verified then a link has been sent"},{status:200});
    }
    const oneMinuteAgo=new Date(Date.now()-60*1000);
    if(user.verifiedExpiry)
    {
        const tokencreatedApproax=new Date(user.verifiedExpiry-24*60*60*1000);
        if(tokencreatedApproax>oneMinuteAgo)
        {
            return NextResponse.json({success:false,message:"Please wait 1 Minute before requasting another Email"},{status:429});
        }
    }
    const newtoken=crypto.randomBytes(32).toString("hex");
    const newExpiry=new Date(Date.now()+24*60*60*1000);

    await prisma.user.update({
        where:{id:user.id},
        data:{
            verifiedToken:newtoken,
            verifiedExpiry:newExpiry
        }
    });
    sendValidationEmail(user.email,user.name,newtoken).catch((err)=>console.log("Error",err));

    return NextResponse.json({success:true,message:"If this message exist and unverified then email link has been sent"},{status:200})
   } catch (error) {
    console.error(error);
    return NextResponse.json({success:false,message:"Internal server Error"},{status:500});
   }
}