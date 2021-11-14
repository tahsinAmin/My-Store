import mongoose,  { models } from 'mongoose'

const productsSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   price: {
      type: Number,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   mediaUrl: {
      type: String,
      required: true
      
   },

})

// export default mongoose.model('product', productsSchema);
// In order to use it in many place, we'll write this instead the commented one written up.
export default mongoose.models.product || mongoose.model('product', productsSchema);