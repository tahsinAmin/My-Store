import mongoose,  { models } from 'mongoose'

const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true,
      unique:true,
   },
   password: {
      type: String,
      required: true
   },
   role: {
      type: String,
      required: true,
      default:"user",
      enum:["user","admin","root"]
   }
},{
   timestamps: true
})

// export default mongoose.model('product', productsSchema);
// In order to use it in many place, we'll write this instead the commented one written up.
export default mongoose.models.user || mongoose.model('user', userSchema);