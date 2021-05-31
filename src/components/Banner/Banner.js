import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="bgrn bgpc bgsc w1v pr" style={{ backgroundImage: 'url("https://thietbiketnoi.com/wp-content/uploads/2020/01/tong-hop-hinh-nen-background-vector-designer-dep-do-phan-giai-fhd-2k-4k-moi-nhat-2.jpg")', height: '50vh' }}>
                <div className="pa t50 l50 tt cf fwb fs2 ttu">{ this.props.title }</div>
            </div>
        );
    }
}

export default Banner;
