//A bunch of API call to the server 


const AuthService = {
    
    login: function (userInfo) {

        return fetch("http://localhost:3000/user/login",

            {
                method: 'POST',
                body: JSON.stringify(userInfo),
                headers: {
                    'Content-Type': 'application/json'
                },

                credentials: 'include'

            }).then((res,errors) => {
 
                if (res.status === 404){
                    return errors
             } else{ 

                   if (res.status !== 401)
                   return res.json().then(jsonData => jsonData)

                    else
                    return { isAuthenticated: false, user: { email: "", role: "" } , message:'errors connect'}
            }

        })},

    register: function (userInfo) {
        return fetch("http://localhost:3000/user/register",
            {
                method: 'POST',
                body: JSON.stringify(userInfo),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })
            .then(res => res.json())
            .then(jsonData => jsonData)
    },


    logout: function () {

        return fetch("http://localhost:3000/user/logout", { credentials: 'include' })
            .then(res => res.json())
            .then(jsonData => jsonData)
    },

    isAuthenticated: function () {

        return fetch("http://localhost:3000/user/authenticated", { credentials: 'include' })
            .then(res => {

                if (res.status !== 401)
                    return res.json().then(jsonData => jsonData)
                else
                    return { isAuthenticated: false, user: { email: "" , nom :"" , prenom:"" , matricule:"", num_tel:"", _id:""   } }

            })
    },

}

export default AuthService 
