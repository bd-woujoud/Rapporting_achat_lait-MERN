
import axios from "axios";

export function getAllAchetteur() {

    return axios.get("http://localhost:3000/achetteur/getAll" )
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}

export function delteAchetteur(id) {

    return axios.delete("http://localhost:3000/user/deleteUserbyid/"+id )
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function updateAchetteur(data) {

    return axios.put("http://localhost:3000/user/updatebyid/"+data.id,data )
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}

export function register (data) {

    return axios.post("http://localhost:3000/user/register",data,{ credentials: 'include'}
  )
        .then((res) => {
            return res
        })
        .catch((err) => {

            return err
        })
}

export function  search(data) {

    return axios.get(`http://localhost:3000/achetteur/search?keyword=${data.keyword}`)
        .then(res => {
            return res
        }
        )
        .catch(err => {
            return err
        }
        )
}