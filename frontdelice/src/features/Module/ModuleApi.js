
import axios from "axios";

export function getAllModule() {

    return axios.get("http://localhost:3000/Module/getAll")
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function getModulebyId(id) {

    return axios.get("http://localhost:3000/Module/getbyid/"+id)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function getModulebyferme() {

    return axios.get("http://localhost:3000/Module/getbyFerme")
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function getModulebycentre() {

    return axios.get("http://localhost:3000/Module/getbyCentre")
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function createModule(data) {

    return axios.post("http://localhost:3000/Module/create", data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function deleteModule(id) {

    return axios.delete("http://localhost:3000/Module/delete/"+id)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function updateModule(data) {

    return axios.put("http://localhost:3000/Module/update/"+data.id,data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
