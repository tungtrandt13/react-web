import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="thumbnail">
                        <img alt="iphone 6" src="https://www.didongviet.vn/pub/media/catalog/product//i/p/iphone-6-16gb-lock-like-new-90-didongviet.jpg" />
                        <div className="caption">

                            <h3>Iphone 6 Plus</h3>
                            <p>
                                16.000.000 VNĐ
                        </p>
                        </div>
                    <button type="button" className="btn btn-default">Mua hàng</button>
                    </div>
                </div>

            </div>

        );
    }
}

export default Product;
