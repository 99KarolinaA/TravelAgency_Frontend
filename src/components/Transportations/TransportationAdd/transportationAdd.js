import React from 'react';
import {Link, useHistory} from 'react-router-dom';
const TransportationAdd=(props)=> {

    const history=useHistory();
    // console.log(props.places)
    const [formData, updateFormData] = React.useState({
        "name" : "",
        "numSeatsAgency" : 0,
        "fare":0,
        "numVehicles":0,
        "type":"BUS",
        "offerId":props.offers.length!==0 ? props.offers[0].id.id : ""
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const numSeatsAgency = formData.numSeatsAgency;
        const fare = formData.fare;
        const numVehicles = formData.numVehicles;
        const type = formData.type;
        const offerId = formData.offerId;
        props.onAddTransportation(name, numSeatsAgency, fare, numVehicles, type, offerId);
        history.push("/offers");
    }

    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name of transportation</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder="Enter name of transportation"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numSeatsAgency">Number of seats</label>
                        <input type="text"
                               className="form-control"
                               id="numSeatsAgency"
                               name="numSeatsAgency"
                               placeholder="Enter number of seats"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fare">Fare</label>
                        <input type="text"
                               className="form-control"
                               id="fare"
                               name="fare"
                               placeholder="Enter fare"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numVehicles">Number of vehicles</label>
                        <input type="text"
                               className="form-control"
                               id="numVehicles"
                               name="numVehicles"
                               placeholder="Enter number of vehicles"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Choose type</label>
                        <select name="type" className="form-control"  onChange={handleChange}>
                            <option value="BUS">Bus</option>
                            <option value="AIRPLANE">Airplane</option>
                            <option value="CAR">Car</option>
                            <option value="TRAIN">Train</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Choose offer</label>
                        <select name="offerId" className="form-control"  onChange={handleChange}>
                            {
                                props.offers.map((term) =>
                                    <option value={term.id.id}>{term.nameOffer}</option>
                                )}
                        </select>
                    </div>

                    <button id="submit" type="submit" className="btn btn-primary"
                            onClick={()=> props.loadOffersWithoutTransportation}
                    >Submit</button>
                </form>
            </div>
        </div>

    )

}
export default TransportationAdd;

