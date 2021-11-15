import initDB from "../../helpers/initDB"
import Product from '../../models/product'

initDB();

export default async (req, res) => {
  await Product.find().then(products => {
    res.status(200).json(products)
  })
}