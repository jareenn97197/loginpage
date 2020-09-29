import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import logo from '../img/download.jpg'
import logo1 from '../img/facebook.png'
import logo2 from '../img/gmail.png'

function Forms(){
    return(
            <div id="parent">
            <form id="form_login" action="https://reqres.in">

           
                    <div>
                            <img className="image img-responsive img-circle" src={logo}  ></img>
                    </div>
                    <div className="headings"> 
                                <h3>sign up</h3>
                                <h1>Create your account</h1>
                                <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit</p>

                    </div>
                    <div className="container">
                        <div className="row signup">
                            <div className="col-md-6 col-sm-12">
                                <img className="img-responsive" src={logo1}  ></img>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img className="img-responsive " src={logo2}  ></img>
                            </div>
                        </div>
                        
                    </div>

                  
        
                  <div className="form-group">
                       <input type="text" placeholder="First Name" className="form-control input-lg" id="email"></input>
                   </div>

                   <div className="form-group">
                       <input type="text" placeholder="Last name" className="form-control input-lg" id="email"></input>
                   </div>

                    <div className="form-group"> 
                        <input type="email" placeholder="Enter Email" className="form-control input-lg" id="email"></input>
                    </div>
                    
                    <div className="form-group">
                       
                        <input type="password" placeholder="Enter Password" className="form-control input-lg" id="pwd"></input>
                    </div>
                    <p>By clicking the sign up you agree to our <a>Terms and conditions</a> and out <a>Privacy policy</a></p>
                    <button type="button" className="btn btn-primary">Sign up</button>
            </form>
            </div>
       
    );
}
export default Forms;
