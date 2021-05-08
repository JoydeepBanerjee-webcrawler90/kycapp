import React, {Component} from 'react';
import Header from './Header';
import SideBar from './SideBar';
import {withRouter} from 'react-router-dom';
import Uploader from '../services/uploader.service';
import KycDocuments from '../services/documents.service';
import { toast } from 'react-toastify';
import Config from '../config';
toast.configure();

const user_id = Config().USER_ID;
const BASEURL = Config().BASEURL;

class KycForm extends Component {

    constructor() {
        super();
        this.state = {
            aadhaar_file:'',
            user_document_info:{
                data:{
                    document_name:'',
                    document_type:'',
                    document_url:'',
                }
            }
        }
    }

    onSubmitAadhaarForm(e) {
        e.preventDefault();
        let aadhaar_file = e.target.aadhaar_file.files[0];
        this.setState({
            aadhaar_file:aadhaar_file
        })
        if(!aadhaar_file) {
            toast.error('Select a file to continue');
            return;
        }
        const data = new FormData();
        data.append('aadhaar_file', aadhaar_file);
        data.append('document_name','Addhaar File');
        data.append('document_type','AdhaarCard');
        data.append('user_id',user_id);

        Uploader.aadhaar_upload(data).then(res => {

            toast.success(res.data.message);
        });

    }

    async componentDidMount() {
        
        
        await this.getAadhaarData();
        // setTimeout(()=> {
        //     console.log(this.state.user_document_info);
        // },4000);
        
    }

    getAadhaarData() {
        const user_id = localStorage.getItem('user_id');
        let data = {user_id:user_id};
        console.log(user_id)
        KycDocuments.getAadhaar(data).then(res => {

            if(res.data !== undefined) {
                this.setState({
                    user_document_info:res.data
                })
            }
        });
    }
    
    render(){
        return (
            <div>
            <Header/>
            <SideBar/>
            <div className="content-wrapper p-2">
                  <form name="aadhaar_verification" encType="multipart/form-data" onSubmit={(e) => this.onSubmitAadhaarForm(e)}>
                    <div className="row m-2 bg-white justify-content-center shadow-sm p-2 m-2">
                        <div className="col-lg-4">
                            <label>
                                    Enter Aadhaar Card Image ( Front Side) 
                            </label>
                        </div>
                        <div className="col-lg-4 form-group">
                           
                            <input type="file" name="aadhaar_file" className="form-control"/>
                        </div>
                        <div className="col-lg-4 form-group mt-1">
                            <button type="submit" className="btn btn-success p-1"><i className='fa fa-upload'></i> Upload</button>
                        </div>
                    </div>
                  </form>
                  {(this.state.user_document_info.data!=null) ? <div className="row m-2 aadhaarInfo">
                      <div className="col-lg-12 shadow-sm bg-secondary">
                          <h6 className="text-bold pt-2 pl-1"><i className="fas fa-check-circle"></i> Latest Aadhaar Card Info</h6>
                      </div>
                      <div className="col-lg-4 mt-2 mr-1 shadow-sm bg-white p-2 text-bold">
                          <span>Document Type: {this.state.user_document_info.data.document_name}</span>
                          <span className="p-2"><a href={ BASEURL+this.state.user_document_info.data.document_url} className="badge badge-secondary" target="_blank" rel="noreferrer"><i className='fas fa-download'></i> Download</a></span>
                      </div>
                      <div className="col-lg-4 mt-2 mr-1 shadow-sm bg-white p-2 text-bold">
                          <span>Document Status: {(this.state.user_document_info.data.is_verified) ? <span className='badge badge-success p-1'>Verified</span> : <span className='badge badge-danger p-1'>Not Verified</span>  }</span>
                          
                      </div>
                  </div> : null }
                  
            </div>
            </div>
       )
    }
}

export default withRouter(KycForm);