import ProductPurchase from '../model/productPurchase.model.js'
import { nanoid } from 'nanoid';

export const purchaseProduct = async (req, res) => {
    const { userId, productDetail, shippingDetail, paymentDetail, others } = req.body;
    console.log("product Detail in purchaseProduct is:", productDetail);
    const id=nanoid(6);
    // Normalize product details and add unique orderId for each product
    const normalizedProductDetail = productDetail.map(product => ({
        orderId: id,  // Generate unique orderId for each product
        productname: product.productName, // Change to match schema
        productDescription: product.description, // Change to match schema
        images: [product.image], // Convert to array of images
        category: product.category,
        price:product.price,
        brand:product.brand,
        quantity:product.quantity,
        size:product.size,

        // Additional fields as needed (quantity, rating, etc.)
    }));
    console.log("normalizedProductDetail in purchaseProduct is:", normalizedProductDetail);

    // Validate required fields
    if (!userId || !normalizedProductDetail || !shippingDetail || !paymentDetail) {
        return res.status(400).json({
            status: 400,
            message: "Product, shipping, and payment details are required."
        });
    }

    try {
        const newProductPurchase = new ProductPurchase({
            userId,
            productDetail: normalizedProductDetail, // Now includes orderId for each product
            shippingDetail, // Includes RecipientName, address, city, postalCode, etc.
            paymentDetail,  // Includes paymentMethod, cardNumber, CvvCode, etc.
            others          // Includes deliveryStatus, paymentDate, orderDate, etc.
        });

        const savedPurchase = await newProductPurchase.save();

        res.status(201).json({
            status: 201,
            message: "Product purchase added successfully.",
            data: savedPurchase
        });

    } catch (error) {
        console.error("Error adding product purchase:", error);
        return res.status(500).json({
            status: 500,
            message: "Server error while adding the product purchase.",
            error: error.message
        });
    }
};


// export const purchaseProduct=async(req,res,next)=>{
//     const {productname,productDescription,category,RecipientName,address,city,postalCode,country,phone,shippingMethod,shippingCost,paymentMethod,cardNumber,CvvCode,cardHolderName,expiryDate,currency,deliveryStatus,paymentDate,orderDate}=req.body;
//     console.log("RecipientName:",RecipientName,"city is:",city)
//     // const {userId}=req.user._id;
//     // console.log("user id in purchase product is:",userId)
// try {
//         let images=[];
//         if(req.files){
//             images=req.files.map(file=>file.path);

//         }

//         const productDetail={
//             productname,
//             productDescription,
//             images,
//             category,          
//         }
//         const shippingDetail={
//             RecipientName,
//             address,
//             city,
//             postalCode,
//             country,
//             phone,
//             shippingMethod,
//             shippingCost,
//         }
//         const paymentDetail={
//             paymentMethod,
//             cardNumber,
//             CvvCode,
//             cardHolderName,
//             expiryDate,
//         }
//         const others={
//             currency,
//             deliveryStatus,
//             paymentDate,
//             orderDate
//         }

//         const parchaseProduct=new ProductPurchase({
//             productDetail,
//             shippingDetail,
//             paymentDetail,
//             others

//         })

//         await parchaseProduct.save();
//         res.status(201).json({
//             message:"Successfully added product for purchase.......",
//             detail:parchaseProduct
//         })
//     }     
        
//      catch (error) {
//         console.log("Error in add purchased Product is :",error.message)
//         res.status(500).json({
//             status:500,
//             message:"Server side error",
//             err:error
//         })
        
//     }
// }
export const viewPurchaseProductbyId=async(req,res,next)=>{
    const {id}=req.params
    console.log("user id in view purchase product is:",req.params)
    try {
        const parchasedProductDetail=await ProductPurchase.find({userId:req.params.id})
        console.log("parchasedProductDetail is:",parchasedProductDetail)
        if(!parchasedProductDetail){
            return res.status(400).json({
                status:400,
                message:`There are not any Parchased Product match with this id: ${id}`
            })
        }
        res.status(200).json({
            status:200,
            message:`The Product detail with id: ${id}`,
            detail:parchasedProductDetail

        })
        
    } catch (error) {
        console.log("Error in add purchased Product is :",error)
        return res.status(500).json({
            message:"Server side Error",
            err:error
        })
        
    }
}
export const AllPurchaseProduct = async (req, res, next) => {
    const { userId } = req.user;
    try {
        const allPurchasedProducts = await ProductPurchase.find({userId});

        if (!allPurchasedProducts || allPurchasedProducts.length === 0) {
            return res.status(404).json({
                status: 404,
                message: "There are no purchased products in the database. Kindly purchase some products.",
            });
        }

        res.status(200).json({
            status: 200,
            message: "Purchased products are:",
            detail: allPurchasedProducts,
        });
        
    } catch (error) {
        console.log("Error in fetching purchased products:", error);
        return res.status(500).json({
            message: "Server-side error",
            error: error.message,
        });
    }
};

  
export const deletePurchaseProduct=async(req,res,next)=>{
    const {id}=req.params;
    try {
        const deletePurchaseProduct=await ProductPurchase.findByIdAndDelete(id);
        res.status(200).json({
            status:200,
            message:`Successfully deleted the Purchased Product which id is: ${id}`,
            detail:deletePurchaseProduct
        })
        
    } catch (error) {
        console.log("Error in add purchased Product is :",error)
        return res.status(500).json({
            message:"Server side Error",
            err:error
        })
        
    }
}
export const UpdatePurchaseProduct=async(req,res,next)=>{
    try {
        
    } catch (error) {
        
    }
}