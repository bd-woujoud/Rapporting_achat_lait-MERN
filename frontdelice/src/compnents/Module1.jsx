import React from 'react'
import Navprincipale from '../Layouts/Navprincipale'
function Module1() {


  return (

<div >

<Navprincipale />
<div id="content">
    <div class='main'>
        <div class="midde_cont">
            <div class="container-fluid">
                <div className='audit '>


                    <h1 style={{ color: "#17a2b8 !important ", textAlign: "center", fontSize: "30px", fontWeight: "bold" }}>CCL Audit module Analyse</h1>
                    
                    <div className='row mt-5'>

                        <div className='col-md-2'>
                            <div class="right_button">

                                <button type="button" class="btn btn-xs" style={{ backgroundColor: "#002060", width: "150px", color: 'white' }}>
                                    Date de visite
                                </button><br></br>
                                <spam>•11/10/2022</spam>
                            </div>



                            <br></br>
                            <div class="right_button">

                                <button type="button" class="btn  btn-xs" style={{ backgroundColor: '#143FA2', width: "150px", color: 'white' }}>
                                    Intervenant STIAL
                                </button><br></br>
                                <spam>• johayna belhssan</spam>
                            </div>


                            <br></br>
                            <div class="right_button">

                                <button type="button" class="btn  btn-xs" style={{ backgroundColor: "#4168CA", width: "150px", color: 'white' }}>
                                    catégorie Frc
                                </button><br></br>
                                <spam>•CCL</spam>
                            </div>


                            <br></br>
                            <div class="right_button" >

                                <button type="button" class="btn  btn-xs" style={{ backgroundColor: "#95A3CC", width: "150px", color: 'white' }}>
                                    Code Frs
                                </button><br></br>
                                <spam>•685998gbghy</spam>
                            </div>

                
                        </div>
                        <div className='col-md-10'>

                            {/* table section */}

                            <div className="white_shd full margin_bottom_30">

                                <div className="table-responsive-sm">
                                    <table className="table table-bordered" style={{ fontWeight: "bold", marginBottom: "0" }}>
                                        <thead>
                                            <tr class="table-secondary" style={{ fontSize: "18px", textAlign: "center" }}>
                                            <th>Audit module Analyse</th>
                                                  <th>Note</th>
                                                  <th>observation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                                  <td>Acidité</td>
                                                  <td>1</td>
                                                  <td>...</td>
                                              </tr>
                                              <tr >

                                                  <td>Alcool</td>
                                                  <td>1</td>
                                                  <td>....</td>
                                              </tr>
                                              <tr >

                                                  <td>Test rapide ATB</td>
                                                  <td>1</td>
                                                  <td>...</td>
                                              </tr>
                                              <tr >

                                                  <td>Densité</td>
                                                  <td>0</td>
                                                  <td>...</td>
                                              </tr>
                                              <tr>

                                                  <td>Lactoscan </td>
                                                  <td>0</td>
                                                  <td>...</td>
                                              </tr>
                                              <tr >

                                                  <td>Fermentation </td>
                                                  <td>0</td>
                                                  <td>...</td>
                                              </tr>
                                              <tr>

                                                  <td>Cryoscopie</td>
                                                  <td>0</td>
                                                  <td>...</td>
                                              </tr>
                                              <tr>

                                                  <td>PH</td>
                                                  <td>1</td>
                                                  <td>...</td>
                                              </tr>
                                              <tr>

                                                  <td>Delvo</td>
                                                  <td>0</td>
                                                  <td>...</td>
                                              </tr>
                                          </tbody>
                                    </table>

                                </div>

                            </div>
                            <div style={{ marginLeft: "400px" }}><button type="button" class="btn cur-p btn-success mr-4">Enregistrer</button>

                                <button type="button" class="btn cur-p btn-secondary">Annuler</button></div>
                            {/* table section */}

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

export default Module1


