import React from 'react'
import {AiOutlineDoubleRight} from 'react-icons/ai'
import $ from 'jquery'; 
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import logos from "../assets/image/user_img.png"
import { Link } from 'react-router-dom';
function Sidebar() {
const {user}=useContext(AuthContext)
  $(document).ready(function() {
    $('.nav-link-collapse').on('click', function() {
      $('.nav-link-collapse').not(this).removeClass('nav-link-show');
      $(this).toggleClass('nav-link-show');
    });
  });
   const{role}=useContext(AuthContext)
  return (
<div className="side">
<nav id="sidebar">
  <div className="sidebar_blog_1">
    <div className="sidebar-header">
      <div className="logo_section">
       <Link to="index.html"><img className="logo_icon img-responsive" /></Link>
      </div>
    </div>
    <div className="sidebar_user_info">
      <div className="icon_setting" />
      <div className="user_profle_side">
        <div className="user_img"><img className="img-responsive" src={logos} alt="#" /></div>
        <div className="user_info">
          <h6>{user.nom}</h6>
          <p><span className="online_animation" /> Online</p>
        </div>
      </div>
    </div>
  </div>
  <div className="sidebar_blog_2">
  
    <ul className="list-unstyled components">
      {role==="admin" &&
    <li className="nav-item">
       <Link className="nav-link nav-link-collapse" to="#" id="hasSubItems" data-toggle="collapse" data-target="#collapseSubItems4" aria-controls="collapseSubItems4" aria-expanded="false">Paramétre</Link>
        <ul className="nav-second-level collapse" id="collapseSubItems4" data-parent="#navAccordion">
          <li className="nav-item">
           <Link className="nav-link" to="ListeA">
              <span className="nav-link-text">Liste des achetteurs</span>
           </Link>
          </li>
          <li className="nav-item">
           <Link className="nav-link" to="/centres">
              <span className="nav-link-text">Liste des Centres collecte Lait</span>
           </Link>
          </li>
          <li className="nav-item">
           <Link className="nav-link" to="/ListedesFerme">
              <span className="nav-link-text">Liste des Fermes</span>
           </Link>
          </li>



          <li className="nav-item">
         <Link className="nav-link nav-link-collapse" to="#" id="hasSubItems" data-toggle="collapse" data-target="#collapseSubItems2" aria-controls="collapseSubItems2" aria-expanded="false"> Liste modules
         
         <span style={{marginLeft:"70px"}}> <AiOutlineDoubleRight/></span></Link>
          <ul style={{backgroundColor:"blue"}} className="nav-second-level collapse" id="collapseSubItems2" data-parent="#navAccordion">
          <li className="nav-item">
           <Link to="listedesModulesferme" className="nav-link">
              <span   style={{marginLeft:"40px"}}  className="nav-link-text">module Ferme</span>
            </Link>
          </li>
          <li className="nav-item">
          <Link to="/listedesModulescentre" className="nav-link">
              <span  style={{marginLeft:"40px"}}  className="nav-link-text">module CCL</span>
              </Link>
          </li>
        </ul>
          </li>





          <li className="nav-item">
           <Link className="nav-link" to="/Listeindmod1">
              <span className="nav-link-text">Liste des Indicateurs</span>
           </Link>
          </li>
        </ul>
      </li>
      }
      
      
      
      
      
      <li className="nav-item">
           <Link className="nav-link" to="listefrs">
              <span className="nav-link-text">Catégorie Fournisseur</span>
           </Link>
          </li>
      <li className="nav-item">
       <Link className="nav-link nav-link-collapse" to="listefrs" id="hasSubItems" data-toggle="collapse" data-target="#collapseSubItems2" aria-controls="collapseSubItems2" aria-expanded="false">Bilan</Link>
        <ul className="nav-second-level collapse" id="collapseSubItems2" data-parent="#navAccordion">
          <li className="nav-item">
           <Link className="nav-link" to="/listedesCCL">
              <span className="nav-link-text">Bilan Personnel</span>
           </Link>
          </li>
          <li className="nav-item">
           <Link className="nav-link" to="listedesFerme">
              <span className="nav-link-text">Tous les Bilans</span>
           </Link>
          </li>
        </ul>
      </li>
  
    
    </ul>
   


  </div>
</nav>



    
</div>



    )
}
    export default Sidebar
