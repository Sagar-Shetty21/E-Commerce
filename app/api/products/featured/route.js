
import { NextResponse } from 'next/server'
import { mongooseConnect } from '../../../../lib/mongoose';
import { Product } from '@models/Product';


export async function GET(request) {
    await mongooseConnect();
    const id = "650e9d66e8ee5c4b134e8eae";
    return NextResponse.json(await Product.findOne({_id: id}));
}
