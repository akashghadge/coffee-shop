import React, { useState } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
/**
 * 
 *  * To move forward with the internship we will be requiring a short assignment to evaluate your HTML, CSS and Javascript skills. You have to create the attached screenshot using HTML CSS. Extra attention would be given if bootstrap and vueJs are used.

Completion of only the UI part will be enough for submission implementing the below javascript will boost your chances for getting the internship.

The application has a stock by default having
water 1000 
milk 1000
tea 200
coffee 200
sugar 500

On click of the refill button, the stock should restore to default.

In select drink type, there will be four options
Strong Coffee
Light Coffee
Strong Tea
Light Tea

The drink requires the following quantity 
Strong Coffee ( Rs. 100 ): milk 10 coffee 8 water 4 tea 0
Light Coffee ( Rs. 75 ): milk 15 coffee 4 water 4 tea 0
Strong Tea ( Rs. 60 ): milk 10 coffee 0 water 8 tea 8
Light Tea ( Rs. 50 ): milk 15 coffee 0 water 
If sugar is added then sugar 5

The ingredients quantity should be subtracted from the stock available and price should be updated in the button.

If you have any issues you can mail at uzair@growpartner.in

Thanks,
Growpartner
Submission deadline: 15 August, 2021

 */
const Order = (props) => {
    let [teaType, setTeaType] = useState("0");
    let [numberOfcups, setNumberOfcups] = useState(1);
    let [isSugar, setSugar] = useState(false);
    let [totalMoney, setTotalMoney] = useState({
        drinkType: 0,
        sugar: 0,
        cups: 1
    });
    function selectBoxChange(e) {
        // tea type selection3
        let objDrinkType =
        {
            "0": 0,
            "1": 100,
            "2": 75,
            "3": 60,
            "4": 50
        };
        setTotalMoney((prev) => {
            return {
                ...prev,
                drinkType: objDrinkType[e.target.value]
            }
        })
        setTeaType(e.target.value);
    }
    function changeNumberOfCups(e) {
        // cup price
        setTotalMoney((prev) => {
            return {
                ...prev,
                cups: parseInt(e.target.value)
            }
        })
        setNumberOfcups(e.target.value);
    }
    function sugarChange(e) {
        // sugar price
        (e.target.checked) ?
            setTotalMoney((prev) => {
                return {
                    ...prev,
                    sugar: 5
                }
            }) :
            setTotalMoney((prev) => {
                return {
                    ...prev,
                    sugar: 0
                }
            })
        setSugar(e.target.checked);
    }
    function orderDrink(e) {
        props.onSubstarct(
            {
                cups: parseInt(numberOfcups),
                sugar: isSugar,
                typeOfTea: teaType
            }
        );
    }
    return (
        <div>
            <h2 className="headOrder">Welcome to coffee shop</h2>
            <div className="inputBox">
                <div className="selectBox">
                    <h4>select ordeer prefrence</h4>
                    <select className="form-select my-3" aria-label="Default select example" onChange={selectBoxChange} value={teaType}>
                        <option selected value="0">Select Drink Type</option>
                        <option value="1">Strong Coffee</option>
                        <option value="2">Light Coffee</option>
                        <option value="3">Strong Tea</option>
                        <option value="4">Light Tea</option>
                    </select>
                    <input type="number" placeholder="Enter no. of cups" className="form-control my-3" onChange={changeNumberOfCups} value={numberOfcups}></input>
                    <input type="checkbox" className="mx-3 my-3" onChange={sugarChange} checked={isSugar}></input>
                    <span className="spanSugar">with sugar</span>
                    <div className="buttonCustomDiv">
                        <button className="btn buttonCustom my-3" style={{ backgroundColor: '#502507', color: "white", width: '250px' }} onClick={orderDrink}>Pay Rs.  {totalMoney.cups * (totalMoney.drinkType)}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;
