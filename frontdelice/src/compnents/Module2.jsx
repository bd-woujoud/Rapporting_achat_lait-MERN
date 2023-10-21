import React, { useEffect, useState } from 'react'
import Navprincipale from '../Layouts/Navprincipale'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { CreateNote, GetNoteValid, GetScoreModule, selectCreatenote, selectNoteValid, selectScore } from '../features/Note/noteSlice'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'


function Module2() {

    const [module, setModule] = useState(null)
    const [notes, setNotes] = useState([])
    let history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:3000/Module/getbyid/' + localStorage.getItem('nommodule'))//id de module cliké
            .then(res => {
                setModule(res.data.data)
            })
    }, [])



    const notevalid = useSelector(selectNoteValid)
    console.log(notevalid, "notevalid");
    const score = useSelector(selectScore)
    const ajout = useSelector(selectCreatenote)
    console.log(ajout);
    useEffect(() => {

        let data = {
            module: localStorage.getItem("nommodule"),
            achetteur: user._id,
            ferme: localStorage.getItem("ferme")


        }
        console.log(data, "dataaa");
        dispatch(GetNoteValid(data))


    },[])

   


 

    useEffect(() => {

        let notesArray = [];
        notevalid.forEach(element => {
            var tab = [];
            tab["observation"] = element.observation;
            tab["note"] = element.note;
            notesArray[element.indicateurs] = tab;
        })
        setNotes(notesArray);
    }, [])



    useEffect(() => {

        let data = {
            ferme: localStorage.getItem("ferme"),
            module: localStorage.getItem('nommodule'),
            achetteur: user._id,
        }

        dispatch(GetScoreModule(data))

    }, [ajout])

    const [note, setNote] = useState("")
    const [observation, setObservation] = useState("")
    const dispatch = useDispatch()
    const { user } = useContext(AuthContext)

    const HandleSave = () => {

        // e.preventDefault();

        let data = {
            note: note,
            observation: observation,
            ferme: localStorage.getItem("ferme"),
            module: localStorage.getItem('nommodule'),
            achetteur: user._id,
            indicateurs: localStorage.getItem('indicateur'),
        }

        dispatch(CreateNote(data))


    }



    return (
        <div>

            <Navprincipale />
            <div id="content">
                <div class='main'>
                    <div class="midde_cont">
                        <div class="container-fluid">
                            <div className='audit '>
                                <h1
                                    style={{ color: "#17a2b8 !important ", textAlign: "center", fontSize: "30px", fontWeight: "bold" }}>
                                    CCL Audit module <span>{module && module.nom}</span></h1>
                                <div className='row mt-5'>

                                    <div className='col-md-2'>
                                        <div class="right_button">

                                            <button type="button" class="btn btn-xs"
                                                style={{ backgroundColor: "#002060", width: "150px", color: 'white' }}>
                                                Date de visite
                                            </button><br></br>
                                            <spam>•11/10/2022</spam>
                                        </div>

                                        <br></br>
                                        <div class="right_button">

                                            <button type="button" class="btn  btn-xs"
                                                style={{ backgroundColor: '#143FA2', width: "150px", color: 'white' }}>
                                                Intervenant STIAL
                                            </button><br></br>
                                            <spam>• johayna belhssan</spam>
                                        </div>

                                        <br></br>
                                        <div class="right_button">

                                            <button type="button" class="btn  btn-xs"
                                                style={{ backgroundColor: "#4168CA", width: "150px", color: 'white' }}>
                                                catégorie Frc
                                            </button><br></br>
                                            <spam>•CCL</spam>
                                        </div>

                                        <br></br>
                                        <div class="right_button">

                                            <button type="button" class="btn  btn-xs"
                                                style={{ backgroundColor: "#95A3CC", width: "150px", color: 'white' }}>
                                                Code Frs
                                            </button><br></br>
                                            <spam>•685998gbghy</spam>
                                        </div>
                                    </div>
                                    <div className='col-md-10'>

                                        {/* table section */}

                                        <div className="white_shd full margin_bottom_30" style={{ width: "80%" }}>

                                            <div className="table-responsive-sm">
                                                <table className="table table-bordered"
                                                    style={{ fontWeight: "bold", marginBottom: "0" }}>
                                                    <thead>
                                                        <tr class="table-secondary"
                                                            style={{ fontSize: "18px", textAlign: "center" }}>
                                                            <th>Audit module <span>{module && module.nom}</span> </th>
                                                            <th>Note</th>
                                                            <th>observation</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        {
                                                            module && module.indicateurs.map((item, i) => {
                                                                return (

                                                                    <tr>
                                                                        <td>{item.nom}</td>

                                                                        <td>
                                                                            <input style={{ borderColor: "white" }} disabled={notes[item._id] ? true : false}
                                                                            value={notes[item._id] && notes[item._id].note} name="note" onChange={(e) => setNote(e.target.value)} />
                                                                        </td>
                                                                      
                                                                        <td><textarea style={{ borderColor: "white" }} name="observation" disabled={notes[item._id] ? true : false}
                                                                         value={notes[item._id] && notes[item._id].observation}    onChange={(e) => setObservation(e.target.value)} />
                                                                        </td>
                                                                        <td>
                                                                            <button type="button" class="btn cur-p btn-success  mr-4" onClick={HandleSave} disabled={notes[item._id] ? true : false} >
                                                                                <span onClick={() => { localStorage.setItem('indicateur', item._id) }}>Enregistrer</span>
                                                                            </button>
                                                                        </td>



                                                                    </tr>
                                                                )
                                                            })
                                                        }

                                                   

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <button type="button" onClick={history.goBack} class="btn cur-p btn-secondary ml-5">retour</button>
                                        <div class="row column1 social_media_section">

                                            <div class="full socile_icons fb margin_bottom_30 mt-5 ml-5" style={{ width: "auto" }}>
                                                <div class="social_icon">
                                                    <i >Score Audit</i>
                                                </div>
                                                <div class="social_cont">
                                                    <ul>
                                                        <li >{
                                                            
                                                            score ?
                                                           score :0
                                                            
                                                       } </li>

                                                    </ul>
                                                </div>
                                            </div>

                                            <Link to="/bilan">  <button type="button" class="btn cur-p btn-secondary ml-5">bilan</button>
                                         </Link> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >


    )
}

export default Module2