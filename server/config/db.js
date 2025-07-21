import mongoose from "mongoose"


const   connectDB = async (req,res)=>{
    try {

        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected: ${conn.connection.host}`);
        
    } catch (error) {
        console.log(`Error at connectDB ${error}`)
        res.status(400).json({message:"Internal server Error"})
        process.exit(1);
    }
}

export default connectDB