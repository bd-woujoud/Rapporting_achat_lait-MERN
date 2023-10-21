import React from 'react'
import Navprincipale from '../Layouts/Navprincipale'
import "../assets/forni.css"
import ferme from '../assets/image/ferme.png'
import col from '../assets/image/col.jpg'
import { Link } from 'react-router-dom'
function Listefrs() {
    return (
        <div >

            <Navprincipale />
            <div id="content">
                <div class='main'>
                    <div class="midde_cont">
                        <div class="container-fluid">
                            <div className='audit '>
                                <h2 className="h2" style={{ color: "#3498db !important ", textAlign: "center", fontSize: "30px", fontWeight: "bold" }}>Séléctionnez votre fournisseur!!</h2>
                                <div className='container'>
                                    <div className='row mt-5 mb-5'>
                                        <div className='col-md-6 mt-5'>
                                            <div className="containero">
                                             <Link to="ListedesFerme">
                                                <span className='imageglobal'> <img style={{ width:"500px" , height:"400px"}}  className="image" src={ferme} alt="" />
                                                </span> 
                                                 <div className="overlay">
                                                        <div className="text">Ferme</div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className='col-md-6 mt-5'>
                                            <div class="containero">
                                            <Link to="centres"> <span className='imageglobal'><img style={{ width:"500px" , height:"400px"}}  className="image"  src={col} alt=""  />
                                                </span>
                                                    <div className="overlay">
                                                        <div className="text">CCL</div>
                                                    </div>
                                                    </Link>
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

export default Listefrs