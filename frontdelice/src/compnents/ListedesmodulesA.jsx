import React from 'react'
import Navprincipale from '../Layouts/Navprincipale'
function ListedesmodulesA() {
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
                      <div className="dash_head">
                        <h3><span><i className="fa fa-calendar" />Liste des Modules</span></h3>
                      </div>

                      <div className="task_list_main">
                        <ul className="task_list">
                          <li><a href="#">Module Analyse</a> <br /></li>
                          <li><a href="#">Module collecte</a><br /></li>
                          <li><a href="#">Module equipements</a><br /></li>
                          <li><a href="#">Module Hygiéne </a><br /></li>
                          <li><a href="#">Module Organisation</a><br /></li>
                          <li><a href="#">Module tracabilité</a><br /></li>
                          <li><a href="#">Module Qualité</a><br /></li>
                          <li><a href="#">Module Collecte</a><br /></li>

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

export default ListedesmodulesA


