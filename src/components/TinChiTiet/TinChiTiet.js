import React, { Component } from 'react';
import Banner from '../Banner/Banner';
import Data from '../Data/Data';
import Tin from '../TinTuc/Tin/Tin';
class TinChiTiet extends Component {
    render() {
        let dataNews;
        const id = this.props.match.params.id;
        Data.map(function (d) {
            if (id ===d.id) {
                dataNews = d;
            }
            return true;
        });
        return (
            <>
                <Banner title="Tin Chi Tiết"></Banner>
                <div className="container ptb50">
                    <div className="fs12 fwb mb10">{dataNews.title}</div>
                    <div className="w50 maa">
                        <div className="bgrn bgpc bgsc pb169 mb10" style={{ backgroundImage: 'url("' + dataNews.thumbnail + '")' }}>
                        </div>
                    </div>
                    <div>{dataNews.description}</div>
                </div>
                <div className="container">
                    <div className="df jcsc fww">
                        {Data.map((d, i) => {
                            if (d.id !== id) {
                                return (<div key={i} className=" col-xs-4 pa10">
                                    <Tin key={i}
                                        tinId={d.id}
                                        img={d.thumbnail}
                                        title={d.title}
                                        description={d.description}></Tin>
                                </div>)
                            }
                            return true;
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default TinChiTiet;
