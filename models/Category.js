import mongoose, {model, Schema, models} from "mongoose";

const CategorySchema = new Schema({
    name: {type: String, required: true},
    parent: {type: mongoose.Types.ObjectId, ref:'Category'},
    properties: {type: Object}
});

//export const Category = models.Category || model('Category', CategorySchema)
export const Category = mongoose.models && "Category" in mongoose.models ? mongoose.models.Category : mongoose.model("Category", CategorySchema);
