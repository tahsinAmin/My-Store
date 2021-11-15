import React from 'react'
import Product from '../../../models/product'

export default async function ProductId(req,res) {
   const { pid } =  req.query
   const product = await Product.findOne({_id:pid})
   res.status(200).json(product)
}
