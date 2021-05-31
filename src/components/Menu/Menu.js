import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class Menu extends Component {
    render() {
        return (
            <div className="pf t0 l0 w1 dibc bgcgd cf z9">
                <NavLink exact={true} to="/" className="pa10 fwb fs12 plr15 btn bn" activeClassName="bgcrd">Trang chủ</NavLink>
                <NavLink to="/tin-tuc" className="pa10 fwb fs12 plr15 btn bn" activeClassName="bgcrd">Tin tức</NavLink>
                <NavLink to="/tin-chi-tiet" className="pa10 fwb fs12 plr15 btn bn" activeClassName="bgcrd">Tin chi tiết</NavLink>
                <NavLink to="/lien-he" className="pa10 fwb fs12 plr15 btn bn" activeClassName="bgcrd">Liên hệ</NavLink>
            </div>
        );
    }
}

export default Menu;
