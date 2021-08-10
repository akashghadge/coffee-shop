import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Order = () => {
    return (
        <div>
            <h2 className="headOrder">Welcome to coffee shop</h2>
            <div className="inputBox">
                <div className="selectBox">
                    <h4>select ordeer prefrence</h4>
                    <select className="form-select my-3" aria-label="Default select example">
                        <option selected>Select Drink Type</option>
                        <option value="1">Strong Coffee</option>
                        <option value="2">Light Coffee</option>
                        <option value="3">Strong Tea</option>
                        <option value="4">Light Tea</option>
                    </select>
                    <input type="number" placeholder="Enter no. of cups" className="form-control my-3"></input>
                    <input type="checkbox" className="mx-3 my-3"></input>
                    <span className="spanSugar">with sugar</span>
                    <div className="buttonCustomDiv">
                        <button className="btn buttonCustom my-3" style={{ backgroundColor: '#502507', color: "white", width: '250px' }}>Refill Stock</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;
