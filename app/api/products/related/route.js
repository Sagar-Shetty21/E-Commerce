
import { NextResponse } from 'next/server'
import { mongooseConnect } from '../../../../lib/mongoose';
import { Product } from '@models/Product';
import { Category } from '@models/Category';


export async function GET(request) {
    await mongooseConnect();

    return NextResponse.json(await Product.aggregate([
        { $sample: { size: 5 } },
    ]));
}