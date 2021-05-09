// Header.js
import React, {Component} from 'react';
import Auth from '../services/auth.service';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


export default class SignUp extends Component {

    constructor(props) {
        
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeName = this.onChangeName.bind(this);

        this.SignUp = this.SignUp.bind(this);
        this.state = {
            username:'',
            emaail:'',
            password:'',
            submitted: false,
            loggedIn:false
           };
      
    }

  
    onChangeName(e) {
      this.setState({
        username: e.target.value
      });
    }
  
    onChangePassword(e) {
      this.setState({
        password: e.target.value
      });
    }

    onChangeEmail(e) {
        this.setState({
          email: e.target.value
        });
      }

    SignUp() {
        var data = {
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
          roles:["customer"]
        };
    
        Auth.signUp(data)
          .then(response => {
            console.log(response.data);
            this.setState({
                submitted: true
            });
          
            if(response.status===200) {
            

              toast.info(response.data.message+', redirecting to login page now',{
                autoClose:3000
              })
              setTimeout(()=> {
                this.props.history.push('/')
              },3000);

            } else {

              toast.info(response.message,{
                autoClose:3000
              })
            }

          }).catch(e => {
              toast.error('Something went wrong, please try again later');
              console.log(e);
          })
         
      }



    render(){
        
        return (
           <div className="login-page">
           <div className="login-box">
            <div className="login-logo">
              <a href="/"><b>MutualFundApp</b>LTE</a>
            </div>
            {/* /.login-logo */}
            <div className="card">
              <div className="card-body login-card-body">
                <p className="login-box-msg">Create your account</p>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Username"
                         
                          id="username"
                          required
                          value={this.state.username}
                          onChange={this.onChangeName}
                          name="username"/>
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-user"></span>
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input type="email" placeholder="Email"
                          className="form-control"
                          id="email"
                          required
                          value={this.state.email}
                          onChange={this.onChangeEmail}
                          name="email"/>
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope"></span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="input-group mb-3">
                    <input type="password" className="form-control" placeholder="Password" id="password"
                          required
                          value={this.state.password}
                          onChange={this.onChangePassword}
                          name="password"/>
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <div className="icheck-primary d-none">
                        <input type="checkbox" id="remember"/>
                        <label>
                          Remember Me
                        </label>
                      </div>
                    </div>
                    {/* /.col */}
                    <div className="col-4">
                      <button type="button" onClick={this.SignUp} className="btn btn-primary btn-block">Sign Up</button>
                    </div>
                    {/* /.col */}
                  </div>
        
          
                <p className="mb-1 d-none">
                <Link to="/">I forgot my password</Link>
                </p>
                <p className="mt-2">
                  <Link to="/" className="text-center ">Have a account? Click here to login</Link>
                </p>
              </div>
              {/* /.login-card-body */}
            </div>
          </div>
          </div>
        );
    }
}
