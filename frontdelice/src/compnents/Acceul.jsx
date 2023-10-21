
import React from 'react'
import Navprincipale from '../Layouts/Navprincipale'
function Acceul() {
  return (
      <div >

<Navprincipale/>


<div className="midde_cont">
  <div className="container-fluid">
    <div className="row column_title">
      <div className="col-md-12">
        <div className="page_title">
          <h2>Chart</h2>
        </div>
      </div>
    </div>
    {/* row */}
    <div className="row column1">
      <div className="col-lg-6">
        <div className="white_shd full margin_bottom_30">
          <div className="full graph_head">
            <div className="heading1 margin_0">
              <h2>Line Chart</h2>
            </div>
          </div>
          <div className="map_section padding_infor_info">
            <canvas id="line_chart" />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="white_shd full margin_bottom_30">
          <div className="full graph_head">
            <div className="heading1 margin_0">
              <h2>Line Chart</h2>
            </div>
          </div>
          <div className="map_section padding_infor_info">
            <canvas id="bar_chart" />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="white_shd full margin_bottom_30">
          <div className="full graph_head">
            <div className="heading1 margin_0">
              <h2>Radar Chart</h2>
            </div>
          </div>
          <div className="map_section padding_infor_info">
            <canvas id="radar_chart" />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="white_shd full margin_bottom_30">
          <div className="full graph_head">
            <div className="heading1 margin_0">
              <h2>Pie Chart</h2>
            </div>
          </div>
          <div className="map_section padding_infor_info">
            <canvas id="pie_chart" />
          </div>
        </div>
      </div>
    </div>
    {/* end row */}
  </div>
  {/* footer */}
  <div className="container-fluid">
    <div className="footer">
      <p>Copyright © 2018 Designed by html.design. All rights reserved.</p>
    </div>
  </div>
</div>

</div>
  )
}
export default Acceul

