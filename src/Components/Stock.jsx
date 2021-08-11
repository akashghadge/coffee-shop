import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Stock = (props) => {
    return (
        <div className="stockMain">
            <h4 className="stockHeadText">Stock Available</h4>
            <div className="stockItems grid">
                {
                    Object.keys(props.stocksSupply).map((val, i) => {
                        return (
                            <div className="row stockItem">
                                <div className="col-md-4">{val}</div>
                                <div className="col-md-4 ml-auto">{props.stocksSupply[val]}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="buttonCustomDiv">
                <button className="btn buttonCustom my-3" style={{ backgroundColor: '#502507', color: "white" }} onClick={props.childRefill}>Refill Stock</button>
            </div>
        </div>
    );
}

export default Stock;
