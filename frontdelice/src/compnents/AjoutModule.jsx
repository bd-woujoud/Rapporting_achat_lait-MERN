import React, { useEffect, useState } from 'react'
import { GetIndicateur, selectAllIndicateur } from '../features/Indicateur/IndiateurSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
    Form,
    Input,
    Button,
    Modal
} from 'antd';
import Select from 'react-select';
import { CreateModule, GetModule,selectCreateModule, selectUPDATEModule, selectdeleteModule, selectregistererror } from '../features/Module/ModuleSlice';

function AjoutModule() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const allindicateurs = useSelector(selectAllIndicateur)

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const showModal = () => {
        setIsModalVisible(true);
    };


    const ajoutmodules = useSelector(selectCreateModule)

  
    useEffect(() => {
      dispatch(GetModule())
    }, [ajoutmodules])
  
    useEffect(() => {
      dispatch(GetIndicateur())
    }, [])
  
    const [nom, setNom] = useState('')
    const [cible, setCible] = useState('ferme')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetIndicateur())
    }, [])
    const create = (e) => {
        e.preventDefault();
        let data = {
            nom: nom,
            cible:cible,
            indicateurs: selectedOptions
        }
        dispatch(CreateModule(data))
        window.alert("module créer avec succées")
        setIsModalVisible(false);
       window.location.reload()
    }
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleMultiSeslectChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
        console.info(selectedOptions);
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

            <span className="plus_green_bt" onClick={showModal}><a href="#">+</a></span>
            <Modal style={{ marginTop: '0px' }} footer={null} title="Ajouter un nouveau module" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >

                <div class="modal-body" >
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
                                    required: true,
                                    message: 'SVP entrer le Nom du module',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input />
                            <ErrorHandler name='nom' />
                        </Form.Item>

                        <Form.Item label="indicateur" rules={[
                            {
                                required: true,
                                message: 'SVP entrer indicateur',
                            },
                        ]}
                            hasFeedback>

                            <Select
                                defaultValue={""}
                                isMulti
                                name="indicateurs"
                                onChange={handleMultiSeslectChange}
                                options={allindicateurs}
                                getOptionLabel={(option) => option.nom}
                                getOptionValue={(option) => option._id}
                                className="basic-multi-select"
                                classNamePrefix="select"
                            />
    
                        </Form.Item>
                        <Form.Item
                                name="cible"
                                label="Cible"


                                rules={[
                                    {
                                        required: true,
                                       
                                    },
                                ]}
                                hasFeedback
                            >
                                < select class="ant-form-item-control-input-content" style={{width:"100%",borderColor:'lightGray',height:"30px",borderRadius:"5px"}}
                                  value={cible} selected onChange={(e) => setCible(e.target.value)}
                                >

                                                <option value="ferme" >Ferme</option>
                                                <option value="ccl" >CCl</option>
                                    
                                </select>
                             
                            </Form.Item>
                        <Form.Item style={{ align: "right" }}>
                            <Button onClick={create} type="primary" htmlType="submit" style={{ align: "right", color: "primary", marginLeft: "250px" }}> Enregistrer </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>


        </div>
    )
}

export default AjoutModule