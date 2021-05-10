const db = require("../models");
const { BankDocuments } = require("../models/documents.model");
const Document = db.document;
const axios = require('axios').default;
const User = db.user;
const btoa = require("btoa");
const request = require('request')

exports.getBankDetails = (req,res,next) => {
  
  var user_id = req.query.user_id;

 BankDocuments.find({user_id:user_id}).populate({
    path: "user_id",
    populate: {
       path: "roles" 
    }
 }).exec((err,response) => {
      if(err) {
        res.json({message:'Somthing went wrong'}).status(500);
      } else {
        if(response) {
          res.json({message:"Bank Details found!",data:response,status:200});
          res.end();
        } else {
          res.json({message:"No Bank Details found!",data:response,status:200});
          res.end();
        }
      }
    
  });
}

exports.removeBankDetail = (req,res,next) => {
    var __id = req.body.id;
    BankDocuments.findByIdAndRemove(__id, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.status(200).json({
            status:200,
            msg: data
          })
        }
      })
}
exports.verifyBank =  (req, res,next) => {
 
  var account_no = req.body.account_no;
  var ifsc_code = req.body.ifsc_code;
  var authkey = btoa("AI5WM5NAG2TNMAXC9JVP2BVPYTBLKWS3:EHZ43KUXFU2XJTHM8JTTFY4WJC4CZ1VV");

  request.post(
    'https://ext.digio.in:444/client/verify/bank_account',
    {
      headers: {
            'Content-Type' : 'application/json',
            'Authorization' : 'Basic '+authkey
      },
      json: {
            "beneficiary_account_no" : parseInt(account_no),
            "beneficiary_ifsc" : ifsc_code
      }
    },
    (error, response, body) => {
      if (error) {
        console.error(error)
        return
      }
 
      BankDocuments.findOne({account_no:account_no,user_id:req.body.user_id}, (err, response2) => {

        if(!response2 && body !== undefined) {

            let document_name = ( req.body.document_name !== undefined ) ? req.body.document_name : 'Bank Details'
            let document_type = ( req.body.document_type !== undefined ) ? req.body.document_type : 'Bank Document'
            let bank_name =  ( req.body.bank_name !== undefined ) ? req.body.bank_name : 'DUMMY'
            let vid = body.id
            let verified = (body.verified !== undefined) ? true : false;
            Documents = new BankDocuments({

                document_name: document_name,
                document_type: document_type,
                bank_name:bank_name,
                bank_ifsc:ifsc_code,
                bank_vid:vid,
                account_no:parseInt(account_no),
                credited_amount:0,
                is_verified:verified,
                document_url: '',
                user_id:req.body.user_id,
            });
            Documents.save((err, document) => {
                if (err) {
                res.status(500).send({ message: 'Error' });
                res.end();
                }

                res.status(200).json({message:body.message,data:body,status:response.statusCode,substatus:response.subStatusCode,is_saved:true})
                res.end();
            });
        }
        else {

            res.status(200).json({message:response,data:body,status:response.statusCode,is_saved:false})
            res.end();
        }
      });
      
      
    }
  )


};
