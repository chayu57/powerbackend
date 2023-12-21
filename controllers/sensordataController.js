const SensorData=require("../models/sensordata");

const sensordataHandler=async(req,res,next)=>{
    const {power,temperature,vibration,sound,efficiency,onoff}=req.body;
    let exists=false,sensordata;
    try{
        sensordata=await SensorData.find();
        if(sensordata.length==1){
            exists=true;
        }
        // console.log(sensordata);
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"updating data failed",
        });
    }

    if(exists){
        const result=await SensorData.findOneAndUpdate(
            {_id:sensordata[0]._id},
            {
            power:power,
            temperature:temperature,
            vibration:vibration,
            sound:sound,
            efficiency:efficiency,
            onoff:onoff
        });
    }
    else{
        try{
            const newSensorData= new SensorData({
                power:power,
                temperature:temperature,
                vibration:vibration,
                sound:sound,
                efficiency:efficiency,
                onoff:onoff
            });
            await newSensorData.save();
            }catch(err){
                console.log(err);
                res.status(500).json({
                    message:"updating data failed",
                });
            }
    }
    res.status(200).json({
        message:"data updated",
    });
}

const addHours=(numOfHours,date= new Date())=>{
    date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
    return date;
}

// get request for livedata
const getdataHandler =async(req,res,next)=>{
    let sensordata,updatedAtold;
    try{
        sensordata=await SensorData.find();
        console.log(sensordata);
    } catch (err){
        console.log(err);
        res.status(500).json({
            message:"updating data failed",
        });
    }
    if(sensordata.length==1){
       
    updatedAtold=  Date(sensordata[0].updatedAt);
    
    }
    res.status(200).json({
        power:sensordata[0].power,
        temperature:sensordata[0].temperature,
        vibration:sensordata[0].vibration,
        sound:sensordata[0].sound,
        efficiency:sensordata[0].efficiency,
        onoff:sensordata[0].onoff,
        timestamp:updatedAtold
    
    });
}
exports.sensordataHandler=sensordataHandler;
exports.getdataHandler=getdataHandler;