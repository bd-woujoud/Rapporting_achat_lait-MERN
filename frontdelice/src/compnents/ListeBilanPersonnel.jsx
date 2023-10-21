import React from 'react'
import Navprincipale from '../Layouts/Navprincipale'
function ListeBilanPersonnel() {
   return (
      <div >

         <Navprincipale />

         <div class="col-md-6">

            <div class="table_section padding_infor_info">
               <div class="table-responsive-sm">

                  <h1 style={{ fontSize: "35px" }}>Mon Bilan</h1>
                  <table class="table" style={{
                     marginTop: "40px"
                  }}>
                     <thead class="thead-dark">
                        <tr>
                           <th>Numero du Bilan</th>
                           <th>Date de création </th>


                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>1</td>
                           <td>Doe</td>
                        </tr>
                        <tr>
                           <td>2</td>
                           <td>Moe</td>
                        </tr>
                        <tr>
                           <td>July</td>
                           <td>Dooley</td>
                        </tr>
                     </tbody>
                  </table>

               </div>
            </div>

         </div>
      </div>
   )
}
export default ListeBilanPersonnel