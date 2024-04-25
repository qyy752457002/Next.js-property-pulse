import connectDB from '@/config/database';
import Property from '@/models/Property';

// GET /api/properties
export const GET = async (request) => {
    try {
        await connectDB();

        // Fetch all properties
        const properties = await Property.find({});

        // Return properties as JSON
        return new Response(JSON.stringify(properties), { status: 200 });
        
    } catch (error) {
        return new Response('Something Went Wrong', { status: 500 });
    }
};