import React from 'react'
import Navprincipale from '../Layouts/Navprincipale'
import { EditOutlined } from '@ant-design/icons';
function ModifierAcheteur() {
  return (
      <div >

<Navprincipale/>

<div id="content">
                <div class='main'>
                    <div class="midde_cont">
                        <div class="container-fluid">
                            <div class="row column1 ">
                                <div class="col-md-2"></div>
                                <div class="col-md-8">
                                    <div class="white_shd full ">
                                        <div class="full price_table padding_infor_info" style={{backgroundColor:"#e7eef1"}}>
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class=" dis_flex center_text">
                                                        <div class="profile_img " style={{marginLeft:"100px"}}>   <img   class="rounded-circle "  style={{ height: "150px",width:"150px"}} src="images/layout_img/user_img.jpg" />
                                                       
                                                            <div class="contact_inner mt-2 ml-5">
                                                                <h3 >Ahmed ben ali </h3>
                                                                <ul class="list-unstyled">
                                                                    <li><i class="fa fa-envelope-o"></i> :email@gmail.com</li>
                                                                    <li><i class="fa fa-phone"></i> :6865465469</li>
                                                                </ul>
                                                            </div></div>
                                                        <div class="profile_contant">

                                                            <div className="col-md-12 ">

                                                                <div className="d-flex justify-content-between align-items-center  text-right">
                                                                    <h4 className="mb-5">Profile Settings</h4>
                                                                    <EditOutlined style={{ fontSize: '30px', color: "blue" }} />
                                                                </div>

                                                                <div className="col-md-12"><label >Nom</label><input  type="text" className="form-control" name="nom"  style={{ fontSize: '13px', color: "black", fontWeight: 'bold' }} /></div>
                                                                <div className="col-md-12"><label >Prenom</label><input  type="text" className="form-control" name="prenom"  style={{ fontSize: '13px', color: "black", fontWeight: 'bold' }} /></div>
                                                                <div className="col-md-12"><label >Téléphone</label><input  name="NumContact" type="text" className="form-control"  style={{ fontSize: '13px', color: "black", fontWeight: 'bold' }} /></div>
                                                                <div className="col-md-12"><label >Email</label><input  type="text" className="form-control" name="email"  style={{ fontSize: '13px', color: "black", fontWeight: 'bold' }} /></div>
                                                                 <div className="col-md-12">< label >Password</label><input type="text" className="form-control" name="password"  style={{ fontSize: '13px', color: "black", fontWeight: 'bold' }} /></div>
                                                                <div className="mt-5 mb-5 text-right"><button  className="btn btn-primary profile-button" type="button">save</button></div>

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
                    </div>
                </div>

            </div>
</div>
                         





  )
}

export default ModifierAcheteur


