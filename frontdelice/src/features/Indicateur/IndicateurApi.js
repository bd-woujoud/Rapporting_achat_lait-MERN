
import axios from "axios";

export function getAllIndicateur() {

    return axios.get("http://localhost:3000/Indicateur/getAll" )
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function createIndicateur(data) {

    return axios.post("http://localhost:3000/Indicateur/create" ,data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}

export function delteIndicateur(id) {

    return axios.delete("http://localhost:3000/Indicateur/delete/"+id )
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}

export function updateindicateur(data) {

    return axios.put("http://localhost:3000/Indicateur/update/"+data.id,data )
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}

export function createindicateur(data) {

    return axios.post("http://localhost:3000/Indicateur/create" ,data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}