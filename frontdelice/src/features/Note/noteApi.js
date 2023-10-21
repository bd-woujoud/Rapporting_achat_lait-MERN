
import axios from "axios";

export function getAllnote() {

    return axios.get("http://localhost:3000/note/getAll" )
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function createnote(data) {

    return axios.post("http://localhost:3000/note/create" ,data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}

export function deltenote(id) {

    return axios.delete("http://localhost:3000/note/delete/"+id )
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}

export function updatenote(data) {

    return axios.put("http://localhost:3000/note/update/"+data.id,data )
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function score(data) {
   
    return axios.post("http://localhost:3000/note/getNoteByAchetteurFerme",data )
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function getNoteValid(data) {
   
    return axios.post("http://localhost:3000/note/getNoteValid",data )
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function getNoteFermeAchetteur(data) {
   
    return axios.post("http://localhost:3000/note/getNotebyFermeAchetteur",data )
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
