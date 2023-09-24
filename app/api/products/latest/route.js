
import { NextResponse } from 'next/server'
import { mongooseConnect } from '../../../../lib/mongoose';
import { Product } from '@models/Product';


export async function GET(request) {
    await mongooseConnect();
    return NextResponse.json(await Product.find({}, null, {sort: {'_id': -1}, limit:10}));
}
