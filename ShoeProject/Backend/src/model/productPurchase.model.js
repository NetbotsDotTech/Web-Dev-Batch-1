import mongoose from "mongoose";

const productPurchaseSchema=new mongoose.Schema({
    userId:{
                type:String,
                required:true,
            },
    productDetail:[
        {
            orderId:{
                type:String,
                required:true,
            },
            
        
            productname:{
                type:String,
                
            },
            productDescription:{
                type:String,
            },
            images:{
                type:[String]
            },
            category:{
                type:String,
                enum:['men','women','kids']
            },
            quantity:{
                type:Number,
            },
            price:{
                type:Number,
            },
            brand:{
                type:String,
            },
            size:{
                type:Number
            }
                
                
        
       

    },
    ],
    shippingDetail:{
        RecipientName:{
            type:String,
        },
        country:{
            type:String,
        },
        city:{
            type:String,
        },
        state:{
            type:String,
        },
        address:{
            type:String,
        },
        postalCode:{
            type:String
        },
        phone:{
            type:String,
        },
        shippingMethod:{
            type:String,
            enum:['standard','Express','Overnight'],
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
        },
        cardNumber:{
            type:Number,
          
        },
       
        CvvCode:{
            type:Number,
           
        },
        cardHolderName:{
            type:String,

        },
        expiryDate:{
            type:Date,
        },

    },
    others:{
        currency:{
            type:Number,
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