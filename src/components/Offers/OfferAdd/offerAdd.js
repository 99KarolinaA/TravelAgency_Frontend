import React from 'react';
import {useHistory} from 'react-router-dom';

const OfferAdd = (props) => {

    const history = useHistory();

    const [formData, updateFormData] = React.useState({
        nameOffer: "",
        dateFrom: "",
        dateTo: "",
        numSeats: 0,
        typeRoom: "ONE_BED",
        amount: 0,
        priceRoom: 0,
        placeId: props.places.length !== 0 ? props.places[0].id.id : ""
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const nameOffer = formData.nameOffer;
        const dateFrom = formData.dateFrom;
        const dateTo = formData.dateTo;
        const numSeats = formData.numSeats;
        const typeRoom = formData.typeRoom;
        const amount = formData.amount;
        const priceRoom = formData.priceRoom;
        const placeId = formData.placeId;
        props.onAddOffer(nameOffer, dateFrom, dateTo, numSeats,
            typeRoom, amount, priceRoom, placeId);
        history.push("/offers");
    }

    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="nameOffer">Name offer</label>
                        <input type="text"
                               className="form-control"
                               id="nameOffer"
                               name="nameOffer"
                               required
                               placeholder="Enter name offer"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateFrom">Date From</label>
                        <input type="date"
                               className="form-control"
                               id="dateFrom"
                               name="dateFrom"
                               required
                               placeholder="Enter date from"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateTo">Date To</label>
                        <input type="date"
                               className="form-control"
                               id="dateTo"
                               name="dateTo"
                               placeholder="Enter date to"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numSeats">Number of Seats</label>
                        <input type="text"
                               className="form-control"
                               id="numSeats"
                               name="numSeats"
                               placeholder="Enter number of seats"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount">Number of rooms</label>
                        <input type="text"
                               className="form-control"
                               id="amount"
                               name="amount"
                               placeholder="Enter number of rooms"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="priceRoom">Price per room</label>
                        <input type="text"
                               className="form-control"
                               id="priceRoom"
                               name="priceRoom"
                               placeholder="Enter price per room"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Choose type</label>
                        <select name="type" className="form-control" onChange={handleChange}>
                            <option value="ONE_BED">ONE_BED</option>
                            <option value="TWO_BEDS">TWO_BEDS</option>
                            <option value="THREE_BEDS">THREE_BEDS</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Choose place</label>
                        <select name="placeId" className="form-control" onChange={handleChange}>
                            {
                                props.places.map((term) =>
                                    <option value={term.id.id}>{term.name}</option>
                                )}
                        </select>
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary"
                        // onClick={()=> props.loadOffersWithoutTransportation}
                    >Submit
                    </button>
                </form>
            </div>
        </div>

    )

}
export default OfferAdd;

