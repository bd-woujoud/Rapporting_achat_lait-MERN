import React, { useState } from 'react'
import Navprincipale from '../Layouts/Navprincipale'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteAchetteur, GetAchetteur, selectAllAchetteur, UpdateAchetteur, selectregistererror, selectedelete, selectupdate } from '../features/Achetteur/AchetteurSlice';
import { useEffect } from 'react';
import Search from './Search';
import AjoutAchetteur from './AjoutAchetteur';
import {
  Form,
  Input,
  Button,
  Modal
} from 'antd';


function ListeA() {

  const allachetteur = useSelector(selectAllAchetteur)  //useselector bech ta9rali state mel achetteur slice
  const updateachetteur = useSelector(selectupdate)  //useselector bech ta9rali state mel achetteur slice
  const deleteachetteur = useSelector(selectedelete)  //useselector bech ta9rali state mel achetteur slice

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [upAchetteur, setUpAchetteur] = useState(null);

  const dispatch = useDispatch() //declaration de usedispatch
  useEffect(() => { //hooks tetlansa kol win 3andi get 

    dispatch(GetAchetteur()) //nom de l'action eli fel achetteur slice 

  }, [updateachetteur, deleteachetteur])


  const showModal = (id) => {
    setIsModalVisible(true);
    setUpAchetteur(allachetteur && allachetteur.find(o => o._id === id))  //bech tjibli les input m3abin selon id
    console.log(allachetteur.find(o => o._id === id), "aaaaaaaaaaaaaachetteur");
    console.log(upAchetteur, "hetteur");
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handelChange = (e) => {
    const { value, name } = e.target;
    setUpAchetteur((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = () => {

    let data = {
      email: upAchetteur.email,
      password: upAchetteur.password,
      nom: upAchetteur.nom,
      prenom: upAchetteur.prenom,
      matricule: upAchetteur.matricule,
      num_tel: upAchetteur.num_tel,
      id: upAchetteur._id,
    };

    dispatch(UpdateAchetteur(data))
    window.alert("achetteur modifié avec succées")
   window.location.reload()
    handleOk();

  };

  const errors = useSelector(selectregistererror)

  const ErrorHandler = ({ name }) => {

    return (
      <>
        {
          errors.map(e => {
            console.log(errors, "errrrrrrrrrrrr");
            return (
              <>
                {
                  e.path[0] === name
                  &&
                  <span style={{ color: "red" }}  >{e.message}</span>
                }
              </>
            )
          })

        }
      </>
    )
  }



  return (


    <div>
      <Navprincipale />
      <div className="midde_cont">
        <div className="container-fluid">
          <div className="row column_title">
            <div className="col-md-12">

            </div>
          </div>
          {/* row */}
          <div className="row column1" style={{ backgroundColor: "white", marginLeft: "5px", marginRight: "220px" }}>
            <div className="col-md-12" style={{ backgroundColor: "white", marginLeft: "10px", marginRight: "-100px" }}>
              <div className="full graph_head" style={{ backgroundColor: "white", marginLeft: "250px", marginRight: "10px" }}>


                <div className="row " >
                  <div className="col-md-6" >
                    <h2 style={{ fontSize: "40px", marginTop: "50px", color: " 	#708090!important" }}>Les Acheteurs Lait</h2>
                  </div>
                  <div className="col-md-6" >
                    <AjoutAchetteur />

                  </div>
                </div>

              </div>

              <div className="full price_table padding_infor_info" style={{ backgroundColor: "#f6f6f6", marginLeft: "250px" }}>


                <Search />

                <div className="row mt-5">

                  {
                    allachetteur.map((item, i) => {
                      return (

                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 profile_details margin_bottom_30">
                          <div className="contact_blog" style={{ backgroundColor: "white" }}>

                            <div className="contact_inner">
                              <div className="left">
                                <h3>{item.nom} {item.prenom}</h3>
                                <ul className="list-unstyled">
                                  <li><i className="fa fa-eraser" /> :{item.matricule}</li>
                                  <li><i className="fa fa-envelope-o" /> :{item.email}</li>
                                  <li><i className="fa fa-phone" /> : {item.num_tel}</li>
                                </ul>
                              </div>
                              <div className="right">
                                <div className="profile_contacts">
                                  <img className="img-responsive" src="images/layout_img/149071.png" alt="#" />
                                </div>
                              </div>
                              <div className="bottom_list">
                                <div class="button_block" >
                                </div>
                                <div className="right_button">
                                  <span onClick={() => localStorage.setItem("achetteur", item._id)} ><button onClick={() => showModal(item._id)} type="button" class="btn cur-p btn-success mr-4" >Modifier</button>
                                  </span> <button onClick={() => dispatch(DeleteAchetteur(item._id))} type="button" class="btn cur-p btn-danger">Supprimer</button>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>


                      )
                    })

                  }


                  {/* modifier achetteur */}

                  <Modal title="update" footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    {/* form for update */}

                    <br />
                    <form >



                      <form >

                        <div class="form-group" style={{ height: '50px' }}>

                          <input name='nom' value={upAchetteur ? upAchetteur.nom : ''} onChange={handelChange} style={{ height: '50px', color: 'black', fontSize: '15px' }} type="text" class="form-control" placeholder='nom' />

                        </div>

                        <div class="form-group" style={{ height: '50px' }}>

                          <input name='prenom' value={upAchetteur ? upAchetteur.prenom : ''} onChange={handelChange} style={{ height: '50px', color: 'black', fontSize: '15px' }} type="text" class="form-control" placeholder="prenom" />

                        </div>
                        <div class="form-group" style={{ height: '50px' }}>

                          <input name='matricule' value={upAchetteur ? upAchetteur.matricule : ''} onChange={handelChange} style={{ height: '50px', color: 'black', fontSize: '15px' }} type="text" class="form-control" placeholder="matricule" />

                        </div>
                        <div class="form-group" style={{ height: '50px' }}>

                          <input name='num_tel' value={upAchetteur ? upAchetteur.num_tel : ''} onChange={handelChange} style={{ height: '50px', color: 'black', fontSize: '15px' }} type="text" class="form-control" placeholder="telephone" />

                        </div>
                        <div class="form-group" style={{ height: '50px' }}>

                          <input name='email' value={upAchetteur ? upAchetteur.email : ''} onChange={handelChange} style={{ height: '50px', color: 'black', fontSize: '15px' }} type="text" class="form-control" placeholder="email" />
                          <ErrorHandler name='email' />
                        </div>
                        <div class="form-group" style={{ height: '50px' }}>

                          <input name='password' value={upAchetteur ? upAchetteur.password : ''} onChange={handelChange} style={{ height: '50px', color: 'black', fontSize: '15px' }} type="text" class="form-control" placeholder="password" />

                        </div>
                      </form>

                    </form>
                    <div class="modal-footer" >
                      <button type="button" class="btn btn-primary" onClick={handleUpdate} >Modifier</button>
                    </div>

                  </Modal>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}

export default ListeA