import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { useForm } from 'react-hook-form';


const SelectFlight = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [searchData, setSearchData] = useState([]);
    const [searchResultByDate, setSearchResultByDate] = useState("");
    const [searchResultByDestination, setSearchResultByDestination] = useState("");

    const onSubmit = data => {
        data.destination = data.from + " to " + data.to;
        setSearchData(data);
    }

    return (
        <div>
            <Navbar />
            <h1 className="m-4">Book your flight</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">

                                <div className="col-12 mb-3">
                                    <label htmlFor="date">Date</label>
                                    <input id="date" {...register('date', { required: true })} type="date" placeholder="Enter Date" className="form-control" />
                                    {errors.date && errors.date.type === "required" && <span>This is required</span>}
                                </div>
                                <div className="col-12 mb-3">
                                    <label htmlFor="from">From</label>
                                    <select id="from" {...register("from")}>
                                        <option value="Dhaka">Dhaka</option>
                                    </select>
                                </div>
                                <div className="col-12 mb-3">
                                    <label htmlFor="to">To</label>
                                    <select id="to" {...register("to")}>
                                        <option value="Chittagong">Chittagong</option>
                                        <option value="Cox'sBazar">Cox'sBazar</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 d-flex justify-content-center">
                                <input type="submit" className="btn all-btn" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectFlight;