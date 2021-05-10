// Header.js
import React, {Component} from 'react';
import Auth from '../services/auth.service';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


export default class Login extends Component {

    constructor(props) {
        
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.rememberMe = this.rememberMe.bind(this);
        this.Login = this.Login.bind(this);
        this.state = {
            username:'',
            password:'',
            submitted: false,
            loggedIn:false
           };
      
    }

  
    onChangeEmail(e) {
      this.setState({
        username: e.target.value
      });
    }
  
    onChangePassword(e) {
      this.setState({
        password: e.target.value
      });
    }

    Login(e) {
        var data = {
          username: this.state.username,
          password: this.state.password
        };

        if(this.state.username.length===0 || this.state.password.length===0) {
          toast('All fields are mandatory');
          return
        }

        var btn = e.target
        btn.disabled = true
        btn.innerHTML = "<i class='fas fa-spinner fa-spin'></i> Please wait";
        Auth.authenticate(data)
          .then(response => {
            console.log(response.data);
            this.setState({
                submitted: true
            });
          
            if(response.data.status===200) {
            
              let accessToken = response.data.accessToken;
              localStorage.setItem('access_token',accessToken);
              localStorage.setItem('userinfo',JSON.stringify(response.data));
              localStorage.setItem('user_id',response.data.id);
              // toast.info('Please wait...',{
              //   autoClose:3000
              // })
             
              setTimeout(()=> {
                btn.disabled = false
                btn.innerHTML = `Login`
                this.props.history.push('/dashboard')
              },3000);

            } else {
              btn.disable = false;
              btn.innerHTML = `Login`;
              toast.error(response.data.message,{
                autoClose:3000
              })
            }

          }).catch(e => {
              btn.disable = false
              btn.innerHTML = `Login`
              toast.error('Something went wrong, please try again later');
              console.log(e);
          })
         
      }

      rememberMe(e) {
        var event = e.target
        console.log(event)
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
                <p className="login-box-msg">Sign in to start your session</p>
                  <div className="input-group mb-3">

                    <input type="text" className="form-control" placeholder="Username"
                          
                          id="username"
                          required
                          value={this.state.email}
                          onChange={this.onChangeEmail}
                          name="username"/>
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
                    <div className="col-6">
                      <div className="icheck-primary">
                        <input type="checkbox" id="remember" onClick=''/>
                        <label>
                          Remember Me
                        </label>
                      </div>
                    </div>
                    {/* /.col */}
                    <div className="col-6">
                      <button type="button" onClick={(e) => this.Login(e)} className="btn btn-primary btn-block">Sign In</button>
                    </div>
                    {/* /.col */}
                  </div>
          
                {/* <div className="social-auth-links text-center mb-3">
                  <p>- OR -</p>
                  <a href="#" className="btn btn-block btn-primary">
                    <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
                  </a>
                  <a href="#" className="btn btn-block btn-danger">
                    <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
                  </a>
                </div> */}
                {/* /.social-auth-links */}
          
                <p className="mb-1 d-none">
                  <Link to="/forgot-password">I forgot my password</Link>
                </p>
                <p className="mb-0">
                  <Link to="/create-account" className="text-center">Register a new membership</Link>
                </p>
              </div>
              {/* /.login-card-body */}
            </div>
          </div>
          </div>
        );
    }
}

