import { Schema, model, models } from 'mongoose';

const PropertySchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    location: {
        street: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        zipcode: {
            type: String
        }
    },

    beds: {
        type: Number,
        required: true,
    },
    baths: {
        type: Number,
        required: true,
    },
    sqaure_feet: {
        type: Number,
        required: true,
    },
    amenities: [
        {
            type: String
        }
    ],
    rates: {
        nightly: {
            type: Number,
        },
        weekly: {
            type: Number,
        },
        monthly: {
            type: Number,
        },
    },
    seller_info: {
        name: {
            type: String
        },
        email: {
            type: String
        },
        phone: {
            type: String
        },
    },
    images: [
        {
            type: String
        }
    ],
    is_featured: {
        type: Boolean,
        default: false
    }
},  {
    timestamps: true,
});

// 定义一个名为 Property 的常量
// 如果 models 对象中存在 Property 属性，则将其赋值给 Property
// 否则，使用 model 函数创建一个名为 'Property' 的新模型对象，模型的结构为 PropertySchema
const Property = models.Property || model('Property', PropertySchema);

export default Property; // Export the model to use it in other parts of your application.