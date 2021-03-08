import React from 'react';
import TotalOrderHistory from './TotalOrderHistory/TotalOrderHistory';
import TotalOrderStatus from './TotalOrderStatus/TotalOrderStatus';
import TodaysOrderStatus from './TodaysOrderStatus/TodaysOrderStatus';
import TodaysRecievablePayable from './TodaysRecievablePayable/TodaysRecievablePayable';
import { Route, Redirect } from 'react-router-dom';

const DashBoard = () => {


    return ( 
        <div className="DashBoard">   
            <TotalOrderHistory/>
            <TodaysRecievablePayable/>
            <TotalOrderStatus/>
            <TodaysOrderStatus/>
            
        </div>
     );
}
 
export default DashBoard;