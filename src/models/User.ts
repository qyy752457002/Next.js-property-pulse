import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email is required']
    },
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    image: {
        type: String,
    },
    bookmarks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Property'
        }
    ]
}, {
    timestamps: true
});

// 定义一个名为 User 的常量
// 如果 models 对象中存在 Property 属性，则将其赋值给 Property
// 否则，使用 model 函数创建一个名为 'Property' 的新模型对象，模型的结构为 PropertySchema
const User = models.user || model('User', UserSchema);

// 导出 User 模型
export default User; 



