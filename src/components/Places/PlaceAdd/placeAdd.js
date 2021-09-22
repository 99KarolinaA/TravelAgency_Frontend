import React from 'react';

import {useHistory} from 'react-router-dom';
const PlaceAdd=(props)=> {

    const history=useHistory();

    const [formData, updateFormData] = React.useState({
        name:"",
        numRoomsAgency:0
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
        const numRoomsAgency = formData.numRoomsAgency;

        props.onAddPlace(name, numRoomsAgency);
        history.push("/places");
    }

    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name of place</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder="Enter name of place"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numRoomsAgency">Number of rooms</label>
                        <input type="text"
                               className="form-control"
                               id="numRoomsAgency"
                               name="numRoomsAgency"
                               placeholder="Enter number of rooms"
                               required
                               onChange={handleChange}
                        />
                    </div>

                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    )

}
export default PlaceAdd;

