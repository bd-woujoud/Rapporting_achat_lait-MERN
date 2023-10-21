
import React from 'react'
import Navprincipale from '../Layouts/Navprincipale'
function AuditeGF() {
  return (
      <div >
<Navprincipale/>
<div id="content">
              <div class='main'>
                  <div class="midde_cont">
                      <div class="container-fluid">
          <div className='audit mt-5'>
       

                  <h1 style={{ color: "#17a2b8 !important ", textAlign: "center" , fontSize:"40px" , fontWeight:"bold" }}>Audit GF </h1>
                  <div className='row mt-5'>

                      <div className='col-md-2'>
                          <div class="right_button">

                              <button type="button" class="btn btn-xs" style={{backgroundColor:"#002060",width:"200px",color:'white'}}>
                                  Date de visite
                              </button><br></br>
                              <spam>•11/10/2022</spam>
                          </div>



                          <br></br>
                          <div class="right_button">

                              <button type="button" class="btn  btn-xs" style={{backgroundColor:'#143FA2',width:"200px",color:'white'}}>
                                  Intervenant STIAL
                              </button><br></br>
                              <spam>• johayna belhssan</spam>
                          </div>


                          <br></br>
                          <div class="right_button">

                              <button type="button" class="btn  btn-xs" style={{backgroundColor:"#4168CA",width:"200px",color:'white'}}>
                                  catégorie Frc
                              </button><br></br>
                              <spam>•CCL</spam>
                          </div>


                          <br></br>
                          <div class="right_button" >

                              <button type="button" class="btn  btn-xs" style={{backgroundColor:"#95A3CC",width:"200px",color:'white'}}>
                                  Code Frs
                              </button><br></br>
                              <spam>•685998gbghy</spam>
                          </div>


                      </div>
                      <div className='col-md-8'>

                          {/* table section */}

                          <div className="white_shd full margin_bottom_30">

                                  <div className="table-responsive-sm">
                                      <table className="table table-bordered" style={{fontSize:"18px" , fontWeight:"bold" , marginBottom:"0"}}>
                                          <thead>
                                              <tr class="table-secondary" style={{fontSize:"18px" , textAlign:"center"}}>
                                                  <th>Facteurs</th>
                                                  <th>Indicateurs</th>
                                                  <th>CIBLE</th>
                                                  <th>E1</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                          <tr class="table-secondary">
                                                  <td center   rowspan="9">Froid </td>
                                                
                                              </tr>
                                              <tr class="table-secondary">
                                                  <td>durée de refroidissement (h) </td>
                                                  <td> H </td>
                                                  <td>1</td>
                                              </tr>
                                              <tr class="table-secondary">
                                                  <td>Compresseur en marche (nbr)</td>
                                                  <td>2</td>
                                                  <td>1</td>
                                              </tr>
                                              <tr class="table-secondary">
                                                  <td>Condenseur en marche (nbr) </td>
                                                  <td>2</td>
                                                  <td>1</td>
                                              </tr>
                                              <tr class="table-secondary">
                                                  <td>Electricité </td>
                                                  <td>Stable</td>
                                                  <td>1</td>
                                              </tr>
                                              <tr class="table-secondary">
                                                  <td>Glace </td>
                                                  <td>Pas de Glace </td>
                                                  <td>0</td>
                                              </tr>
                                              <tr class="table-secondary">
                                                  <td>Tableau de jaugeage </td>
                                                  <td>Identifié</td>
                                                  <td>1</td>
                                              </tr>
                                              <tr class="table-secondary">

                                                  <td>Température </td>
                                                  <td>Affichée et conforme</td>
                                                  <td>1</td>
                                              </tr>
                                              <tr class="table-secondary">

                                                  <td>ΔH</td>
                                                  <td>Respectée </td>
                                                  <td>1</td>
                                              </tr>

                                              <tr class="table-secondary">
                                                  <td center   rowspan="4">Agitation </td>
                                                
                                              </tr>
                                              <tr class="table-secondary">
                                                  <td>Nbr de tours </td>
                                                  <td>[25-36]</td>
                                                  <td>1</td>
                                              </tr>
                                              <tr class="table-secondary">
                                                  <td>Couplage aux compresseurs </td>
                                                  <td>oui</td>
                                                  <td>1</td>
                                              </tr>
                                              <tr class="table-secondary">
                                                  <td>Marche en intermittence  </td>
                                                  <td>oui</td>
                                                  <td>1</td>
                                              </tr>
                                              <tr class="table-secondary">
                                                  <td center   rowspan="11">Hygiene </td>
                                                
                                              </tr>
                                              <tr class="table-secondary">
                                                  <td>Curage Etable </td>
                                                  <td>propreté visuelle</td>
                                                  <td>1</td>
                                              </tr>
                                              <tr class="table-secondary">
                                                  <td>Raclage couloir D'alimentation </td>
                                                  <td>propreté visuelle</td>
                                                  <td>1</td>
                                              </tr>
                                              <tr class="table-secondary">
                                                  <td>Salle de traite</td>
                                                  <td>propreté visuelle</td>
                                                  <td>1</td>
                                              </tr>                                      <tr class="table-secondary">
                                            
                                                  <td>Tank </td>
                                                  <td>propreté visuelle</td>
                                                  <td>1</td>
                                              </tr>   
                                              <tr class="table-secondary">
                                                  <td>Laiterie </td>
                                                  <td>propreté visuelle</td>
                                                  <td>1</td>
                                              </tr>
                                              
                                              <tr class="table-secondary">
                                                  <td>Pompe</td>
                                                  <td>propreté visuelle</td>
                                                  <td>1</td>
                                              </tr>
                                              <tr class="table-secondary">
                                                  <td>Acide et alcalin </td>
                                                  <td>propreté visuelle</td>
                                                  <td>1</td>
                                              </tr>
                                              <tr class="table-secondary">
                                                  <td>DLC produits de nettoyage</td>
                                                  <td>propreté visuelle</td>
                                                  <td>1</td>
                                              </tr>
                                              <tr class="table-secondary">
                                                  <td>Eau Chaude </td>
                                                  <td>150L</td>
                                                  <td>1</td>
                                              </tr>
                                              <tr class="table-secondary">
                                                  <td>Source d'eau de nettoyage ( controlée) </td>
                                                  <td>Controlée</td>
                                                  <td>1</td>
                                              </tr>
                                              <tr class="table-secondary">
                                                  <td center   rowspan="4">Filtration </td>
                                                
                                              </tr>
                                              <tr class="table-secondary">
                                                  <td>Salle de traite </td>
                                                  <td>Presence</td>
                                                  <td>1</td>
                                              </tr>
                                              <tr class="table-secondary">
                                                  <td>Tank</td>
                                                  <td>Presence</td>
                                                  <td>1</td>
                                              </tr>
                                              <tr class="table-secondary">
                                                  <td>Camion </td>
                                                  <td>Presence</td>
                                                  <td>1</td>
                                              </tr>
                                              <tr class="table-secondary">
                                                  <td center   rowspan="4">Elements etrangers </td>
                                                
                                              </tr>
                                              <tr class="table-secondary">
                                                  <td>Pousse à l'eau </td>
                                                  <td>Absence</td>
                                                  <td>1</td>
                                              </tr>
                                              <tr class="table-secondary">
                                                  <td>ATB -Tracabilité </td>
                                                  <td>Presence</td>
                                                  <td>1</td>
                                              </tr>
                                              <tr class="table-secondary">
                                                  <td>Test Phenol </td>
                                                  <td>Negatif</td>
                                                  <td>0</td>
                                              </tr>


                                                  </tbody>
                                      </table>
                                    
                              </div>

                          </div>
                          <div style={{marginLeft:"830px"}}><button type="button" class="btn cur-p btn-success mr-4">Enregistrer</button>

<button type="button" class="btn cur-p btn-secondary">Annuler</button></div>
                          {/* table section */}
                          
                      </div>
                
                  <div className='col-md-2'>
             
                  <i class="fa fa-download fa-3x" aria-hidden="true"  ></i>

                  <div class="row column1 social_media_section">
                   
                         <div class="full socile_icons fb margin_bottom_30 mt-5">
                            <div class="social_icon">
                               <i> Score Audit</i>
                            </div>
                            <div class="social_cont">
                               <ul>
                                  <li>
                                     <span><strong>35 %</strong></span>
                               
                                  </li>
                               
                               </ul>
                            </div>
                         </div>
                    
                    
                  
                   </div>
                  
                   </div>

                  </div>
              </div>
          </div>
      </div>
              </div>
          </div>




      </div>



      )
    }
    
    export default AuditeGF