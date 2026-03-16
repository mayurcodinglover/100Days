-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "verifiedExpiry" TIMESTAMP(3),
ADD COLUMN     "verifiedToken" TEXT;
