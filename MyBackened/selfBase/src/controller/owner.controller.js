import Owner from "../model/owner.model.js";
export const ownerController=async(req,res)=>{
    const {fullName,email,password}=req.body;
    try {
        let owners=await Owner.find();
       
        if(owners.length>0){
            console.log("owners",owners)
                return res.status(401).send({message:`You don't have permission to create a new Owner`})
        }
        // res.json({message:`We can create a new owner`})
        const createdOwner=await Owner.create({
            fullName:fullName,
            email:email,
            password:password,
           
        })
        res.status(201).json({
            message:`Successfully create an Owner..`,
            data:createdOwner,
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Server side error...",
            err:error,

        })
        
    }
}
 