import React from 'react';
import {useHistory} from 'react-router-dom';

const OfferAdd = (props) => {

    const history = useHistory();

    const [formData, updateFormData] = React.useState({
        typeRoom: "ONE_BED",
        amount: 0,
        pricePerRoom: 0,
        offerId: props.offers.length!==0 ? props.offers[0].id.id : ""

    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const typeRoom = formData.typeRoom;
        const amount = formData.amount;
        const pricePerRoom = formData.pricePerRoom;
        const offerId = formData.offerId;

        props.addReservation(typeRoom, amount, pricePerRoom, offerId);
        history.push("/offers");
    }

    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                    <div className="form-group">
                        <label htmlFor="amount">Amount of rooms </label>
                        <input type="text"
                               className="form-control"
                               id="amount"
                               name="amount"
                               placeholder="Enter amount of rooms"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="priceOfferAmount">Price per room</label>
                        <input type="text"
                               className="form-control"
                               id="pricePerRoom"
                               name="pricePerRoom"
                               placeholder="Enter pricePerRoom"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Choose type of rooms</label>
                        <select name="typeRoom" className="form-control" onChange={handleChange}>
                            <option value="ONE_BED">ONE_BED</option>
                            <option value="TWO_BEDS">TWO_BEDS</option>
                            <option value="THREE_BEDS">THREE_BEDS</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Choose offer</label>
                        <select name="offerId" className="form-control" onChange={handleChange}>
                            {
                                props.offers.map((term) =>
                                    <option value={term.id.id}>{term.nameOffer}</option>
                                )}
                        </select>
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit
                    </button>
                    </div>
                </form>
            </div>
        </div>
    )

}
export default OfferAdd;

