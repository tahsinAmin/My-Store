import initDB from '../../helpers/initDB'
import User from '../../models/user'
import bcrypt from 'bcrypt'

initDB()

export default async (req, res) => {

   const {name, email, password} = req.body
   try{
      if(!name || !email || !password){
         return res.status(422).json({error: "Please add all the fields. "})
      }
      const user = await User.findOne({email});
      if(user){
         return res.status(422).json({error: "User already exists with this email."})
      }
      const hashedPassword =  await bcrypt.hash(password, 10)
      const newUser = await new User({
         name,
         email,
         password:hashedPassword
      }).save()
      console.log(newUser);
      res.status(201).json({message:"Sign Up Success"})
   }catch(err){
      console.log(err);
   }
}