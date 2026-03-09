import jwt from "jsonwebtoken"

const Access_Secret=process.env.JWT_ACCESS_SECRET;
const Refresh_Secret=process.env.JWT_REFRESH_SECRET;
const Access_Secret_Expiry=process.env.JWT_ACCESS_EXPIRATION;
const Refresh_Secret_Expiry=process.env.JWT_REFRESH_EXPIRATION;

export const signAccessToken=(payload)=>{
    if(!Access_Secret) throw new Error("Access Token not provided");
    return jwt.sign(payload,Access_Secret,{expiresIn:Access_Secret_Expiry});
}

export const signRefreshToken=(payload)=>{
    if(!Refresh_Secret) throw new Error("Refresh Token not provided");
    return jwt.sign(payload,Refresh_Secret,{expiresIn:Refresh_Secret_Expiry});
}

export const verifyAccessToken=(token)=>{
    if(!Access_Secret) throw new Error("Access Token not provided");
    return jwt.verify(token,Access_Secret);
}

export const verifyRefreshToken=(token)=>{
    if(!Refresh_Secret) throw new Error("Refresh Token not provided");
    return jwt.verify(token,Refresh_Secret);
}

const isprod=process.env.NODE_ENV==="production";

export const refreshCookieOptions={
    httpOnly:true,
    secure:isprod,
    sameSite:"strict",
    path:"/api/auth",
    maxAge:7*24*60*60*1000 //7 days
}