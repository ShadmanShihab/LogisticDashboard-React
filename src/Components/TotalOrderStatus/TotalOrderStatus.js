import React, { useEffect, useState } from 'react';
import { BsFillBellFill, BsFillStopwatchFill, BsCheckAll } from "react-icons/bs";

const TotalOrderStatus = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8087/totalOrderStatus")
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

// Some the classes used here are from Total Order History

        <div className="TotalOrderStatus">
            <div className="row TotalOrderHistory">
                <div className="col-xl-6 col-md-6 md-4 TotalOrderCard" >


                    <div className="totalJob" style={{ padding: '0px' }}>
                        <div className="job-description">
                            <h5 className="total-receivable">Total Receivable</h5>

                            <h5 className="totalJob-value">{data.totalReceivable}</h5>
                        </div>
                        <div className="totalJob-icon total"> <BsFillBellFill /> </div>
                    </div>

                    <div className="completedJob" style={{ padding: '0px' }}>
                    <div className="job-description">
                        <h5 className="completed-title">Total Payable</h5>
                        <p className="completed-value">{data.totalPayable}</p>
                    </div>
                    <div className="completed-icon"> <BsCheckAll /> </div>
                </div>

                <div className="pendingJob" style={{ padding: '0px' }}>
                    <div className="job-description">
                        <h5 className="pending-title"> Total Earned</h5>
                        <p className="pending-value">{data.totalEarned}</p>
                    </div>
                    <div className="pending-icon"> <BsFillStopwatchFill /> </div>
                </div> 
                </div>

            </div>
        </div>
    );
}

export default TotalOrderStatus;