import React, { useEffect } from 'react'
import Navprincipale from '../Layouts/Navprincipale'
import {GetModuleByCentre, selectAllModule } from '../features/Module/ModuleSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ModulesCCl() { 
    
    const allmodules = useSelector(selectAllModule)
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(GetModuleByCentre())
    }, [])
    

  return (


    <div>    
         <Navprincipale />
         <div id="content">
        <div className="main">
          <div className="midde_cont">
            <div className="container-fluid">
              <div className="row column4 graph">
                <div className="col-md-6">
                  <div className="dash_blog">
                    <div className="dash_blog_inner">
                      <div className="dash_head ">
                        <h3><span><i className="fa fa-calendar" />Liste des Modules Centre</span>
                      
                        </h3>

                      </div>

                      {/*
                  <get module /> */}
                      <div className="task_list_main">
                        <ul className="task_list mt-5">
                          {
                            allmodules.map((e, i) => {
                              
                              return (
                                <div className='row'> 
                                 <div className='col-md-6'>
                                  
                                    <Link to="/moduleindicateur"> <li style={{cursor:"pointer"}} onClick={() => { localStorage.setItem('nommodule', e._id) }}>
                                      {e.nom}
                                        </li> </Link></div>

                               </div>
                              )

                            })}

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ModulesCCl