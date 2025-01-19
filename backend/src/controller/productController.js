import { Product } from "../models/productModel.js";

export const getData = async(req, res)=>{
    try {
        const data = await Product.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(500)
        console.log(error)
    }
}

export const postData = async(req, res)=>{
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product)
    } catch (error) {
        res.status(500)
        console.log(error)
    }
}

export const deleteData = async(req, res)=>{
    try {
        const deletedData = await Product.findByIdAndDelete(req.params.id)
        if(!deletedData){
            res.status(404).send('Not found product')
        }
        res.send(deletedData)
    } catch (error) {
        res.status(500)
        console.log(error)
    }
}