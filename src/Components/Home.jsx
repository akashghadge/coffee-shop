import React from 'react';
import Heading from './Heading';
import Order from "./Order"
import Stock from "./Stock"
/**
 * To move forward with the internship we will be requiring a short assignment to evaluate your HTML, CSS and Javascript skills. You have to create the attached screenshot using HTML CSS. Extra attention would be given if bootstrap and vueJs are used.

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
const Home = () => {
    return (
        <>
            <Heading text="Growpartern Coffee Shop"></Heading>
            <div className="containerShop">
                <Stock></Stock>
                <Order></Order>
            </div>
        </>
    );
}

export default Home;
