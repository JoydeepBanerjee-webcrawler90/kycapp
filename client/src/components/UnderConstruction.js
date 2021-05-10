import React, {Component} from 'react';

const centerAndMiddleDiv = {
     display:'flex',
     alignItems:'center',
     flexDirection:'column',
     justifyContent:'center',
     width: '100%',
     height: '88vh',
     color:'white',
     background: 'rgba(254, 241, 96, 1)',
     textAlign: 'center'
}

class UnderConstruction extends Component {

    
    
    render(){
        return (
          
            <div className="content-wrapper p-2 justify-content-center shadow bg-yellow">
                <div style={centerAndMiddleDiv}>
                  <h2 className="bg-yellow p-2 rounded text-bold shadow-sm"><i className="fas fa-wrench fa-1x rounded bg-red p-2"></i> Page under construction</h2>
                  <small className="text-white p-2 rounded bg-yellow d-none"><i className="fas fa-clock"></i> Try after 48 - 72 hours later</small>
                </div>
            </div>
       )
    }
}

export default UnderConstruction;