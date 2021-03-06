import React from 'react';
import TotalOrderHistory from './TotalOrderHistory/TotalOrderHistory';
import TotalOrderStatus from './TotalOrderStatus/TotalOrderStatus';
import TodaysOrderStatus from './TodaysOrderStatus/TodaysOrderStatus';
import TodaysRecievablePayable from './TodaysRecievablePayable/TodaysRecievablePayable';
import { Route, Redirect } from 'react-router-dom';
import PieChart from '../Components/Charts/PieChart';

const DashBoard = () => {

    const data = [10, 20, 30];

    return ( 
        <div className="DashBoard">   
            <TotalOrderHistory/>
            <TotalOrderStatus/>
            <TodaysOrderStatus/>
            <TodaysRecievablePayable/>
        </div>
     );
}
 
export default DashBoard;