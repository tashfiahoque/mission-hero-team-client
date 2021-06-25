import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useForm } from 'react-hook-form';
import './StoreData.css';

const StoreData = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const flightInfo = {
            class: data.class,
            destination: data.destination,
            price: data.price,
            date: data.date,
            time: data.time,
            seats: data.seats,
            seatNo: {
                no: "1A", no2: "1B", no3: "1C", no4: "1D", no5: "2A", no6: "2B", no7: "2C", no8: "2D", no9: "3A",
                no10: "3B", no11: "3C", no12: "3D", no13: "4A", no14: "4B", no15: "4C", no16: "4D"
            }
        };
        console.log(flightInfo);


        fetch('http://localhost:5000/addBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(flightInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <section className="add-service-data">
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-7 mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label htmlFor="class">Class</label>
                                    <input id="class" {...register('class', { required: true })} placeholder="Enter class" className="form-control" />
                                    {errors.class && errors.class.type === "required" && <span>This is required</span>}
                                </div>
                                <div className="col-12 mb-3">
                                    <label htmlFor="date">Date</label>
                                    <input id="date" {...register('date', { required: true })} type="date" placeholder="Enter Date" className="form-control" />
                                    {errors.date && errors.date.type === "required" && <span>This is required</span>}
                                </div>
                                <div className="col-12 mb-3">
                                    <label htmlFor="destination">Service destination</label>
                                    <input id="destination" {...register('destination', { required: true })} placeholder="Enter destination" className="form-control" />
                                    {errors.destination && errors.destination.type === "required" && <span>This is required</span>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label htmlFor="price">Price</label>
                                    <input id="price" {...register('price', { required: true })} placeholder="Enter Service Price" className="form-control" />
                                    {errors.price && errors.price.type === "required" && <span>This is required</span>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label htmlFor="time">Time</label>
                                    <input id="time" {...register('time', { required: true })} placeholder="Enter Time" className="form-control" />
                                    {errors.time && errors.time.type === "required" && <span>This is required</span>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label htmlFor="seats">Seats</label>
                                    <input id="seats" {...register('seats', { required: true })} placeholder="Enter Total Seats" className="form-control" />
                                    {errors.seats && errors.seats.type === "required" && <span>This is required</span>}
                                </div>
                            </div>
                            <div className="col-12 d-flex justify-content-center">
                                <input type="submit" className="btn all-btn" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StoreData;