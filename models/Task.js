const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const TaskSchema = new Schema({
    title:{
        type:String,
        unique:false
    },
    content:{
        type:String,
        default:'İçerik girilmemiş'
    },
    date:{
        type:Date,
        default:Date.now
    },
    contributors:{
        type:Schema.Types.ObjectId, //dont forget that!
        required:true
    },
    status:{
        type:Number,
        required:true
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        required:true
    }
})

module.exports = mongoose.model('task',TaskSchema);