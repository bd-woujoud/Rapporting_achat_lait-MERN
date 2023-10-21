import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import AuthService from '../services/AuthService';
function Navbar() {

const { setUser, setIsAuth } = useContext(AuthContext);
const  {isAuth , user }=useContext(AuthContext); //bech igoli inti connecter ou non

  function handleLogout() {
   
    AuthService.logout().then(jsonData => {
      if (jsonData.success) {
        setUser(jsonData.user);
        setIsAuth(false)
        console.log("..logout")
       
        window.location.reload()
      }
      else {

      window.location.href = '/connexion'


        
      }
    })
  }
 
 
 return (
<div>
  <div id="content">
    {/* topbar */}
    <div className="topbar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="full">
          <div className="logo_section">
            <a href="index.html"><img className="img-responsive" src="images/logo/delice.png" alt="#" /></a>
          </div>
          <div className="right_topbar">
            <div className="icon_info">
             
              <ul className="user_profile_dd">
                <li>
                  <a className="dropdown-toggle" data-toggle="dropdown"> <span className="name_user">{user.email}</span></a>
                  {isAuth  && 
                  <div className="dropdown-menu">
               
                    <a   className="dropdown-item" onClick={handleLogout}><span>Déconnection</span> <i className="fa fa-sign-out" /></a>
                  </div>
}
                </li>
              </ul>

            </div>
          </div>
        </div>
      </nav>
    </div>
    {/* end topbar */}
    {/* dashboard inner */}
    
    {/* end dashboard inner */}
  </div>
</div>




    




    )
}
    export default Navbar