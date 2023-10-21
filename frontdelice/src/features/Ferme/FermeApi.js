
import axios from "axios";

export function getAllFerme() {

    return axios.get("http://localhost:3000/ferme/getAll" )
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}

export function delteFerme(id) {

    return axios.delete("http://localhost:3000/ferme/delete/"+id )
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function  searcha(data) {

    return axios.get(`http://localhost:3000/ferme/search?keyword=${data.keyword}`)
        .then(res => {
            return res
        }
        )
        .catch(err => {
            return err
        }
        )
}

export function create(data) {

    return axios.post("http://localhost:3000/ferme/create",data)
        .then((res) => {
            return res
        })
        .catch((err) => {

            return err
        })
}
export function updateferme(data) {

    return axios.put("http://localhost:3000/ferme/update/"+data.id,data )
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}