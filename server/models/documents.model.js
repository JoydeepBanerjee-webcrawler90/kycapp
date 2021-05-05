const mongoose = require("mongoose");

const KycDocuments = mongoose.model(
  "documents",
  new mongoose.Schema({
    document_name: String,
    document_type: String,
    document_url: String,
    is_verified:Boolean,
    user_id:
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
  },{ timestamps: true })

);

const BankDocuments = mongoose.model(
  "bank_documents",
  new mongoose.Schema({
    document_name: String,
    document_type: String,
    bank_name:String,
    bank_ifsc:String,
    bank_vid:String,
    account_no:String,
    credited_amount:String,
    is_verified:Boolean,
    document_url: String,
    user_id: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },{ timestamps: true })

);

module.exports = {KycDocuments,BankDocuments};

