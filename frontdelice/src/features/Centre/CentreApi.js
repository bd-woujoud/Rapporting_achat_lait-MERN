
import axios from "axios";

export function getAllCentre() {

    return axios.get("http://localhost:3000/centre/getAll" )
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function delteCentre(id) {

    return axios.delete("http://localhost:3000/centre/delete/"+id )
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function  searchc(data) {

    return axios.get(`http://localhost:3000/centre/search?keyword=${data.keyword}`)
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

    return axios.post("http://localhost:3000/centre/create",data)
        .then((res) => {
            return res
        })
        .catch((err) => {

            return err
        })
}
export function updatecentre(data) {

    return axios.put("http://localhost:3000/centre/update/"+data.id,data )
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}

