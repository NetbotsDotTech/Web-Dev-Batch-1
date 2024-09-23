import Product from '../model/product.mode.js'

export const addProduct=async(req,res)=>{
    const {productName,productDescription,category,...other}=req.body;

    try {
        const product=new Product({
            productname,
            productDescription,
            category,
            ...other
        })

        await product.save();
        res
        .status(201)
        .json({
            message:"Successfully Added Product...",
            detail:product
        })
        
    } catch (error) {
        console.log(error)
        res
        .status(500)
        .json({
            message:"Error on server side...........",
            err:error
        })
        
    }
}

export const getProduct=async(req,res)=>{
    const {id}=req.params;
    try {
        const getproduct= await Product.findById(id);
        res
        .status(200)
        .json({
            message:"Successfully get the following data:-",
            data:getProduct
        })

        
    } catch (error) {
        console.log(error)
        res
        .status(500)
        .json({
            message:"Server side Error.....",
            err:error
        })
        
    }
}

export const delProduct=async(req,res)=>{
    const {id}=req.params;

    try {
        const delproduct=await Product.findOneAndDelete(id);
        res
        .status(200)
        .json({
            message:"Successfully Deleted ......."
        })
        
    } catch (error) {
        console.log(error)
        res
        .status(500)
        .json({
            message:"Server side Error......"
        })
    }
}

export const updateProduct=async(req,res)=>{
    const {id}=req.params;
    const {productName,productDescription,category}=req.body;
    try {
        const updateprodcut=await Product.findByIdAndUpdate(
            id,
            {
                productName:productName || "default Name",
                productDescription:productDescription || "Default description",
                category:category||"men",
                price:price|| 0



            },
            {new:true}
        )
        if(!updateprodcut){
            return res.status(400).json({message:"Product not found in dataBase"})
        }
        res
        .status(200)
        .json({
            message:"Successfully update ",
            data:updateprodcut
        })
        
    } catch (error) {
        console.log(error)
        res
        .status(500)
        .json({
            message:"Server side Error......"
        })
        
    }
}