import mime from "mime";
import { NextResponse } from 'next/server'
import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { mongooseConnect } from "@lib/mongoose";


export async function POST(request){
    await mongooseConnect();
    
    const formData = await request.formData();
    const file = formData.get("file");

    const buffer = Buffer.from(await file.arrayBuffer());

    try {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        const filename = `${file.name.replace(
            /\.[^/.]+$/,
            ""
        )}-${uniqueSuffix}.${mime.getExtension(file.type)}`;


        const client = new S3Client({
            region: 'ap-south-1',
            credentials: {
                accessKeyId: process.env.AWS_S3_ACCESS_KEY,
                secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY
            }
        })
        await client.send(new PutObjectCommand({
            Bucket: 'svr-color-lab',
            Key: filename,
            Body: buffer,
            ACL: 'public-read',
            ContentType: mime.getExtension(file.type)
        }))
        const link = `https://svr-color-lab.s3.amazonaws.com/${filename}`
        return NextResponse.json({ link });
        } catch (e) {
            console.error("Error while trying to upload a file\n", e);
            return NextResponse.json(
            { error: "Something went wrong." },
            { status: 500 }
            );
        }
}


export async function DELETE(request){
    await mongooseConnect();
    const link = request.nextUrl.searchParams.get('link');
    const filename = link.replace("https://svr-color-lab.s3.amazonaws.com/","")
    
    try {
        const client = new S3Client({
            region: 'ap-south-1',
            credentials: {
                accessKeyId: process.env.AWS_S3_ACCESS_KEY,
                secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY
            }
        })
        await client.send(new DeleteObjectCommand({
            Bucket: 'svr-color-lab',
            Key: filename,
        }))
        return NextResponse.json("Deleted Successfully!");
        } catch (e) {
        console.error("Error while trying to delete the file\n", e);
        return NextResponse.json(
            { error: "Something went wrong." },
            { status: 500 }
        );
    }
}
