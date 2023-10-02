
import { NextResponse } from 'next/server'
import {Product} from '@models/Product'
import { mongooseConnect } from '@lib/mongoose';


export async function GET(request) {
    await mongooseConnect();
    const id = request.nextUrl.searchParams.get('id');
    if(id){
        return NextResponse.json(await Product.findOne({_id: id}));
    }
    return NextResponse.json(await Product.find());
}
