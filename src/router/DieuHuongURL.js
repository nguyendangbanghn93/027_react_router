import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TinTuc from '../components/TinTuc/TinTuc';
import TrangChu from '../components/TrangChu/TrangChu';
import TinChiTiet from '../components/TinChiTiet/TinChiTiet';
import LienHe from '../components/LienHe/LienHe';

class DieuHuongURL extends Component {
    render() {
        
        return (
            <>
              <Route exact path="/tin-tuc/:slug.:id.html" component={TinChiTiet}></Route>
              <Route exact  path="/tin-tuc" component={TinTuc}></Route>
              <Route exact  path="/tin-chi-tiet" component={TinChiTiet}></Route>
              <Route exact  path="/lien-he" component={LienHe}></Route>
              <Route exact  path="/" component={TrangChu}></Route>
            </>
        );
    }
}

export default DieuHuongURL;
