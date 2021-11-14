import initDB from "../../helpers/initDB"
import Product from '../../models/product'

initDB();

export default (req, res) => {
  Product.find().then(products => {
    res.status(200).json(products)
  })
}