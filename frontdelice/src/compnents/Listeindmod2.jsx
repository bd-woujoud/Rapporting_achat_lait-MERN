
import React, { useEffect, useState } from 'react'
import Navprincipale from '../Layouts/Navprincipale'
import axios from 'axios'
import {GrLinkPrevious} from"react-icons/gr"
import { useHistory } from 'react-router-dom';
function Listeindmod2() {   

  let history = useHistory();
  const [unmodule, setUnmodule] = useState(null)

  
  useEffect(() => {

    axios.get('http://localhost:3000/Module/getbyid/' + localStorage.getItem('module'))//id de module cliké
      .then(res => {
        setUnmodule(res.data.data)

      })
    console.log(unmodule, "moduuuuuuuuule");
  }, [])


  return (
    <div >

      <Navprincipale />
   

    <GrLinkPrevious  style={{ marginLeft: "300px", marginTop: "60px",fontWeight:"bold" }}/>  <button className="btn btn-info" onClick={history.goBack} >retour </button>
      <div className="col-md-6" style={{ marginLeft: "600px", marginTop: "60px" }}>

        <div className="full graph_head">
          <div className="heading1 margin_0">
            <h1>Liste des indicateurs module <span>{unmodule && unmodule.nom}</span></h1>
          </div>
        </div>
        <div className="table_section padding_infor_info">
          <div className="table-responsive-sm">
            <table className="table table-hover">
              <thead >
                <tr>
                  <th>Nom Indicateur</th>
                  <th>Description</th>
                  {/* <th>Action</th> */}
                </tr>
              </thead>
              <tbody>
                {
                  unmodule && unmodule.indicateurs.map((item, i) => {
                    return (

                      <tr>
                        <td>{item.nom}</td>
                        <td>{item.description}</td>
                     
                      </tr>

                    )


                  })

                }

              </tbody>
            </table>
          </div>
        </div>
        {/* <div class="button_block" style={{ marginLeft: "40px" }}><button type="button" class="btn cur-p btn-secondary">Ajouter indicateur</button></div> */}
      </div>
    </div>


  )
}
export default Listeindmod2

