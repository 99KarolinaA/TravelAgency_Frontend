import React from 'react';
import {Link} from "react-router-dom";

const accommodationItem = (props)=>{
    return(
        <tr>
            <td scope={"col"}> {props.item.name}</td>
            <td scope={"col"}> {props.item.address}</td>
            <td scope={"col"}> {props.item.type}</td>
            <td scope={"col"}> {props.item.pricePerPerson.amount}</td>
            <td scope={"col"}> {props.item.place.name}</td>
            <td className={"text-right"}>
                <Link className={"btn btn-danger"}
                      onClick={() => {
                          props.onDelete(props.item.id, props.item.place.id.id)
                      }}
                      to={"/accommodations"}>
                    Delete
                </Link>

            </td>
        </tr>
    )
}
export default accommodationItem;