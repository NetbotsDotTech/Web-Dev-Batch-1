export const createError=(status,message)=>{
    const err=new Error();
    console.log(err)
    err.status=status;
    err.message=message;
   return err
}