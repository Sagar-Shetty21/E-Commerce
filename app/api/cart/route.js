
import { NextResponse } from 'next/server'
import { mongooseConnect } from '@lib/mongoose';
import { Product } from '@models/Product';


export async function POST(request) {
    await mongooseConnect();
    const {ids} = await request.json();
    return NextResponse.json(await Product.find({_id: ids}));
}