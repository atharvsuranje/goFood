import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {

    const [orderData, setorderData] = useState({})

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        await fetch("http://localhost:5000/api/myOrderData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json()
            await setorderData(response)
        })
    }

    useEffect(() => {
        fetchMyOrder()
    }, [])

    return (
        <div className='min-vh-100'>
            <div>
                <Navbar />
            </div>

            <div className='container mt-4'>
                <div className='row'>
                    {orderData !== {} ? Array(orderData).map(data => {
                        return (
                            data.orderData ?
                                data.orderData.order_data.slice(0).reverse().map((item, idx) => {
                                    return (
                                        <React.Fragment key={idx}>
                                            {item.map((arrayData, index) => {
                                                return (
                                                    <React.Fragment key={index}>
                                                        {arrayData.Order_date ? (
                                                            <div className='col-12'>
                                                                <div className='text-center text-white fs-4 fw-bold mt-5'>
                                                                    {data = arrayData.Order_date}
                                                                </div>
                                                                <hr className='text-white' />
                                                            </div>
                                                        ) : (
                                                            <div className='col-12 col-md-6 col-lg-3 d-flex justify-content-center'>
                                                                <div className="card mt-3 border-0 bg-secondary text-white" style={{ width: "18rem", maxHeight: "400px", borderRadius: "10px" }}>
                                                                    <div className="card-body d-flex flex-column justify-content-between h-100">
                                                                        <h5 className="card-title fw-bold text-center">{arrayData.name}</h5>
                                                                        <div className='mt-3'>
                                                                            <p className='mb-2'>Quantity: {arrayData.qty}</p>
                                                                            <p className='mb-2'>Size: {arrayData.size}</p>
                                                                            <p className='mb-2'>Date: {data}</p>
                                                                            <p className='mb-0'/><p>Price: ₹{arrayData.price}/-</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </React.Fragment>
                                                )
                                            })}
                                        </React.Fragment>
                                    )
                                }) : ""
                        )
                    }) : ""}
                </div>
            </div>

            <Footer />
        </div>
    )
}
