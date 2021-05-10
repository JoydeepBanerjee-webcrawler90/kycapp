import  { Route, Redirect,Link } from 'react-router-dom';
import React, {Component} from 'react';


export default class Header extends Component {

  constructor() {
    super();
    this.state = {
      navigate_login_page:false,
      modeValue:'Sandbox'
    }
  }
  logout = (e) => {
    localStorage.clear();
    console.log('logging out')
    this.setState({navigate_login_page:true});
     
  }

  changeMode(e) {
    var target = e.target;
    console.log(target)
    console.log(target.value)
    switch(target.checked) {
      case true:
        localStorage.setItem('mode','PROD');
        this.setState({
          modeValue: "Production"
        }) 
        break;
      case false:
          localStorage.setItem('mode','DEV');
          this.setState({
            modeValue: "Sandbox"
          }) 
          break;
      default:
        localStorage.setItem('mode','PROD');
        this.setState({
          modeValue: "Sandbox"
        }) 
    }
  }

    render(){
      if(this.state.navigate_login_page) {
        return  <Route render={(props) => { 
          return <Redirect to={{ pathname:"/", state: {from: this.props.location} }}/>
        }}/>
      }
        return (
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" data-widget="pushmenu" to="#" role="button"><i className="fas fa-bars"></i></Link>
      </li>
      {/* <li className="nav-item d-none d-sm-inline-block">
        <a href="index3.html" className="nav-link">Home</a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="#" className="nav-link">Contact</a>
      </li> */}
    </ul>

    {/* Right navbar links */}
    <ul className="navbar-nav ml-auto">
      {/* Navbar Search */}
      <li className="nav-item">
        {/* <a className="nav-link" data-widget="navbar-search" href="#" role="button">
          <i className="fas fa-search"></i>
        </a> */}
        <div class="form-group">
          <label class="switch-primary">
            <input type="checkbox" class="switch switch-bootstrap status" name="status" onChange={(e) => this.changeMode(e)} value="0"/>
            <span class="switch-body"></span>
            <span class="switch-text">{this.state.modeValue}</span>
          </label>
        </div>
        {/* <div className="navbar-search-block">
          <form className="form-inline">
            <div className="input-group input-group-sm">
              <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
              <div className="input-group-append">
                <button className="btn btn-navbar" type="submit">
                  <i className="fas fa-search"></i>
                </button>
                <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </form>
        </div> */}
      </li>

      {/* Messages Dropdown Menu */}
      {/* <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <i className="far fa-comments"></i>
          <span className="badge badge-danger navbar-badge">3</span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <a href="#" className="dropdown-item">
            {/* Message Start 
            <div className="media">
              <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle"/>
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  Brad Diesel
                  <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                </h3>
                <p className="text-sm">Call me whenever you can...</p>
                <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
            {/* Message End 
          </a>
          <div className="dropdown-divider"></div>
          <a href="#" className="dropdown-item">
            {/* Message Start 
            <div className="media">
              <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  John Pierce
                  <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                </h3>
                <p className="text-sm">I got your message bro</p>
                <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
            {/* Message End 
          </a>
          <div className="dropdown-divider"></div>
          <a href="#" className="dropdown-item">
            {/* Message Start 
            <div className="media">
              <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  Nora Silvester
                  <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                </h3>
                <p className="text-sm">The subject goes here</p>
                <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
            {/* Message End 
          </a>
          <div className="dropdown-divider"></div>
          <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
        </div>
      </li> */}
      {/* Notifications Dropdown Menu */}

      <li className="nav-item dropdown">
        <Link className="nav-link" data-toggle="dropdown" to="#">
          <i className="far fa-bell"></i>
          <span className="badge badge-warning navbar-badge">0</span>
        </Link>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span className="dropdown-item dropdown-header">0 Notifications</span>
          <div className="dropdown-divider"></div>
          <div className="d-none">
          <Link to="#" className="dropdown-item">
            <i className="fas fa-envelope mr-2"></i> 4 new messages
            <span className="float-right text-muted text-sm">3 mins</span>
          </Link>
          
          <div className="dropdown-divider"></div>
          <Link to="#" className="dropdown-item">
            <i className="fas fa-users mr-2"></i> 8 friend requests
            <span className="float-right text-muted text-sm">12 hours</span>
          </Link>
          <div className="dropdown-divider"></div>
          <Link to="#" className="dropdown-item">
            <i className="fas fa-file mr-2"></i> 3 new reports
            <span className="float-right text-muted text-sm">2 days</span>
          </Link>
          <div className="dropdown-divider"></div>
          <Link to="#" className="dropdown-item dropdown-footer">See All Notifications</Link>
        </div>
        </div>
      </li>
      <li className="nav-item">
        <Link className="nav-link" data-widget="fullscreen" to="#" role="button">
          <i className="fas fa-expand-arrows-alt"></i>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" data-widget="control-sidebar" onClick={e=>this.logout(e)} data-slide="true" to="#" role="button">
          <i className="fas fa-sign-out-alt"></i>
        </Link>
      </li>
    </ul>
  </nav>
        )
    }
}