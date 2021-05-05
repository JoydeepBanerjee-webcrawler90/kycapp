import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class Content extends Component {

    render(){
        return (
            <div className="content-wrapper p-2">
                  <p>Welcome User</p>
          <div className="row">
          <div className="col-lg-3 col-6">
            <div className="small-box bg-info">
              <div className="inner">
                <h3>0</h3>
                <p>Kyc Verifications</p>
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
              
                <h3> <sup>%</sup>0</h3>

                <p>Bank Verifications</p>
              </div>
              <div className="icon">
                <i className="ion ion-storefront-outline"></i>
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          
          <div className="col-lg-3 col-6">
            
            <div className="small-box bg-warning">
              <div className="inner">
                <h3>0</h3>

                <p>Other Verifications</p>
              </div>
              <div className="icon">
              <i className="ion ion-id-card-outline"></i>
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          
          <div className="col-lg-3 col-6">
             
            <div className="small-box bg-danger">
              <div className="inner">
                <h3>Date</h3>

                <p>Last Login</p>
              </div>
              <div className="icon">
                <i className="ion ion-id-card-outline"></i>
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          
        </div>
            </div>
        )
    }
}