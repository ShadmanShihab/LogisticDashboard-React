import { React, useState, useEffect } from 'react';
import {
    Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, CardImg, CardImgOverlay
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import PieChart from '../Charts/PieChart';
import { Button } from 'react-bootstrap';

const TodaysRecievablePayable = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8087/todaysReceivablePayable")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setData(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    console.log("Data: ", data)

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="TodaysReceivablePayable container">
                <h3 style={{color: 'green'}}>Todays Order</h3>
                <div className="row" style={{ margin: '0px' }, { padding: '0px' }}>
                    <div className="col-xl-3 col-md-6 md-4" style={{ margin: '0px' }}>
                        <div className="card shadow h-100 py=2">
                            <div className="card-body Payable-Card">
                                <div className="row no-gutters align-items-center">
                                    <div class="col mr2">
                                        <div className="text-xs font-weight-bold text-uppercase Payable-Title"> Rider Payable </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800 Payable-Body">{data.riderPayable}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-xl-3 col-md-6 md-4" style={{ margin: '0px' }}>
                        <div className="card shadow h-100">
                            <div className="card-body Receivable-Card">
                                <div className="row no-gutters align-items-center">
                                    <div class="col mr2">
                                        <div className="text-xs font-weight-bold  text-uppercase Receivable-Title"> Rider Receivable </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800 Receivable-Body">{data.riderReceivable}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-xl-3 col-md-6 md-4" style={{ margin: '0px' }}>
                        <div className="card shadow h-100 py=2 ">
                            <div className="card-body Payable-Card">
                                <div className="row no-gutters align-items-center">
                                    <div class="col mr2">
                                        <div className="text-xs font-weight-bold text-uppercase Payable-Title"> Merchant Payable </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800 Payable-Body">{data.merchantPayable}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-xl-3 col-md-6 md-4" style={{ margin: '0px' }}>
                        <div className="card shadow h-100 py=2">
                            <div className="card-body Receivable-Card">
                                <div className="row no-gutters align-items-center">
                                    <div class="col mr2">
                                        <div className="text-xs font-weight-bold text-uppercase Receivable-Title"> Merchant Receivable </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800 Receivable-Body">{data.merchantReceivable}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col-xl-4 col-md-6 md-4" style={{ margin: '0px' }}>
                        <div className="card shadow h-100 py=2">
                            <div className="card-body Payable-Card">
                                <div className="row no-gutters align-items-center">
                                    <div class="col mr2">
                                        <div className="text-xs font-weight-bold text-uppercase Payable-Title"> Total Payable </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800 Payable-Body">{data.totalPayable}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-xl-4 col-md-6 md-4" style={{ margin: '0px' }}>
                        <div className="card shadow h-100 py=2">
                            <div className="card-body Receivable-Card">
                                <div className="row no-gutters align-items-center">
                                    <div class="col mr2">
                                        <div className="text-xs font-weight-bold text-uppercase Receivable-Title"> Total Receivable </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800 Receivable-Body">{data.totalReceivable}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6 md-4" style={{ margin: '0px' }}>
                        <div className="card shadow h-100 py=2">
                            <PieChart />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodaysRecievablePayable;