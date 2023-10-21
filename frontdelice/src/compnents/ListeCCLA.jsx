import React, { useEffect, useState } from 'react'
import Navprincipale from '../Layouts/Navprincipale'
import bleu from '../assets/image/bleu.png'
import {
  Form,
  Input,
  Button,
  Modal
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GetCentre, selectAllCentre } from '../features/Centre/CentreSlice';
function ListeCCLA() {

  const allcentre = useSelector(selectAllCentre)  //useselector bech ta9rali state mel achetteur slice
  const dispatch = useDispatch() //declaration de usedispatch

  useEffect(() => { //hooks tetlansa kol win 3andi get 

    dispatch(GetCentre()) //nom de l'action eli fel achetteur slice 

  }, [])



  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const onFinish = (values) => {

    console.log('Success:');


  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    alert('Erreur inscription');
  };

  return (

    <div>

      <Navprincipale />

      <div id="content">
        <div class='main'>
          <div class="midde_cont">
            <div class="container-fluid">
              <h1 className='h11' style={{ marginRight: "200px", marginLeft: "0px", textAlign: "center", fontSize: "40px", fontWeight: "bold", color: "#34ace0" }}>Liste des centres collectes lait</h1>
              <div className="inbox-head" style={{ backgroundColor: "white" }}>

                <form action="#" className="position search_inbox" style={{ marginLeft: "60px", marginTop: "40px" }}  >
                  <div className="input-append">
                    <input type="text" className="sr-input" placeholder="Chercher centre" style={{ backgroundColor: "#f6f6f6" }} />px
                    <button className="btn sr-btn" type="button"><i className="fa fa-search" /></button>
                  </div>
                </form>
              </div>


              <div className='row mt-5'>
                <div className='col-md-9'>


                  <table style={{ height: "300px", marginLeft: "300px", borderColor: "white", marginLeft: "80px", backgroundColor: "#f7f1e3!important" }} >
                    <thead>
                      <tr class="table-info" >


                        <th style={{ fontSize: "20px", width: "200px", border: "solid", height: "20px", borderColor: "white" }}>Code</th>
                        <th style={{ fontSize: "20px", width: "200px", border: "solid", borderColor: "white" }} >Fournisseur</th>
                        <th style={{ fontSize: "20px", width: "200px", border: "solid", borderColor: "white" }}>Code_parent</th>

                        <th style={{ fontSize: "20px", width: "200px", border: "solid", borderColor: "white" }}>FRS_parent</th>
                        <th style={{ fontSize: "20px", width: "200px", border: "solid", borderColor: "white" }}>Region</th>
                        <th style={{ fontSize: "20px", width: "200px", border: "solid", borderColor: "white" }}>Zone</th>

                        <th style={{ fontSize: "20px", width: "200px", border: "solid", borderColor: "white" }}>Gouvernorat</th>
                        <th style={{ fontSize: "20px", width: "200px", border: "solid", borderColor: "white" }}>Achetteur</th>
                        <th style={{ fontSize: "20px", width: "200px", border: "solid", borderColor: "white" }}>Categorie</th>
                        <th style={{ fontSize: "20px", width: "200px", border: "solid", borderColor: "white" }}>Sous Categorie</th>
                        <th style={{ fontSize: "20px", width: "200px", border: "solid", borderColor: "white" }}>Classe</th>
                        <th style={{ fontSize: "20px", width: "200px", border: "solid", borderColor: "white" }}>Nature</th>

                        <th style={{ fontSize: "20px", width: "600px", border: "solid", borderColor: "white" }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        allcentre.map((e, i) => {

                          return (

                            <tr class="table-info">

                              <td style={{ fontSize: "20px", width: "200px", border: "solid", borderColor: "white" }}>1kdlkc</td>
                              <td style={{ fontSize: "20px", width: "200px", border: "solid", borderColor: "white" }}>Ali ben Mouhamed</td>
                              <td style={{ fontSize: "20px", width: "200px", border: "solid", borderColor: "white" }}>m88</td>
                              <td style={{ fontSize: "20px", width: "200px", border: "solid", borderColor: "white" }}>lm88</td>
                              <td style={{ fontSize: "20px", width: "200px", border: "solid", borderColor: "white" }}>CCL</td>
                              <td style={{ fontSize: "20px", width: "200px", border: "solid", borderColor: "white" }}>90200200</td>


                              <td style={{ fontSize: "20px", width: "200px", border: "solid", borderColor: "white" }}>  <div class="button_block" ><button type="button" class="btn cur-p btn-success mr-4" >Modifier</button>
                                <button type="button" class="btn cur-p btn-danger">Supprimer</button>
                              </div> </td>
                            </tr>

                          )

                        })}



                    </tbody>
                  </table>
                </div>

                <div >
                  <img src={bleu} alt="imgcentre" onClick={showModal} style={{ height: "200px", marginTop: "70px", marginLeft: "100px" }}></img>

                  <Modal style={{ marginTop: '0px' }} footer={null} title="Ajouter un nouveau centre" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >

                    <div class="modal-body" >

                      {/* <AjoutComite /> */}



                      <Form name="basic"
                        labelCol={{
                          span: 8,
                        }}
                        wrapperCol={{
                          span: 15,
                        }}
                        initialValues={{
                          remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"

                      >

                        <Form.Item
                          name="code frs"
                          label="code frs"

                          rules={[
                            {
                              type: 'text',
                              message: 'Donnée entrée pas valide',
                            },
                            {
                              required: true,
                              message: 'SVP entrer votre matricule',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name="fournisseur"
                          label="fournisseur"
                          rules={[
                            {
                              required: true,
                              message: 'SVP entrer le Nom de la comite',
                            },
                          ]}
                          hasFeedback
                        >
                          <Input />
                        </Form.Item>

                        <Form.Item
                          name="code_parent"
                          label="code_parent"
                          rules={[
                            {
                              required: true,
                              message: 'SVP entrer le Prenom de la comite',
                            },
                          ]}
                          hasFeedback
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name="Categorie"
                          label="Categorie"
                          rules={[
                            {
                              required: true,
                              message: 'SVP entrer le numéro de contact',
                            },
                          ]}
                          hasFeedback
                        >
                          <Input />
                        </Form.Item>

                        <Form.Item
                          name="zone"
                          label="zone"
                          rules={[
                            {
                              required: true,
                              message: 'SVP entrer le numéro de contact',
                            },
                          ]}
                          hasFeedback
                        >
                          <Input />
                        </Form.Item>



                        <Form.Item name='gender' style={{ align: "right" }}>
                          <Button type="primary" htmlType="submit" style={{ align: "right", color: "primary", marginLeft: "250px" }}> Enregistrer </Button>
                        </Form.Item>


                      </Form>


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

export default ListeCCLA


