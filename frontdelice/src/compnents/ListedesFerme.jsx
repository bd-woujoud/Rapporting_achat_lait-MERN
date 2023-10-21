import React, { useEffect, useState } from 'react'
import Navprincipale from '../Layouts/Navprincipale'
import ajoutcentre from '../assets/image/ajoutcentre.jpg'
import fermeaj from '../assets/image/fermeaj.png'
import {
    Form,
    Input,
    Button,
    Modal
} from 'antd';
import { DeleteFerme, GetFerme, UpdateFerme, selectAllFerme, selectcreate, selectdeletFerme, selectupdate } from '../features/Ferme/FermeSlice';
import { useDispatch, useSelector } from 'react-redux';
import SearshFerme from './SearshFerme';
import AjouterFerme from './AjouterFerme';
import { classes, gouvernerats, natures, regions, souCategories, zones } from '../mokh/donnees';
import { GetAchetteur, selectAllAchetteur } from '../features/Achetteur/AchetteurSlice';
import { Link } from 'react-router-dom';


function ListedesFerme() {
    const deleteferme = useSelector(selectdeletFerme)
    const updateferme = useSelector(selectupdate)

    const allferme = useSelector(selectAllFerme)  //useselector bech ta9rali state mel slice
    const dispatch = useDispatch() //declaration de usedispatch
    const createferme = useSelector(selectcreate)

    useEffect(() => {

        dispatch(GetFerme())

    }, [deleteferme, updateferme, createferme])

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [fermeUpdate, setfermeUpdate] = useState(null) //donnéesv mte3 colone eli bech na3mlelha update

    const showModal = (id) => {
        setIsModalVisible(true);
        setfermeUpdate(allferme.find(v => v._id === id)) //bech tjibli les inputs m3abin selon id
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const handlechange = e => { //hiya eli bech te5edh lvaleuret ejdod eli bech nbadelhom   onChange={(e) => setCode(e.target.value)}
        const { value, name } = e.target
        setfermeUpdate(prev => ({
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

            achetteur: fermeUpdate.achetteur,
            code: fermeUpdate.code,
            classe: fermeUpdate.classe,
            zone: fermeUpdate.zone,//ijibli le9dima
            nature: fermeUpdate.nature,
            gouvernerat: fermeUpdate.gouvernerat,
            region: fermeUpdate.region,
            fournisseur: fermeUpdate.fournisseur,
            code_parent: fermeUpdate.code_parent,
            sous_categorie: fermeUpdate.sous_categorie,
            code_parent: fermeUpdate.code_parent,
            frs_parent: fermeUpdate.frs_parent,
            id: fermeUpdate._id   //bech y3adi el update
        }

        dispatch(UpdateFerme(data))
        window.alert("ferme modifiée avec succées")
        handleOk()
    };


    return (

        <div>

            <Navprincipale />

            <div id="content">
                <div class='main'>
                    <div class="midde_cont">
                        <div class="container-fluid">
                            <h1 className='h11' style={{ marginRight: "200px", marginLeft: "0px", textAlign: "center", fontSize: "40px", fontWeight: "bold", color: "#16a085!important" }}>Liste des fermes</h1>
                            <div className='row mt-5'>
                                <div className='col-md-9'>
                                    < SearshFerme />
                                    {allachetteur &&
                                        <table style={{ height: "100px", width: "1200px", marginTop: "30px", borderColor: "white" }} >
                                            <thead>
                                                <tr class="table-success">
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
                                                    allferme.map((e, i) => {
                                                        console.log(e, "tttttttttttt");

                                                        return (

                                                            <tr class="table-success"  >

                                                               <td style={{ border: "solid", borderColor: "white",textDecoration:"underline ",textDecorationThickness:"3px",cursor:"pointer" }} onClick={()=>localStorage.setItem('ferme',e._id)} > <Link to="/menuFerme">{e.code}   </Link> </td>
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
                                                                    <button onClick={() => dispatch(DeleteFerme(e._id))} type="button" class="btn cur-p btn-danger">Supprimer</button>
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

                                                <input name='code' style={{ color: 'black', fontSize: '15px' }} value={fermeUpdate ? fermeUpdate.code : ''} onChange={handlechange} type="text" class="form-control" placeholder='code' />

                                            </div>

                                            <div class="form-group" >

                                                <input name='fournisseur' style={{ color: 'black', fontSize: '15px' }} value={fermeUpdate ? fermeUpdate.fournisseur : ''} onChange={handlechange} type="text" class="form-control" placeholder='fournisseur' />

                                            </div>
                                            <div class="form-group">

                                                <input name='code_parent' style={{ color: 'black', fontSize: '15px' }} value={fermeUpdate ? fermeUpdate.code_parent : ''} onChange={handlechange} type="text" class="form-control" placeholder='code_parent' />

                                            </div>
                                            <div class="form-group" >

                                                <input name='frs_parent' style={{ color: 'black', fontSize: '15px' }} value={fermeUpdate ? fermeUpdate.frs_parent : ''} onChange={handlechange} type="text" class="form-control" placeholder='frs_parent' />

                                            </div>

                                            <div class="form-group" >

                                                <select name='achetteur' onChange={handlechange} class="form-control" style={{ color: 'black', fontSize: '15px' }} >

                                                    <option value={fermeUpdate ? fermeUpdate.achetteur.nom : ''}>{fermeUpdate ? fermeUpdate.achetteur.nom + " " + fermeUpdate.achetteur.prenom : ''}</option>
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
                                                    <option value={fermeUpdate ? fermeUpdate.region : ''}>{fermeUpdate ? fermeUpdate.region : ''}</option>
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
                                                    <option value={fermeUpdate ? fermeUpdate.zone : ''}>{fermeUpdate ? fermeUpdate.zone : ''}</option>
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
                                                    <option value={fermeUpdate ? fermeUpdate.gouvernerat : ''}>{fermeUpdate ? fermeUpdate.gouvernerat : ''}</option>
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
                                                    <option value={fermeUpdate ? fermeUpdate.sous_categorie : ''}>{fermeUpdate ? fermeUpdate.sous_categorie : ''}</option>
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
                                                    <option value={fermeUpdate ? fermeUpdate.classe : ''}>{fermeUpdate ? fermeUpdate.classe : ''}</option>
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
                                                    <option value={fermeUpdate ? fermeUpdate.nature : ''}>{fermeUpdate ? fermeUpdate.nature : ''}</option>
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

                                <AjouterFerme />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ListedesFerme
