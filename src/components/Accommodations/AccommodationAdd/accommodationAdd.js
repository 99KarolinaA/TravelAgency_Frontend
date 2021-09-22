import React from 'react';
import {useHistory} from 'react-router-dom';
const AccommodationAdd=(props)=> {

    const history=useHistory();
    const [formData, updateFormData] = React.useState({
        "name" : "",
        "address" : "",
        "type":"HOTEL",
        "pricePerPerson":0,
        "placeId":props.places.length!==0 ? props.places[0].id.id : ""
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
        const address = formData.address;
        const type = formData.type;
        const pricePerPerson = formData.pricePerPerson;
        const placeId = formData.placeId;
        props.onAddAccommodation(name, address, type, pricePerPerson, placeId);
        history.push("/places");
    }

    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name of accommodation</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder="Enter name of accommodation"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address of accommodation</label>
                        <input type="text"
                               className="form-control"
                               id="address"
                               name="address"
                               placeholder="Enter address of accommodation"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pricePerPerson">Price per person</label>
                        <input type="text"
                               className="form-control"
                               id="pricePerPerson"
                               name="pricePerPerson"
                               placeholder="Enter price per person"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Choose type</label>
                        <select name="type" className="form-control"  onChange={handleChange}>
                            <option value="HOTEL">Hotel</option>
                            <option value="MOTEL">Motel</option>
                            <option value="APARTMENT">Apartment</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Choose place</label>
                        <select name="placeId" className="form-control"  onChange={handleChange}>
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
export default AccommodationAdd;

