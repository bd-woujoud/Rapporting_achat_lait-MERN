import React, { useEffect, useState } from 'react'
import Navprincipale from '../Layouts/Navprincipale'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteModule, GetModuleByFerme, UpdateModule, selectAllModule, selectUPDATEModule, selectdeleteModule } from
  '../features/Module/ModuleSlice'
import {
 Modal
} from 'antd';

import { BsEyeFill } from 'react-icons/bs'
import { GetIndicateur, selectAllIndicateur } from '../features/Indicateur/IndiateurSlice';
import Select from 'react-select';
import AjoutModule from './AjoutModule';
import { Link } from 'react-router-dom';

function ListedesModuleFerme() {


    const [isModalVisible, setIsModalVisible] = useState(false);
    const allindicateurs = useSelector(selectAllIndicateur)
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
  
  
    const allmodules = useSelector(selectAllModule)
    const deletemodules = useSelector(selectdeleteModule)
    const updatemodules = useSelector(selectUPDATEModule)
  
    const dispatch = useDispatch()
  
    useEffect(() => {
  
  
        dispatch(GetModuleByFerme())
    
    }, [deletemodules, updatemodules])
  
    useEffect(() => {
  
      dispatch(GetIndicateur(  ))
  
    }, [])
  
    const [selectedOptions, setSelectedOptions] = useState([]);
  
    const handleMultiSeslectChange = (selectedOptions) => {
      setSelectedOptions(selectedOptions);
      console.info(selectedOptions);
    };
  
    const [moduleUpdate, setModuleUpdate] = useState(null) //donnéesv mte3 colone eli bech na3mlelha update
  
    const showModal = (id) => {
      setIsModalVisible(true);
      setModuleUpdate(allmodules.find(v => v._id === id)) //bech tjibli les inputs m3abin selon id
    };
    const handlechange = e => {
      const { value, name } = e.target
      setModuleUpdate(prev => ({
        ...prev,
        [name]: value
      }))
    }
    const handleUpdate = () => {
  
      let data = {
  
        nom: moduleUpdate.nom,
        indicateurs: selectedOptions,
        id: moduleUpdate._id
      }
      console.log(data, 'tttttttttttttttttttt');
      dispatch(UpdateModule(data))
  
  
      handleOk()
      window.alert("module updated successfuly")
    };


  return (
    <div>
    <Navprincipale />
    <div id="content">
      <div className="main">
        <div className="midde_cont">
          <div className="container-fluid">
            <div className="row column4 graph">
              <div className="col-md-6">
                <div className="dash_blog">
                  <div className="dash_blog_inner">
                    <div className="dash_head ">
                      <h3><span><i className="fa fa-calendar" /> Liste des Modules Ferme</span>
                        <AjoutModule />
                      </h3>

                    </div>

                    {/*
                <get module /> */}
                    <div className="task_list_main">
                      <ul className="task_list mt-5">
                        {
                          allmodules.map((e, i) => {
                            return (
                              <div className='row'>  <div className='col-md-6'> <li><a>{e.nom}</a> </li> </div>

                                <div className='col-md-1'><Link to='/Listeindmod2'>
                                  <button class="btn btn-primary mr-2" onClick={() => { localStorage.setItem('module', e._id) }}><BsEyeFill />
                                  </button>
                                  </Link> </div>
                                <div className='col-md-5'><button onClick={() => showModal(e._id)} type="button" class="btn cur-p btn-success mr-2" >Modifier</button>

                                  <button onClick={() => dispatch(DeleteModule(e._id))} type="button" class="btn cur-p btn-danger">Supprimer</button>
                                </div> </div>
                            )

                          })}
                      </ul>
                    </div>

                    <Modal title="modifier votre module" footer={null} visible={isModalVisible} onOk={handleOk}
                      onCancel={handleCancel}>

                      <br />
                      <form>

                        <div class="form-group">

                          <input name='nom' style={{ color: 'black', fontSize: '15px' }} value={moduleUpdate ?
                            moduleUpdate.nom : ''} onChange={handlechange} type="text" class="form-control"
                            placeholder='nom' />

                        </div>
                        <div class="form-group">

                          <Select defaultValue={moduleUpdate ? moduleUpdate.indicateurs : ''} isMulti name="indicateur"
                            onChange={handleMultiSeslectChange} options={allindicateurs} getOptionLabel={(option) =>
                              option.nom}
                            getOptionValue={(option) => option._id}
                            className="basic-multi-select"
                            classNamePrefix="select"
                          />
                        </div>
                      </form>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-primary" onClick={handleUpdate}>Modifier</button>
                      </div>

                    </Modal>
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

export default ListedesModuleFerme