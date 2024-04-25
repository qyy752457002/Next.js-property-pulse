import mongoose from 'mongoose';

let connected = false; 

const connectDB = async() => {

    // 设置mongoose模型严格查询，当查询条件不符合JSDG030和JSDG050规范时，会抛出错误
    mongoose.set('strictQuery', true);

    // if the database is already connectd, don't connect again
    if (connected) {
        console.log('MongoDB is already connected...');
        return;
    }

    // Connect to MongoDB
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
        console.log('MongoDB is connected...');
    } catch (error) {
        console.log(err); 
    }
};

export default connectDB;


    
