import React from 'react';
import '../styles/login.css';

function Login(){
   return (
       <div className="conten">
          <span className="conten-top-barra"/>
          <div className="conten-login">
                <img className="img-logo" src="https://www.viajarmilan.com/img/visitar-la-catedral-de-milan.jpg"/>
                <input className="input-data-us" tipe="text" placeholder="Username" />
                <input className="input-data-pa" tipe="text" placeholder="Password" />
                <div className="position-recovery">
                    <a href="#" className="recovery">Password recovery?</a>
                </div>
                <button type="button" className="start-login">login</button>
          </div>
       </div>

   );
}

export default Login