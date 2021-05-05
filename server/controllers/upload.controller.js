const db = require("../models");
const { KycDocuments } = require("../models/documents.model");
const Document = db.document;

const User = db.user;

exports.getAadhaar = (req,res,next) => {
  
  var user_id = req.query.user_id;

  Document.KycDocuments.findOne({user_id:user_id}).populate({
    path: "user_id",
    populate: {
       path: "roles" 
    }
 }).exec((err,response) => {
      if(err) {
        res.json({message:'Somthing went wrong'}).status(500);
      } else {
        if(response) {
          res.json({message:"Document found!",data:response});
          res.end();
        } else {
          res.json({message:"No Document found!",data:response});
          res.end();
        }
      }
    
  });
}
exports.uploadAadhaar =  (req, res,next) => {
 
  var document_name = req.body.document_name;
  var Documents = {};
  
  Document.KycDocuments.findOne({document_name:document_name,user_id:req.body.user_id}, (err, response) => {
    if(err) {
      res.json({message:'Somthing went wrong'}).status(500);
    } else {
      if(response) {
        res.json({message:"Document already exists!",data:response});
        res.end();
      } else {
        
          const file = req.files.aadhaar_file;
          const fileName = Date.now()+'_'+file.name;
          Documents = new KycDocuments({
          document_name: req.body.document_name,
          document_type: req.body.document_type,
          is_verified:true,
          user_id:req.body.user_id,
          document_url: fileName
        });
        Documents.save((err, document) => {
          if (err) {
            res.status(500).send({ message: 'Error' });
          }
          file.mv(`uploads/${fileName}`, function(err) {
            if (err) {
              return res.status(500).send(err);
            }
            res.json({message:'File saved successfully!', data:document});
            
          });
        });
      }
    }
  })
};
