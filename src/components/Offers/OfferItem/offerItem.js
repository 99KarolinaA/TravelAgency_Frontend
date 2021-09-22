import React from 'react';
import {Link} from "react-router-dom";

const offerItem = (props) => {
    return (
        <tr>
            <td scope={"col"}>{props.item.nameOffer}</td>
            <td scope={"col"}> {props.item.dateFrom}</td>
            <td scope={"col"}> {props.item.dateTo}</td>
            <td scope={"col"}> {props.item.numSeats}</td>
            <td scope={"col"}> {props.item.rooms.typeRoom}</td>
            <td scope={"col"}> {props.item.rooms.amountRoom}</td>
            <td scope={"col"}> {props.item.rooms.pricePerRoom.amount}</td>

            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => {
                       props.onDelete(props.item.id.id);
                   }}>
                    Delete
                </a>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.item.id.id)}
                      to={`/offers/edit/${props.item.id.id}`}>
                    Edit
                </Link>

            </td>
        </tr>
    )
}
export default offerItem;