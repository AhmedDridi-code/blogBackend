
const Admin = require('../models/admin')
module.exports.addAdmin = async (req,res,next)=>{
    try {
        const body = {...req.body};
        const admin = new Admin(body);
       const responce = await admin.save();
        return res.status(200).json(responce);
    }catch (err) {
        return res.status(500).json(err);
    }

}