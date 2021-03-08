import { React, useState, useEffect } from 'react';
import PieChart from '../Charts/PieChart/PieChart';
import { BsFillBellFill, BsFillStopwatchFill, BsCheckAll } from "react-icons/bs";

const TotalOrderHistory = (props) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8087//totalOrderHistory")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setData(result);
                },
                (error) => {
                    setIsLoaded(false);
                    setError(error);
                }
            )
    }, [])

    return (
        <div className="container">
            <div className="row TotalOrderHistory">

                <div className="col-xl-6 col-md-6 md-4 TotalOrderCard" >


                    <div className="totalJob" style={{ padding: '0px' }}>
                        <div className="job-description">
                            <h5 className="totalJob-title">Total Job</h5>
                            
                            <h5 className="totalJob-value">{data.totalJob}</h5>
                        </div>
                        <div className="totalJob-icon"> <BsFillBellFill /> </div>
                    </div>

                    <div className="completedJob" style={{ padding: '0px' }}>
                        <div className="job-description">
                            <h5 className="completed-title">Completed Job</h5>
                            <p className="completed-value">{data.completedJob}</p>
                        </div>
                        <div className="completed-icon"> <BsCheckAll /> </div>
                    </div>

                    <div className="pendingJob" style={{ padding: '0px' }}>
                        <div className="job-description">
                            <h5 className="pending-title"> Pending Job</h5>
                            <p className="pending-value">{data.pendingJob}</p>
                        </div>
                        <div className="pending-icon"> <BsFillStopwatchFill /> </div>
                    </div>
                </div>



                <div className="col-xl-3 col-md-12 md-4 pieChart-container" style={{ height: '200px' }, { width: '200px' }}>
                    <PieChart />
                </div>
            </div>
        </div>
    );
}

export default TotalOrderHistory;