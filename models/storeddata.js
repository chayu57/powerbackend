const mongoose = require("mongoose");

const Schema = mongoose.Schema; // No need to invoke mongoose.Schema() as a function

const storeddataSchema = new Schema({
    power: {
        type: Schema.Types.Number,
        required: true
    },
    temperature: {
        type: Schema.Types.Number,
        required: true
    },
    vibration: {
        type: Schema.Types.Number,
        required: true
    },
    sound: {
        type: Schema.Types.Number,
        required: true
    },
    efficiency: {
        type: Schema.Types.Number,
        required: true
    },
    onoff: {
        type: Schema.Types.String, // Use Schema.Types.String instead of mongoose.Schema.Types.String
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("storeddata", storeddataSchema);