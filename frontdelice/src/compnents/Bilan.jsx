import React, { useContext, useEffect } from 'react'
import Navprincipale from '../Layouts/Navprincipale'
import { GetModuleByCentre, selectAllModule } from '../features/Module/ModuleSlice'
import { useDispatch, useSelector } from 'react-redux'
import { GetNoteValid, selectScore } from '../features/Note/noteSlice'
import { AuthContext } from '../context/AuthContext'
function Bilan(props) {

    const allmodules = useSelector(selectAllModule)
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(GetModuleByCentre())
    }, [])
    
    const { user } = useContext(AuthContext)
    const score = useSelector(selectScore)
 
    useEffect(() => {

        let data = {
            module: localStorage.getItem("nommodule"),
            achetteur: user._id,
            ferme: localStorage.getItem("ferme")


        }
        console.log(data, "dataaa");
        dispatch(GetNoteValid(data))


    },[])

  return (
      <div >

<Navprincipale/>
<div id="content">
              <div class='main'>
                  <div class="midde_cont">
                      <div class="container-fluid">
              <div className='audit mt-5'>
       

                  <h1 style={{ color: "#17a2b8 !important ", textAlign: "center" , fontSize:"40px" , fontWeight:"bold" }}>Bilan Audit</h1>
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
                                                  <th>Module</th>
                                                  <th>Score</th>
                                               
                                              </tr>
                                          </thead>
                                          <tbody>


                                          {

                                    allmodules.map((e, i) => {
                              
                                        return (
                                          <tr class="table-secondary">
                                                  <td>{e.nom}</td>
                                                  <td>{score}</td>
                                                  </tr>

                                                )
                                                } )}

                                </tbody>
                                      </table>
                                    
                              </div>

                          </div>
                        
                          {/* table section */}
                          
                      </div>
                
                  <div className='col-md-2'>
             
               

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

export default Bilan


