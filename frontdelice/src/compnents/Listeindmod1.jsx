import React, { useEffect, useState } from 'react'
import Navprincipale from '../Layouts/Navprincipale'
import { Createindicateur, Deleteindicateur, GetIndicateur, UpdateIndicateur, selectAllIndicateur, selectdeleteIndicateur, selectupdateIndicateur } from '../features/Indicateur/IndiateurSlice'
import { useDispatch, useSelector } from 'react-redux'
import {
  Form,
  Input,
  Button,
  Modal
} from 'antd';
import Ajouterindicateur from './Ajouterindicateur';
function Listeindmod1() {

  const [nom, setNom] = useState('')
  const [description, setDescription] = useState('')

  const allindicateurs = useSelector(selectAllIndicateur)
  const deleteindicateur = useSelector(selectdeleteIndicateur)
  const updateindicateur = useSelector(selectupdateIndicateur)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetIndicateur())
  }, [deleteindicateur, updateindicateur])
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [indicateurUpdate, setindicateurUpdate] = useState(null) //donnéesv mte3 colone eli bech na3mlelha update

  const showModal = (id) => {
    setIsModalVisible(true);
    setindicateurUpdate(allindicateurs.find(v => v._id === id)) //bech tjibli les inputs m3abin selon id
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const handlechange = e => { //hiya eli bech te5edh lvaleuret ejdod eli bech nbadelhom   onChange={(e) => setCode(e.target.value)}
    const { value, name } = e.target
    setindicateurUpdate(prev => ({
      ...prev,
      [name]: value
    }))
  }


  const handleUpdate = () => {

    let data = {

      nom: indicateurUpdate.nom,
      description: indicateurUpdate.description,
      id: indicateurUpdate._id
    }

    dispatch(UpdateIndicateur(data))
    window.alert("indicateur est à jour")
    handleOk()
  };

  return (
    <div >

      <Navprincipale />
    
      <div className="col-md-8" style={{ marginLeft: "300px", marginTop: "60px" }}>
    
        <div className="full graph_head">
          <div className="heading1 margin_0">
            <h1>Liste des indicateurs</h1>
          </div>
        </div>  <Ajouterindicateur />
        <div className="table_section padding_infor_info">
          <div className="table-responsive-sm">
            <table className="table table-hover" >
              <thead>
                <tr>
                  <th>Nom Indicateur</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  allindicateurs.map((e, i) => {

                    return (
                      <tr>
                        <td>{e.nom}</td>
                        <td>{e.description}</td>
                        <td >  <div class="button_block" ><button onClick={() => showModal(e._id)} type="button" class="btn cur-p btn-success mr-4" >Modifier</button>
                          <button onClick={() => dispatch(Deleteindicateur(e._id))} type="button" class="btn cur-p btn-danger">Supprimer</button>
                        </div> </td>
                      </tr>
                    )

                  })}
              </tbody>
            </table>

            <Modal title="update" footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              {/* form for update */}

              <br />
              <form >

                <div class="form-group" >

                  <input name='nom' style={{ color: 'black', fontSize: '15px' }} value={indicateurUpdate ? indicateurUpdate.nom : ''} onChange={handlechange} type="text" class="form-control" placeholder='nom' />

                </div>

                <div class="form-group" >

                  <input name='description' style={{ color: 'black', fontSize: '15px' }} value={indicateurUpdate ? indicateurUpdate.description : ''} onChange={handlechange} type="text" class="form-control" placeholder='description' />

                </div>
              </form>
              <div class="modal-footer" >
                <button type="button" class="btn btn-primary" onClick={handleUpdate} >Modifier</button>
              </div>

            </Modal>

          </div>
        </div>

    

      </div>
    </div>

  )
}

export default Listeindmod1

