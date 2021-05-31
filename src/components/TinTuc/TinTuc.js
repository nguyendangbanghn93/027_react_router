import React, { Component } from 'react';
import Tin from './Tin/Tin';
import Banner from '../Banner/Banner';
import Data from '../Data/Data';
class TinTuc extends Component {
    render() {
        return (
            <>
                <Banner title="Tin tức"></Banner>
                <div className="container ptb50">
                    <div className="df jcsc fww">
                        {Data.map((d, i) => (
                            <div className=" col-xs-4 pa10" key={i}>
                                <Tin key={i}
                                    tinId={d.id}
                                    img={d.thumbnail}
                                    title={d.title}
                                    description={d.description}></Tin>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default TinTuc;
