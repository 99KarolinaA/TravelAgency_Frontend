import React from 'react';
import {Link} from "react-router-dom";

const placeItem = (props)=>{
    return(
        <tr>
            <td scope={"col"}> {props.item.name}</td>
            <td scope={"col"}> {props.item.numRoomsAgency}</td>
            <td className={"text-right"}>
                <div className="row">
                    <div className="col-md-6">
                        <Link className={"btn btn-info"}
                              onClick={() => props.loadAccommodations(props.item.id.id)}
                              to={"/accommodations"}>
                            View all accommodations for this place
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <a title={"Delete"} className={"btn btn-danger"}
                           onClick={() => props.onDelete(props.item.id)}>
                            Delete
                        </a>
                    </div>
                </div>

            </td>
        </tr>
    )
}
export default placeItem;