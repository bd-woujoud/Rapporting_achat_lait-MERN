import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import bleu from '../assets/image/bleu.png'
import Swal from "sweetalert2";
import {
    Form,
    Input,
    Button,
    Modal,
    Select
} from 'antd';
import { classes, gouvernerats, natures, regions, souCategories, zones } from '../mokh/donnees';
import { Ajoutcentre, selectcreate, selectregistererror } from '../features/Centre/CentreSlice';
import { GetAchetteur, selectAllAchetteur } from '../features/Achetteur/AchetteurSlice';
const { Option } = Select;


function AjouterCentre(props) {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    {




        const dispatch = useDispatch()
        const allachetteur = useSelector(selectAllAchetteur)
        console.log(allachetteur, "bbbbbbbbbbbbbbbb")


        useEffect(() => {

            dispatch(GetAchetteur())

        }, [])

        const [code, setCode] = useState('')
        const [fournisseur, setFournisseur] = useState('')
        const [code_parent, setCode_parent] = useState('')
        const [frs_parent, setFrs_parent] = useState('')
        const [region, setRegion] = useState('nord ouest')
        const [zone, setZone] = useState('siliana')
        const [achetteur, setAchetteur] = useState('aligg kais')
        const [gouvernerat, setGouvernerat] = useState('siliana')
        const [sous_categorie, setSous_categorie] = useState('grande ferme')
        const [classe, setClasse] = useState('ferme etatique')
        const [nature, setNature] = useState('clean')


        const Ajouter = (e) => {
            e.preventDefault();

            let data = {

                code: code,
                fournisseur: fournisseur,
                code_parent: code_parent,
                frs_parent: frs_parent,
                region: region,
                zone: zone,
                achetteur: achetteur,
                gouvernerat: gouvernerat,
                sous_categorie: sous_categorie,
                classe: classe,
                nature: nature
            }

            dispatch(Ajoutcentre(data))

            // Swal.fire({
            //     title: "Success",
            //     text: "centre créer avec succées",
            //     icon: "success",
            //     confirmButtonText: "OK",
            // });
            // setTimeout(() => {
            //     setIsModalVisible(false);

            // }, 2000);


        }

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

            <div >
                <img src={bleu} alt="imgcentre" onClick={showModal} style={{ height: "70px", marginTop: "5px", marginLeft: "1000px" }}></img>

                <Modal style={{ marginTop: '0px' }} footer={null} title="Ajouter un nouveau centre" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >

                    <div class="modal-body" >

                        {/* <Ajout /> */}



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
                            // onFinish={onFinish}

                            //  onFinishFailed={onFinishFailed}
                            autoComplete="off"

                        >

                            <Form.Item
                                name="code"
                                label="code frs"
                                onChange={(e) => setCode(e.target.value)}

                                rules={[
                                    {
                                        type: 'text',
                                        message: 'Donnée entrée pas valide',
                                    },
                                    {
                                        required: true,
                                        message: 'SVP entrer le code',
                                    },
                                ]}
                            >
                                <Input />
                                <ErrorHandler name='code' />
                            </Form.Item>
                            <Form.Item
                                name="fournisseur"
                                label="fournisseur"
                                onChange={(e) => setFournisseur(e.target.value)}

                                rules={[
                                    {
                                        required: true,
                                        message: 'SVP entrer vos fournisseur',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input />
                                <ErrorHandler name='fournisseur' />
                            </Form.Item>

                            <Form.Item
                                name="code_parent"
                                label="code_parent"
                                onChange={(e) => setCode_parent(e.target.value)}

                                rules={[
                                    {
                                        required: true,
                                        message: 'SVP entrer le code parent',
                                    },
                                ]}
                                hasFeedback



                            >
                                <Input />
                                <ErrorHandler name='code_parent' />
                            </Form.Item>
                            <Form.Item
                                name="frs_parent"
                                label="frs_parent"
                                onChange={(e) => setFrs_parent(e.target.value)}

                                rules={[
                                    {
                                        required: true,
                                        message: 'SVP entrer le fournisseur parent',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input />
                                <ErrorHandler name='frs_parent' />
                            </Form.Item>

                            <Form.Item
                                name="region"
                                label="region"


                                rules={[
                                    {
                                        required: true,
                                        message: 'SVP entrer le region',
                                    },
                                ]}
                                hasFeedback
                            >

                                <select class="ant-form-item-control-input-content"
                                    value={region} onChange={(e) => setRegion(e.target.value)}

                                >
                                    {

                                        regions.map((c) => {
                                            return (
                                                <option value={c._id} >{c}</option>
                                            )
                                        })

                                    }

                                </select>
                             
                            </Form.Item>
                            <Form.Item
                                name="zone"
                                label="zone"


                                rules={[
                                    {
                                        required: true,
                                        message: 'Selectionner votre zone',
                                    },
                                ]}
                                hasFeedback
                            >
                                <select class="ant-form-item-control-input-content"
                                    value={zone} onChange={(e) => setZone(e.target.value)}

                                >
                                    {

                                        zones.map((c) => {
                                            return (
                                                <option value={c._id} >{c}</option>
                                            )
                                        })

                                    }

                                </select>
                              
                            </Form.Item>


                            <Form.Item label="achetteur" rules={[
                                {
                                    required: true,
                                    message: 'SVP entrer le numéro de contact',
                                },
                            ]}
                                hasFeedback>
                         
                                <select name='achetteur' onChange={(e) => setAchetteur(e.target.value)}>

                                    <option value={''} selected>Selectionnez achetteur</option>
                                    {
                                        allachetteur.map((c, i) => {

                                            return (


                                                <option value={c._id}>{c.nom} {c.prenom}  </option>



                                            )
                                        })
                                    }

                                </select>
                              
                            </Form.Item>
                            <Form.Item
                                name="gouvernerat"
                                label="gouvernerat"


                                rules={[
                                    {
                                        required: true,
                                        message: 'SVP entrer votre gouvernerat ',
                                    },
                                ]}
                                hasFeedback
                            >

                                <select class="ant-form-item-control-input-content"
                                    value={gouvernerat} onChange={(e) => setGouvernerat(e.target.value)}

                                >
                                    {

                                        gouvernerats.map((c) => {
                                            return (
                                                <option value={c._id} >{c}</option>
                                            )
                                        })

                                    }

                                </select>
                       
                            </Form.Item>

                            <Form.Item
                                name="sous_categorie"
                                label="sous_categorie"


                                rules={[
                                    {
                                        required: true,
                                        message: 'SVP entrer le',
                                    },
                                ]}
                                hasFeedback
                            >
                                <select class="ant-form-item-control-input-content"
                                    value={sous_categorie} onChange={(e) => setSous_categorie(e.target.value)}

                                >
                                    {

                                        souCategories.map((c) => {
                                            return (
                                                <option value={c._id} >{c}</option>
                                            )
                                        })

                                    }

                                </select>
                             
                            </Form.Item>
                            <Form.Item
                                name="classe"
                                label=" classe"


                                rules={[
                                    {
                                        required: true,
                                        message: 'Selectionner votre classe',
                                    },
                                ]}
                                hasFeedback
                            >

                                <select class="ant-form-item-control-input-content"
                                    value={classe} onChange={(e) => setClasse(e.target.value)}

                                >
                                    {

                                        classes.map((c) => {
                                            return (
                                                <option value={c._id} >{c}</option>
                                            )
                                        })

                                    }

                                </select>
                           
                            </Form.Item>
                            <Form.Item
                                name="nature"
                                label="nature"
                                onChange={(e) => setNature(e.target.value)}

                                rules={[
                                    {
                                        required: true,
                                        message: 'Selectionnez votre nature',
                                    },
                                ]}
                                hasFeedback
                            >
                                <select class="ant-form-item-control-input-content"
                                    value={nature} onChange={(e) => setNature(e.target.value)}

                                >
                                    {

                                        natures.map((c) => {
                                            return (
                                                <option value={c._id} >{c}</option>
                                            )
                                        })

                                    }

                                </select>
                            
                            </Form.Item>
                            <Form.Item name='gender' style={{ align: "right" }}>
                                <Button onClick={Ajouter} type="primary" htmlType="submit" style={{ align: "right", color: "primary", marginLeft: "250px" }}> Ajouter </Button>
                            </Form.Item>
                        </Form>

                    </div>
                </Modal>
            </div>
        )
    }
}
export default AjouterCentre