const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const sensordataSchema = new Schema(
    
        {
        power:{
            type:Schema.Types.Number,
            required:true
        },
        temperature:{
            type:Schema.Types.Number,
            required:true
        },
        vibration:{
            type:Schema.Types.Number,
            required:true
        },
        sound:{
            type:Schema.Types.Number,
            required:true
        },
        efficiency:{
            type:Schema.Types.Number,
            required:true
        },
        onoff:{
            type: mongoose.Schema.Types.Number,
            required:true
        }
    },
        {
            timestamps:true
        }  
);

module.exports = mongoose.model("sensordata",sensordataSchema);