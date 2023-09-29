import mongoose, {model, Schema, models} from "mongoose";

const FeaturedProductSchema = new Schema({
    product: {type: mongoose.Types.ObjectId, ref: 'Product'},
});

//export const FeaturedProduct = models.FeaturedProduct || model('FeaturedProduct', FeaturedProductSchema)
export const FeaturedProduct = mongoose.models && "FeaturedProduct" in mongoose.models ? mongoose.models.FeaturedProduct : mongoose.model("FeaturedProduct", FeaturedProductSchema);
