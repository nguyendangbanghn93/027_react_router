import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Banner from '../Banner/Banner';

class LienHe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            fDate:"thu2"
        }
    }
    submitForm = (e) => {
        e.preventDefault();
        this.setState({
            isRedirect: true
        })
    }
    isChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]:value})
    }
    isAnhChange = (e) => {
        this.setState({
            [e.target.name]:e.target.files[0].name
        })
    }
    
    getValue = () => {
        return this.state
    }
    render() {
        if (this.state.isRedirect) {
            console.log(this.getValue());
            return <Redirect to="/"></Redirect>
        }
        return (
            <>
                <Banner title="Liên hệ"></Banner>
                <div className="container ptb50">
                    <div className="fs15 ttu fwb ptb50 tac">Điền thông tin để liên hệ</div>
                    <form action={""} className="dbc df fdc jcsc aic">
                        <input onChange={(e)=>{this.isChange(e)}} type="text" className="w50 pa10 mma mtb10" placeholder="Tên" name="fName" />
                        <input onChange={(e)=>{this.isChange(e)}} type="text" className="w50 pa10 mma mtb10" placeholder="Địa chỉ" name="fAddress"/>
                        <input onChange={(e) => { this.isChange(e) }} type="text" className="w50 pa10 mma mtb10" placeholder="Số điện thoại" name="fPhone" />
                        <input onChange={(e) => { this.isAnhChange(e) }} type="file" className="w50 pa10 mma mtb10" placeholder="Số điện thoại" name="fAnh" />
                        <textarea onChange={(e) => { this.isChange(e) }} type="text" className="w50 pa10 mma mtb10" style={{ height: '150px' }} placeholder="Nhập nội dung" defaultValue={""} name="fMess" />
                        <select value={this.state.fDate} onChange={(e) => { this.isChange(e) }} className="w50 pa10 mma mtb10" placeholder="Date" name="fDate">
                            <option value="thu1">Thứ 1</option>
                            <option value="thu2">Thứ 2</option>
                            <option value="thu3">Thứ 3</option>
                        </select>
                        <div className="mtb10 tar w50" >
                            <button onClick={(e)=>{this.submitForm(e)}} type="submit" className="btn bgcgd pa15 cf plr25 bra5 bcf">Gửi</button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default LienHe;
