
import { NextResponse } from 'next/server'
import { mongooseConnect } from '../../../../lib/mongoose';
import { FeaturedProduct } from '@models/FeaturedProduct';


export async function GET(request) {
    await mongooseConnect();
    return NextResponse.json(await FeaturedProduct.find().populate('product'));
}
