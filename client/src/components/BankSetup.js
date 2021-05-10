import React, {Component} from 'react';
import Header from './Header';
import SideBar from './SideBar';
import {withRouter,Link} from 'react-router-dom';
import Config from '../config';
import { toast } from 'react-toastify';
import Bank from '../services/bank.service';
import swal from 'sweetalert';

toast.configure({autoClose:1000})
const BASEURL = Config().BASEURL;

class BankSetup extends Component {

    constructor() {
        super();
        this.state = {
            showLoader:true,
            aadhaar_file :'',
            show_info:true,
            data:[],
            user_id:Config().USER_ID
        }
    }

    async componentDidMount() {
        
        await this.getBankData()
    }

    onSubmitVerifyBank(e) {
        e.preventDefault();
        let account_no = e.target.account_no.value;
        let ifsc_code = e.target.ifsc_code.value;
        let bank_name = e.target.bank_name.value;
        let btn = e.target.btn;
 
        btn.disabled = true;
        btn.innerHTML = "<i className='fas fa-spinner fa-spin'></i> Verifying..";

        this.setState({
           account_no : account_no,
           ifsc_code : ifsc_code
        })
        if(account_no.length===0 || ifsc_code.length===0) {
            toast.error('All fields are mandatory',{autoClose:2000});
            btn.disabled = false;
            btn.innerHTML = "Submit";
            return;
        }

       

        const data = new FormData();
        data.append('account_no', account_no);
        data.append('ifsc_code',ifsc_code);
        data.append('bank_name',bank_name);
        data.append('user_id',this.state.user_id);

        Bank.verifyBank(data).then(res => {

            const resp = res.data
            btn.disabled = false;
            btn.innerHTML = "Submit";
            if(res.data.message && res.data.status !== 200) {

                toast.error(res.data.message); 

            } else {
               
                if(resp.data.verified === true) {

                    toast.success('Bank Account has been verified')

                } else {

                    toast.error('Bank account was not verified');
                }
                toast.info('Loading your bank details',{
                    autoClose:2500
                });
                setTimeout(() => {
                    this.getBankData();
                },2500);
                
            }

        }).catch(err => {
            btn.disabled = false;
            btn.innerHTML = "Submit";
            console.log(err)
        })

        return;
    }

    getBankData() {

        let data = {user_id:Config().USER_ID};

        Bank.getBankDetails(data).then(res => {

            if(res.data !== undefined) {

                const resp = res.data
  
                 this.setState({
                    data : resp.data,
                    show_info:true
                })
  
            }
        });
    }

    removeDetail(__id) {

        console.log(__id)
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this information!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
             
              Bank.removeBankDetail({id:__id})
              .then(res => {
                  swal("Success, bank detail was removed successfully", {
                    icon: "success",
                  });
                  setTimeout(() => {
                      this.getBankData();
                  },2500);
              })
              .catch(err => {
                  console.log(err)
              })
      
            } else {
              //swal("Your imaginary file is safe!");
            }
          });

       
    }


    render(){
        const dataset = this.state
        return (
            <div>
            <Header/>
            <SideBar/>
            <div className="content-wrapper p-2">
                  <form name="aadhaar_verification" encType="multipart/form-data" onSubmit={(e) => this.onSubmitVerifyBank(e)}>
                    <div className="row m-2 bg-white shadow-sm p-2 m-2">
                        <div className="col-lg-3 form-group">
                            <label>
                                    Enter Bank Name <span>*</span>
                            </label>
                            <input type="text" name="bank_name" className="form-control"/>
                        </div>
                        <div className="col-lg-3 form-group">
                            <label>
                                    Enter Bank Account Number <span>*</span>
                            </label>
                            <input type="number" name="account_no" className="form-control"/>
                        </div>
                        <div className="col-lg-3 form-group">
                            <label>
                                    Enter Bank IFSC Code <span>*</span>
                            </label>
                            <input type="text" name="ifsc_code" className="form-control"/>
                            
                        </div>
                       
                        <div className="col-lg-3 mt-1">
                           <br></br>
                            <button type="submit" name="btn" className="btn btn-success">Submit</button>
                        </div>
                    </div>
                  </form>
                  
                  <div className="row m-2 aadhaarInfo">

                      <div className="col-lg-12 shadow-sm bg-secondary">
                          <h6 className="text-bold pt-2 pl-1"><i className="fas fa-check-circle"></i> Bank Information</h6>
                      </div>
                      {(dataset.data.length > 0) ? 
                      <div className="col-lg-12">
                    
                      {(dataset.data.map((data, i) => {

                        return (
                       
                        <div className="row" key={data.id}>
                            <div className="col-lg-3 mt-2 shadow-sm bg-white p-2 text-bold">
                                <span className="small text-bold">Bank Name: <hr/> {(data.bank_name) ? <span className='p-1 text-bold'>{(data.bank_name)}</span> : null  }</span> 
                            </div>
                            <div className="col-lg-3 mt-2 shadow-sm bg-white p-2 text-bold">
                                <span className="small text-bold">Bank Account No: <hr/> {(data.account_no) ? <span className='p-1 text-bold'>{(data.account_no)}</span> : null  }</span> 
                            </div>
                            <div className="col-lg-2 mt-2 shadow-sm bg-white p-2 text-bold">
                                <span className="small text-bold">Bank Ifsc Code: <hr/> {(data.bank_ifsc) ? <span className='p-1 text-bold'>{(data.bank_ifsc)}</span> : null  }</span> 
                            </div>
                            <div className="col-lg-2 mt-2 shadow-sm bg-white p-2 text-bold">
                                <span className="small text-bold">Penny Drop Amount: <hr/> {(data.credited_amount !== undefined) ? <span className='p-1 text-bold'><i className='fas fa-rupee-sign'></i> {(parseFloat(data.credited_amount).toFixed(2))} </span> : null  }</span> 
                            </div>
                            <div className="col-lg-2 mt-2 shadow-sm bg-white p-2 text-bold">
                                <span className="small text-bold">Document Status: <hr/> {(data.is_verified) ? <span className='badge badge-success p-1'>Verified</span> : <span className='badge badge-danger p-1'>Not Verified</span>  }
                                    <Link to="#" onClick={(e) => this.removeDetail(data._id)}>
                                        &nbsp;Remove
                                    </Link>
                                </span> 
                            </div>
                        </div>
                        
                        )

                      }))}
                      </div>   
                      : <div className="col-lg-12">
                          <h5 className="bg-warning p-2"> No bank details found </h5>
                      </div> }         
                  
            </div>
            </div>
            </div>
       )
    }
}

export default withRouter(BankSetup);