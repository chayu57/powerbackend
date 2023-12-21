const Storeddata=require("../models/storeddata");

const storeddataHandler=async(req,res,next)=>{
    //console.log(req.body);
    const {power , temperature, vibration, sound, efficency , onoff}=req.body;
    try{

    
    const newStoredData=new Storeddata (
        {
            power,
            temperature,
            vibration,
            sound,
            efficency,
            onoff
        }
    );
    await newStoredData.save();
    }catch(err){
        console.log(err);
    }
    // try{
    //     Storeddata.find({})
    // }
    res.status(200).json({
        message:"Post req recieved successfully",
    });
}

exports.storeddataHandler=storeddataHandler;