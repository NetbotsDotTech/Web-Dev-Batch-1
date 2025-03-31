import mongoose from "mongoose";

const productPurchaseSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    productDetail:{
        
            productname:{
                type:String,
                trim:true,
                
            },
            productDescription:{
                type:String,
                trim:true,        
            },
            images:{
                type:[String]
            },
            category:{
                type:String,
                trim:true,
                enum:['men','women','kids']
            },
        
       

    },
    shippingDetail:{
        RecipientName:{
            type:String,
            required:true
        },
        address:{
            type:String,
            requried:true
        },
        city:{
            type:String,
            required:true
        },
        postalCode:{
            type:String,
            required:true
        },
        country:{
            type:String,
        },
        phone:{
            type:String,
            requried:true
        },
        shippingMethod:{
            type:String,
            enum:['Standard','Express','Overnight'],
            default:'Standard'
        },
        shippingCost:{
            type:Number,
            default:0
        }
       

    },
    paymentDetail:{
        paymentMethod:{
            type:String,
            requried:true
        },
        cardNumber:{
            type:Number,
            max:16,
            unique:true,
            requried:true
        },
       
        CvvCode:{
            type:Number,
            max:4,
            unique:true,
            required:true
        },
        cardHolderName:{
            type:String,
            required:true,

        },
        expiryDate:{
            type:Date,
            requried:true
        },

    },
    others:{
        currency:{
            type:Number,
            default:'PKR'
        },
        deliveryStatus:{
            type:String,
            enum:['Pending','Completed','Failed','Refused   '],
            default:'Pending'
        },
        paymentDate:{
            type:Date,
            default:Date.now()
        },
        orderDate:{
            type:Date,
            default:Date.now()
        }
        
    }
    

},
{timestamps:true}
)

export default mongoose.model('ProductPurchase',productPurchaseSchema)