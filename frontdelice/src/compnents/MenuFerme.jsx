import React from 'react'
import Navprincipale from '../Layouts/Navprincipale'
import { Link } from 'react-router-dom';
function MenuFerme() {

  return (

    <div>


<Navprincipale />
            <div id="content">
                <div class='main'>
                    <div class="midde_cont">
                        <div class="container-fluid">
                            <div className='audit '>

                                <div className='row mt-5'>

                                    <div className='col-12'>
                                    <div className='col' style={{marginLeft:'500px' }}>
                                    <div class="right">

                                            <button type="button" class="btn btn-xs" style={{ backgroundColor: "#002060", width: "150px", color: 'white' }}>
                                                Date de visite
                                            </button><br></br>
                                            <spam>•11/10/2022</spam>
                                        </div>



                                        <br></br>
                                        <div class="right">

                                            <button type="button" class="btn  btn-xs" style={{ backgroundColor: '#143FA2', width: "150px", color: 'white' }}>
                                                Intervenant STIAL
                                            </button><br></br>
                                            <spam>• johayna belhssan</spam>
                                        </div>


                                        <br></br>
                                        <div class="right">

                                            <button type="button" class="btn  btn-xs" style={{ backgroundColor: "#4168CA", width: "150px", color: 'white' }}>
                                                catégorie Frc
                                            </button><br></br>
                                            <spam>•CCL</spam>
                                        </div>


                                        <br></br>
                                        <div class="right" >

                                            <button type="button" class="btn  btn-xs" style={{ backgroundColor: "#95A3CC", width: "150px", color: 'white' }}>
                                                Code Frs
                                            </button><br></br>
                                            <spam>•685998gbghy</spam>
                                        </div>
                                        </div>

                                        <div class="right mt-5" style={{marginLeft:'120px' }}>

                                            <button type="button" class="btn  btn-danger" style={{ width: "960px",height:"70px", color: 'white' ,fontSize:"20px" }}>
                                           Menu Ferme
                                            </button>
                                            
                                        </div>
                                        <br></br>

                                        <div class="container">
                                        <div class="row mt-5 ">
                                        <div class="col-4">
                                        <Link to="/modulesferme">
                                            <button type="button" class="btn btn-xs"  style={{ backgroundColor: "#4168CA", width: "200px", color: 'white',height:"50px",fontSize:"20px"  }}>
                                        Audit
                                        </button></Link>
                                            
                                        </div>
                                        <div class="col-4">

                                            <button type="button" class="btn  btn-xs" style={{ backgroundColor: "#4168CA", width: "200px", color: 'white',height:"50px" ,fontSize:"20px" }}>
                                        suivi incident
                                            </button>
                                            
                                        </div>
                                        <div class="col-4">

                                            <button type="button" class="btn  btn-xs" style={{ backgroundColor: "#4168CA", width: "200px", color: 'white',height:"50px",fontSize:"20px" }}>
                                            Suivi
alimentation
                                            </button>
                                            
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

export default MenuFerme