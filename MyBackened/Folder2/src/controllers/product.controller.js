import Product from '../models/product.model.js'
import mongoose from 'mongoose';


export const addProduct=async(req,res)=>{
    const {name,description,category,subCategories,rewive,...others}=req.body;
    try {
        const product=new Product({
            name,
            description,
            category,
            subCategories,
            rewive,
            ...others

        })
        await product.save();
        res.status(201).json({
            message:"Product added Successfully.......",
            data:product
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Something went wrong at server side....",
            err:error
        })
        
    }
}

export const getProductById=async(req,res)=>{
    const {id}=req.params;

    try {
        const getProduct= await Product.findById(id)
        res.status(200).json({
            message:`You get data with the help this id ${getProduct.id}`,
            data:getProduct
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Something went wrong at server side....",
            err:error
        })
        
    }
}
export const deleteProduct=async(req,res)=>{

    const {id}=req.params;

    try {
        
        const del=await Product.findByIdAndDelete(id);
        
        res.status(200).json({
            message:`Successfully deleted the product whose id is: ${id}`,
            data:del
            
        })
    } catch (error) {
        console.log(error)
       
        res.status(500).json({
            message:"Something went wrong at server side....",
            err:error
        })
        
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, description, category } = req.body;
    
    
    
    try {
        
        const updatedProduct = await Product.findByIdAndUpdate(
            id, 
            { 
                name: name || "Default Name",  
                price: price || 0,             
                description: description || "No description", 
                category: category || "Uncategorized" 
            }, 
            { new: true}  
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

       
        res.status(200).json({
            message: `Successfully updated the product with ID: ${id}`,
            data: updatedProduct
        });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({
            message: "Something went wrong on the server side.",
            error: error.message 
        });
    }
};
