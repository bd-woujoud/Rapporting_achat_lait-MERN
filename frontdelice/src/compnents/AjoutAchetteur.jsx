import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Registred, selectregistererror } from '../features/Achetteur/AchetteurSlice';
import { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Modal
} from 'antd';

import achetteur from '../assets/image/achetteur.png'

function AjoutAchetteur(props) {

  const [role, setrole] = useState('');
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

  const dispatch = useDispatch() //declaration de usedispatch

  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [matricule, setMatricule] = useState('')
  const [num_tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onFinish = (e) => {

    e.preventDefault();

    let data = {
      email: email,
      password: password,
      nom: nom,
      prenom: prenom,
      matricule: matricule,
      num_tel: num_tel,

    }

    dispatch(Registred(data))
    window.alert("achetteur ajouter avec succées")
    window.location.reload()

  }



  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    alert('Erreur inscription');
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

      <img src={achetteur} alt="imgachetteur" onClick={showModal} style={{ marginLeft: "650px", height: "100px" }}></img>


      <Modal style={{ marginTop: '0px' }} footer={null} title="Ajouter un nouveau achetteur" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >

        <div class="modal-body" >

          {/* <Ajout achetteur /> */}
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

            onFinishFailed={onFinishFailed}
            autoComplete="off"

          >


            <Form.Item
              name="nom"
              label="Nom"
              onChange={(e) => setNom(e.target.value)}
              rules={[
                {
                  required: true,
                  // message: 'SVP entrer le Nom de la achetteur',
                },
              ]}
              hasFeedback
            >
              <Input />
              <ErrorHandler name='nom' />
            </Form.Item>

            <Form.Item
              name="prenom"
              label="Prenom"
              onChange={(e) => setPrenom(e.target.value)}
              rules={[
                {
                  required: true,
                  // message: 'SVP entrer le Prenom de la achetteur',
                },
              ]}
              hasFeedback
            >
              <Input />
              <ErrorHandler name='prenom' />
            </Form.Item>

            <Form.Item
              name="matricule"
              label="matricule"
              onChange={(e) => setMatricule(e.target.value)}

              rules={[
                {
                  type: 'text',
                  // message: 'Donnée entrée pas valide',
                },
                {
                  required: true,
                  // message: 'SVP entrer votre matricule',
                },
              ]}
            >
              <Input />
              <ErrorHandler name='matricule' />
            </Form.Item>

            <Form.Item
              name="num_tel"
              label="teléphone"
              onChange={(e) => setTel(e.target.value)}

              rules={[
                {
                  type: 'Number',
                  // message: 'Donnée entrée pas valide',
                },
                {
                  required: true,
                  // message: 'SVP entrer votre teléphone',
                },
              ]}
            >
              <Input />
              <ErrorHandler name='num_tel' />
            </Form.Item>

            <Form.Item
              name="email"
              label="email"
              onChange={(e) => setEmail(e.target.value)}

              rules={[
                {
                  type: 'email',
                  // message: 'Donnée entrée pas valide',
                },
                {
                  required: true,
                  // message: 'SVP entrer votre login',
                },
              ]}
            >
              <Input />
              <ErrorHandler name='email' />
            </Form.Item>


            <Form.Item
              name="password"
              label="password"
              onChange={(e) => setPassword(e.target.value)}
              rules={[
                {
                  required: true,
                  // message: 'SVP entrer votre mot de passe',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
              <ErrorHandler name='password' />
            </Form.Item>


            <Form.Item style={{ align: "right" }}>
              <span onClick={() => setrole('achetteur')}>
                <Button onClick={onFinish} type="primary" htmlType="submit" style={{ align: "right", color: "primary", marginLeft: "250px" }}> Enregistrer </Button>
              </span></Form.Item>

          </Form>
        </div>
      </Modal>

    </div>
  )
}

export default AjoutAchetteur