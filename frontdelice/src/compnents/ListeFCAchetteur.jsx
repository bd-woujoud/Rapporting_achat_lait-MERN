import React from 'react'
function ListeFCAchetteur() {

  return (
    <div>

    <Navprincipale />

    <div id="content">
        <div class='main'>
            <div class="midde_cont">
                <div class="container-fluid">
                    <h1 className='h11' style={{ marginRight: "200px", marginLeft: "0px", textAlign: "center", fontSize: "40px", fontWeight: "bold", color: "#16a085!important" }}>Liste des fermes</h1>
                    <div className='row mt-5'>
                        <div className='col-md-9'>
                            < SearshFerme />
                            {allachetteur &&
                                <table style={{ height: "100px", width: "1200px", marginTop: "30px", borderColor: "white" }} >
                                    <thead>
                                        <tr class="table-success">
                                            <th style={{ border: "solid", borderColor: "white" }}>Code</th>
                                            <th style={{ border: "solid", borderColor: "white" }} >Fournisseur</th>
                                            <th style={{ border: "solid", borderColor: "white" }}>Region</th>
                                            <th style={{ border: "solid", borderColor: "white" }}>Zone</th>
                                            <th style={{ border: "solid", borderColor: "white" }}>Gouvernorat</th>
                                            <th style={{ border: "solid", borderColor: "white" }}>Achetteur</th>
                                            <th style={{ border: "solid", borderColor: "white" }}>Sous Categorie</th>
                                        </tr>
                                    </thead>
                                    <tbody>



                                        {
                                            allferme.map((e, i) => {
                                                console.log(e, "tttttttttttt");

                                                return (

                                                    <tr class="table-success"  >

                                                       <td style={{ border: "solid", borderColor: "white",textDecoration:"underline ",textDecorationThickness:"3px",cursor:"pointer" }} onClick={()=>localStorage.setItem('ferme',e._id)} > <Link to="/menuFerme">{e.code}   </Link> </td>
                                                    <td style={{ border: "solid", borderColor: "white" }}>{e.fournisseur}</td>
                                                        <td style={{ border: "solid", borderColor: "white" }}>{e.code_parent}</td>
                                                        <td style={{ border: "solid", borderColor: "white" }}>{e.frs_parent}</td>
                                                        <td style={{ border: "solid", borderColor: "white" }}>{e.region}</td>
                                                        <td style={{ border: "solid", borderColor: "white" }}>{e.zone}</td>
                                                        <td style={{ border: "solid", borderColor: "white" }}>{e.gouvernerat}</td>
                                                        <td style={{ border: "solid", borderColor: "white" }}>{e.achetteur.nom} {e.achetteur.prenom}</td>
                                                        <td style={{ border: "solid", borderColor: "white" }}>{e.sous_categorie}</td>
                                                        <td style={{ border: "solid", borderColor: "white" }}>{e.classe}</td>
                                                        <td style={{ border: "solid", borderColor: "white" }}>{e.nature}</td>
                                                        <td style={{ border: "solid", borderColor: "white" }}>  <div class="button_block" >
                                                            <button onClick={() => showModal(e._id)} type="button" class="btn cur-p btn-success mr-4" >Modifier</button>
                                                            <button onClick={() => dispatch(DeleteFerme(e._id))} type="button" class="btn cur-p btn-danger">Supprimer</button>
                                                        </div> </td>
                                                    </tr>

                                                )

                                            })}



                                    </tbody>
                                </table>
                            }


                     
                        </div>

                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ListeFCAchetteur