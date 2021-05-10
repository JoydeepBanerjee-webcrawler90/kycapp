import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Config from '../config';

export default class Content extends Component {


    constructor(props) {
      super(props)

    }

    lastLogin(){
      var datetime = '';
      if(Config().USERINFO !== null && Config().USERINFO !== undefined) {
        console.log(Config().USERINFO)
        if(Config().USERINFO.updatedAt !== undefined) {
          datetime = Config().USERINFO.updatedAt.slice(0, 19).replace('T', ' ');
        }
        return datetime;
      } 

      return datetime
    }

    
    render(){
      
        return (
            <div className="content-wrapper p-2">
                  {/* <p>Welcome {(Config().USERINFO !== null) ? Config().USERINFO.username : null }</p> */}
          <div className="row">
          <div className="col-lg-3 col-6">
            <div className="small-box bg-info">
              <div className="inner">
                <h3>Incomplete</h3>
                <p>Kyc Verification</p>
              </div>
              <div className="icon">
              <i className="ion ion-id-card-outline"></i>
              </div>
              <Link to="/kyc-form" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></Link>
            </div>
          </div>
           
          <div className="col-lg-3 col-6">
             
            <div className="small-box bg-success">
              <div className="inner">
              
                <h3> <sup className="d-none">%</sup>0</h3>

                <p>Bank Verifications</p>
              </div>
              <div className="icon">
                <i className="ion ion-storefront-outline"></i>
              </div>
              <Link to="/bank-setup" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></Link>
            </div>
          </div>
          
          <div className="col-lg-3 col-6">
            
            <div className="small-box bg-warning">
              <div className="inner">
                <h3>0</h3>

                <p>Mutual Funds</p>
              </div>
              <div className="icon">
              <i className="ion ion-id-card-outline"></i>
              </div>
              <Link to="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></Link>
            </div>
          </div>
          
          <div className="col-lg-3 col-6">
             
            <div className="small-box bg-danger">
              <div className="inner">
                <h3>Last Login</h3>
                <p>{this.lastLogin()} </p>
               
              </div>
              <div className="icon">
                <i className="ion ion-id-card-outline"></i>
              </div>
              <Link to="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></Link>
            </div>
          </div>
          
        </div>
            </div>
        )
    }
}