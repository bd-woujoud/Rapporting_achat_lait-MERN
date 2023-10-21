import React, { useContext, useEffect }  from 'react'
import Navprincipale from '../Layouts/Navprincipale'
import { useDispatch, useSelector } from 'react-redux'

import { AuthContext } from '../context/AuthContext'
import { GetNoteFermeAchetteur, selectAllnote } from '../features/Note/noteSlice'
import { Link } from 'react-router-dom'

function ListeFermeA() {

  const allFerme = useSelector(selectAllnote) 
  console.log(allFerme, "dataaa"); 
  const dispatch = useDispatch() 
  const {user}=useContext(AuthContext)



  useEffect(() => {

    let data = {
     
        achetteur: user._id,
        // ferme: "64510fe23a25b5c994f7d6bc"
    }

    console.log(data, "dataaa");
    dispatch(GetNoteFermeAchetteur(data))


},[])









  return (

    <div>

    <Navprincipale />

    <div id="content">
        <div class='main'>
            <div class="midde_cont">
                <div class="container-fluid">
                    <h1 className='h11' style={{ marginRight: "200px", marginLeft: "0px", textAlign: "center", fontSize: "40px", fontWeight: "bold", color: "#16a085!important" }}>Liste des centres</h1>
                    <div className='row mt-5'>
                        <div className='col-md-9'>

                                <table style={{ height: "100px", width: "1200px", marginTop: "120px", borderColor: "white" }} >
                                    <thead>
                                        <tr class="table-primary">
                                            <th style={{ border: "solid", borderColor: "white" }}>Code</th>
                                            {/* <th style={{ border: "solid", borderColor: "white" }} >Fournisseur</th>
                                            <th style={{ border: "solid", borderColor: "white" }}>Code_parent</th>
                                           
                                            <th style={{ border: "solid", borderColor: "white" }}>Region</th>
                                            <th style={{ border: "solid", borderColor: "white" }}>Gouvernorat</th> */}
                                            <th style={{ border: "solid", borderColor: "white" }}>Bilan</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            allFerme.map((e, i) => {

                                                return (

                                                    <tr class="table-primary">
                                                        <td style={{ border: "solid", borderColor: "white"}}>{e._id}</td>
                                                        {/* <td style={{ border: "solid", borderColor: "white" }}>{e.fournisseur}</td>
                                                        <td style={{ border: "solid", borderColor: "white" }}>{e.code_parent}</td>
                                                        <td style={{ border: "solid", borderColor: "white" }}>{e.frs_parent}</td>
                                                        <td style={{ border: "solid", borderColor: "white" }}>{e.region}</td>
                                                        <td style={{ border: "solid", borderColor: "white" }}>{e.gouvernerat}</td>
                                                        <td style={{ border: "solid", borderColor: "white" }}>{e.zone}</td> */}
                                                        <td style={{ border: "solid", borderColor: "white",textDecoration:"underline ",textDecorationThickness:"3px",cursor:"pointer" }} onClick={()=>localStorage.setItem('ferme',e._id)}> <Link to="/bilan">bilan</Link></td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
   

  )
}

export default ListeFermeA


