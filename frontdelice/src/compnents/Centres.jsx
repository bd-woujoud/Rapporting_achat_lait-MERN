import React, { useEffect, useState } from 'react'
import Navprincipale from '../Layouts/Navprincipale'

import {
 
    Modal
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { classes, gouvernerats, natures, regions, souCategories, zones } from '../mokh/donnees';
import { GetAchetteur, selectAllAchetteur } from '../features/Achetteur/AchetteurSlice';
import { DeleteCentre, GetCentre, UpdateCentre, selectAllCentre, selectcreate, selectdeletCentre, selectupdate } from '../features/Centre/CentreSlice';
import Searchcentres from './Searchcentres';
import AjouterCentre from './AjouterCentre';
import { Link } from 'react-router-dom';

function Centres() {
    const deletecentre = useSelector(selectdeletCentre)
    const updatecentre = useSelector(selectupdate)
    const ajoutcentre = useSelector(selectcreate)

    const allcentre = useSelector(selectAllCentre)  //useselector bech ta9rali state mel slice
    const dispatch = useDispatch() //declaration de usedispatch

    useEffect(() => {

        dispatch(GetCentre())

    }, [deletecentre, updatecentre, ajoutcentre])

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [centreUpdate, setcentreUpdate] = useState(null) //donnéesv mte3 colone eli bech na3mlelha update

    const showModal = (id) => {
        setIsModalVisible(true);
        setcentreUpdate(allcentre.find(v => v._id === id)) //bech tjibli les inputs m3abin selon id
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const handlechange = e => { //hiya eli bech te5edh lvaleuret ejdod eli bech nbadelhom   onChange={(e) => setCode(e.target.value)}
        const { value, name } = e.target
        setcentreUpdate(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const allachetteur = useSelector(selectAllAchetteur)

    useEffect(() => {

        dispatch(GetAchetteur())

    }, [])

    const handleUpdate = () => {

        let data = {

            achetteur: centreUpdate.achetteur,
            code: centreUpdate.code,
            classe: centreUpdate.classe,
            zone: centreUpdate.zone,//ijibli le9dima
            nature: centreUpdate.nature,
            gouvernerat: centreUpdate.gouvernerat,
            region: centreUpdate.region,
            fournisseur: centreUpdate.fournisseur,
            code_parent: centreUpdate.code_parent,
            sous_categorie: centreUpdate.sous_categorie,
            code_parent: centreUpdate.code_parent,
            frs_parent: centreUpdate.frs_parent,
            id: centreUpdate._id   //bech y3adi el update
        }

        dispatch(UpdateCentre(data))
        window.alert("centre updated successfuly")
        handleOk()
    };


    return (



        <div>

            <Navprincipale />

            <div id="content">
                <div class='main'>
                    <div class="midde_cont">
                        <div class="container-fluid">
                            <h1 className='h11' style={{ marginRight: "200px", marginLeft: "0px", textAlign: "center", fontSize: "40px", fontWeight: "bold", color: "#16a085!important" }}>Liste des centres</h1>
                            <div className='row mt-5'>
                                <div className='col-md-9'>
                                    <Searchcentres />
                                    
                                <AjouterCentre />
                                    {allachetteur &&

                                        <table style={{ height: "100px", width: "1200px", marginTop: "120px", borderColor: "white" }} >
                                            <thead>
                                                <tr class="table-primary">
                                                    <th style={{ border: "solid", borderColor: "white" }}>Code</th>
                                                    <th style={{ border: "solid", borderColor: "white" }} >Fournisseur</th>
                                                    <th style={{ border: "solid", borderColor: "white" }}>Code_parent</th>
                                                    <th style={{ border: "solid", borderColor: "white" }}>FRS_parent</th>
                                                    <th style={{ border: "solid", borderColor: "white" }}>Region</th>
                                                    <th style={{ border: "solid", borderColor: "white" }}>Zone</th>
                                                    <th style={{ border: "solid", borderColor: "white" }}>Gouvernorat</th>
                                                    <th style={{ border: "solid", borderColor: "white" }}>Achetteur</th>
                                                    <th style={{ border: "solid", borderColor: "white" }}>Sous Categorie</th>
                                                    <th style={{ border: "solid", borderColor: "white" }}>Classe</th>
                                                    <th style={{ border: "solid", borderColor: "white" }}>Nature</th>
                                                    <th style={{ border: "solid", borderColor: "white" }}>Action</th>


                                                </tr>
                                            </thead>
                                            <tbody>



                                                {
                                                    allcentre.map((e, i) => {

                                                        return (

                                                            <tr class="table-primary">

                                                                <td style={{ border: "solid", borderColor: "white",textDecoration:"underline ",textDecorationThickness:"3px",cursor:"pointer" }} onClick={()=>localStorage.setItem('ferme',e._id)}> <Link to="/menuCCl">{e.code}</Link></td>
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
                                                                    <button onClick={() => dispatch(DeleteCentre(e._id))} type="button" class="btn cur-p btn-danger">Supprimer</button>
                                                                </div> </td>
                                                            </tr>

                                                        )

                                                    })}



                                            </tbody>
                                        </table>
                                    }


                                    <Modal title="update" footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                        {/* form for update */}

                                        <br />
                                        <form >

                                            <div class="form-group" >

                                                <input name='code' style={{ color: 'black', fontSize: '15px' }} value={centreUpdate ? centreUpdate.code : ''} onChange={handlechange} type="text" class="form-control" placeholder='code' />

                                            </div>

                                            <div class="form-group" >

                                                <input name='fournisseur' style={{ color: 'black', fontSize: '15px' }} value={centreUpdate ? centreUpdate.fournisseur : ''} onChange={handlechange} type="text" class="form-control" placeholder='fournisseur' />

                                            </div>
                                            <div class="form-group">

                                                <input name='code_parent' style={{ color: 'black', fontSize: '15px' }} value={centreUpdate ? centreUpdate.code_parent : ''} onChange={handlechange} type="text" class="form-control" placeholder='code_parent' />

                                            </div>
                                            <div class="form-group" >

                                                <input name='frs_parent' style={{ color: 'black', fontSize: '15px' }} value={centreUpdate ? centreUpdate.frs_parent : ''} onChange={handlechange} type="text" class="form-control" placeholder='frs_parent' />

                                            </div>

                                            <div class="form-group" >

                                                <select name='achetteur' onChange={handlechange} class="form-control" style={{ color: 'black', fontSize: '15px' }} >

                                                    <option value={centreUpdate ? centreUpdate.achetteur.nom : ''}>{centreUpdate ? centreUpdate.achetteur.nom + " " + centreUpdate.achetteur.prenom : ''}</option>
                                                    {
                                                        allachetteur.map((c, i) => {
                                                            return (
                                                                <option key={i} value={c._id}>{c.nom}</option>
                                                            )
                                                        })
                                                    }

                                                </select>
                                            </div>

                                            <div class="form-group" >

                                                <select name='region' onChange={handlechange} class="form-control" style={{ color: 'black', fontSize: '15px' }}>
                                                    <option value={centreUpdate ? centreUpdate.region : ''}>{centreUpdate ? centreUpdate.region : ''}</option>
                                                    {
                                                        regions.map((c, i) => {
                                                            return (
                                                                <option key={i} value={c}>{c}</option>
                                                            )
                                                        })
                                                    }

                                                </select>
                                            </div>
                                            <div class="form-group" >

                                                <select name='zone' onChange={handlechange} class="form-control" style={{ color: 'black', fontSize: '15px' }}>
                                                    <option value={centreUpdate ? centreUpdate.zone : ''}>{centreUpdate ? centreUpdate.zone : ''}</option>
                                                    {
                                                        zones.map((c, i) => {
                                                            return (
                                                                <option key={i} value={c}>{c}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div class="form-group" >

                                                <select name='gouvernerat' onChange={handlechange} class="form-control" style={{ color: 'black', fontSize: '15px' }}>
                                                    <option value={centreUpdate ? centreUpdate.gouvernerat : ''}>{centreUpdate ? centreUpdate.gouvernerat : ''}</option>
                                                    {
                                                        gouvernerats.map((c, i) => {
                                                            return (
                                                                <option key={i} value={c}>{c}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div class="form-group" >

                                                <select name='sous_categorie' onChange={handlechange} class="form-control" style={{ color: 'black', fontSize: '15px' }}>
                                                    <option value={centreUpdate ? centreUpdate.sous_categorie : ''}>{centreUpdate ? centreUpdate.sous_categorie : ''}</option>
                                                    {
                                                        souCategories.map((c, i) => {
                                                            return (
                                                                <option key={i} value={c}>{c}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div class="form-group" >

                                                <select name='classe' onChange={handlechange} class="form-control" style={{ color: 'black', fontSize: '15px' }}>
                                                    <option value={centreUpdate ? centreUpdate.classe : ''}>{centreUpdate ? centreUpdate.classe : ''}</option>
                                                    {
                                                        classes.map((c, i) => {
                                                            return (
                                                                <option key={i} value={c}>{c}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div class="form-group" >

                                                <select name='nature' onChange={handlechange} class="form-control" style={{ color: 'black', fontSize: '15px' }}>
                                                    <option value={centreUpdate ? centreUpdate.nature : ''}>{centreUpdate ? centreUpdate.nature : ''}</option>
                                                    {
                                                        natures.map((c, i) => {
                                                            return (
                                                                <option key={i} value={c}>{c}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
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
                </div>
            </div>
        </div>

    )
}

export default Centres
