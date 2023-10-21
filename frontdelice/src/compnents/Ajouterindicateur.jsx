import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import {
    Form,
    Input,
    Button,
    Modal,
    Select
} from 'antd';
import {  Createindicateur, GetIndicateur, selectAllIndicateur, selectCreateIndicateur, selectregistererror } from '../features/Indicateur/IndiateurSlice';
const { Option } = Select;


function Ajouterindicateur(props) {

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
        const dispatch = useDispatch()
        const allindicateurs = useSelector(selectAllIndicateur)
        console.log(allindicateurs, "bbbbbbbbbbbbbbbb")
        const create = useSelector(selectCreateIndicateur)


        useEffect(() => {

            dispatch(GetIndicateur())

        }, [create])

        const [nom, setNom] = useState('')
        const [description, setDescription] = useState('')

        const Ajouter = (e) => {

            e.preventDefault();

            let data = {

                nom: nom,
                description: description,

            }

            dispatch(Createindicateur(data))
            window.alert("indicateur créer avec succées")
           window.location.reload()
           handleOk() 
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
      
// nselectioni categorie w ba3ed bech nselectionni ferme me tableau w ba3ed bech yet7ali menu ccl
 //ki no9res 3al audit bech yet7ali liste des module sans boutton hne bech nselectionni module bech yet7ali 
 //l'interface module 1 bech n3amer les valeur des indicateurs

        return (

            <div >
                <div class="button_block" onClick={showModal} style={{ marginLeft: "40px" }}><button type="button" class="btn cur-p btn-secondary">Ajouter indicateur</button>

                    <Modal style={{ marginTop: '0px' }} footer={null} title="Ajouter un nouveau indicateur" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >

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

                                autoComplete="off"
                            >
                                <Form.Item
                                    name="nom"
                                    label="Nom"
                                    onChange={(e) => setNom(e.target.value)}

                                    rules={[
                                        {
                                            type: 'text',
                                            message: 'Donnée entrée pas valide',
                                        },
                                        {
                                            required: true,
                                            message: 'SVP entrer le nom',
                                        },
                                    ]}
                                >
                                    <Input />
                                    <ErrorHandler name='nom' />
                                </Form.Item>
                                <Form.Item
                                    name="description"
                                    label="Description"
                                    onChange={(e) => setDescription(e.target.value)}

                                    rules={[
                                        {
                                            required: true,
                                            message: 'SVP entrer vos description',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input />
                                    <ErrorHandler name='description' />
                                </Form.Item>
                            </Form>
                        </div>

                        <div class="modal-footer" >
                            <button type="button" class="btn btn-primary" onClick={Ajouter} >Ajouter</button>
                        </div>

                    </Modal>
                </div>
            </div>
        )

   
}
export default Ajouterindicateur