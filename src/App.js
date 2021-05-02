import React, { Component } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Login from './components/Login';
import Content from './components/Content';

class App extends Component {

  
  compose() {
    var authToken = localStorage.getItem('authToken');
    if(accessToken.length==0) {
      return (
        this.renderLoginPage()
      );
    } 
      return (
        this.renderDashboard()
      );
    
  }


  renderLoginPage() {
    return (
      <div className="hold-transition login-page">
        <Login/>
      </div>
    )
  }
  renderDashboard() {
    return ( <div>
      <Header />
      <SideBar />
      <Content />
    </div>);
  }

  render() {
    return (
     this.compose()
    );
  }
}

export default App;
