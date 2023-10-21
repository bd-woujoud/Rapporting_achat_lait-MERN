import React, { useContext, useState } from 'react'
import "../assets/login.css"
import { AuthContext } from '../context/AuthContext'
import AuthService from '../services/AuthService'

function Connexion() {

  const { setUser, setIsAuth, setRole } = useContext(AuthContext)
  const [values, setValues] = useState({})

  const onChangeHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })

    console.log(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.login(values).then(jsonData => {
      if (jsonData.message === 'user not found') {
        alert('verifiez votre email ou votre mot de passe')
      }
      else {
        console.log('user', jsonData)
        setUser(jsonData.user);
        setIsAuth(jsonData.isAuthenticated);
        setRole(jsonData.role)
        window.location.href = '/ListeA'




      }
    })
  }

  return (
    <div><section className="h-10 h-custom" >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3">
              <div className="card-body p-4 p-md-5">
                <h3 className="login mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Connexion</h3>
                <form className="px-md-2" onSubmit={onSubmit}>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example1q">Email</label>
                    <input name='email' onChange={onChangeHandler} type="text" id="form3Example1q" className="form-control" />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example1q">Mot de passe</label>
                    <input name='password' onChange={onChangeHandler} type="password" id="form3Example1q" className="form-control" />
                  </div>
                  <button type="submit" className="btn btn-bleu center btn-lg mb-1">Se connecter</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section></div>

  )
}

export default Connexion