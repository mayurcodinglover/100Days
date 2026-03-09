import prisma from "@/lib/prisma";

async function main(){
    await prisma.user.deleteMany();

    //seed Users
    const admin=await prisma.user.create({
        data:{
            name:"admin",
            email:"admin@gmail.com",
            password:"$2a$10$aLF2jqAlL2ZEbvSBTYlNa.uAPDkTBNvUQlwOi48LGtw2Fe3DSWYrm"
        }
    });
    console.log("data seeded successfully");
}
main().catch((e)=>{
    console.error("Seed Failed",e);
    process.exit(1);
})
.finally(async()=>{
    await prisma.$disconnect();
});