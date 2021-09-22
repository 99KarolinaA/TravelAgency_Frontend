import React from 'react';
import {useHistory} from 'react-router-dom';

const OfferEdit = (props) => {

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
        const nameOffer = formData.nameOffer !== "" ? formData.nameOffer : props.offer.nameOffer;
        const dateFrom = formData.dateFrom !== "" ? formData.dateFrom : props.offer.dateFrom;
        const dateTo = formData.dateTo !== "" ? formData.dateTo : props.offer.dateTo;
        const numSeats = formData.numSeats !== 0 ? formData.numSeats : props.offer.numSeats;
        const typeRoom = formData.typeRoom !== "" ? formData.typeRoom : props.offer.typeRoom;
        const amount = formData.amount !== 0 ? formData.amount : props.offer.rooms.amountRoom;
        const priceRoom = formData.priceRoom !== 0 ? formData.priceRoom : props.offer.rooms.pricePerRoom.amount;
        const placeId = formData.placeId !== "" ? formData.placeId : props.offer.placeId;
        props.onEditOffer(props.offer.id, nameOffer, dateFrom, dateTo, numSeats, typeRoom, amount, priceRoom,
            placeId);
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
                               placeholder={props.offer.nameOffer}
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
                               placeholder={props.offer.dateFrom}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateTo">Date To</label>
                        <input type="date"
                               className="form-control"
                               id="dateTo"
                               name="dateTo"
                               placeholder={props.offer.dateTo}
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
                               placeholder={props.offer.numSeats}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount">Number of rooms</label>
                        <input type="text"
                               className="form-control"
                               id="amount"
                               name="amount"
                               placeholder={props.offer.rooms != null ? props.offer.rooms.amountRoom : ""}

                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="priceRoom">Price per room</label>
                        <input type="text"
                               className="form-control"
                               id="priceRoom"
                               name="priceRoom"
                               placeholder={props.offer.rooms != null ? props.offer.rooms.pricePerRoom.amount : ""}

                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Choose type</label>
                        <select name="typeRoom" className="form-control" onChange={handleChange}>
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
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default OfferEdit;