import connectDB from '@/config/database';
import Property from '@/models/Property';

type Params = {
    id: string;
}

// GET /api/properties/:id
export const GET = async (request: Request, { params } : { params: Params }) => {
    try {
        await connectDB();
 
        // Fetch a single property
        const properties = await Property.findById(params.id);

        if (!properties) {
            return new Response('Property Not Found', { status: 404 });
        }

        // Return properties as JSON
        return new Response(JSON.stringify(properties), { status: 200 });
        
    } catch (error) {
        return new Response('Something Went Wrong', { status: 500 });
    }
};