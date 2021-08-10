import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Stock = () => {
    return (
        <div className="stockMain">
            <h4 className="stockHeadText">Stock Available</h4>
            <div className="stockItems grid">
                <div className="row stockItem">
                    <div className="col-md-4">water</div>
                    <div className="col-md-4 ml-auto">1000</div>
                </div>
                <div className="row stockItem">
                    <div className="col-md-4">Milk</div>
                    <div className="col-md-4 ml-auto">1000</div>
                </div>
                <div className="row stockItem">
                    <div className="col-md-4">Tea</div>
                    <div className="col-md-4 ml-auto">200</div>
                </div>
                <div className="row stockItem">
                    <div className="col-md-4">Coffee</div>
                    <div className="col-md-4 ml-auto">200</div>
                </div>
                <div className="row stockItem">
                    <div className="col-md-4">Sugar</div>
                    <div className="col-md-4 ml-auto">500</div>
                </div>
            </div>
            <div className="buttonCustomDiv">
                <button className="btn buttonCustom my-3" style={{ backgroundColor: '#502507', color: "white" }}>Refill Stock</button>
            </div>
        </div>
    );
}

export default Stock;
