import React from 'react';
import OfferItem from '../OfferItem/offerItem'
import {Link} from "react-router-dom";
import ReactPaginate from 'react-paginate'

class Offers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 2
        }
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.offers.length / this.state.size);
        const offers = this.getOffersPage(offset, nextPageOffset);

        return (
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"row"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name offer</th>
                                <th scope={"col"}>Date From</th>
                                <th scope={"col"}>Date To</th>
                                <th scope={"col"}>Number of seats</th>
                                <th scope={"col"}>Type of room</th>
                                <th scope={"col"}>Amount of rooms</th>
                                <th scope={"col"}>Price per room</th>
                            </tr>
                            </thead>
                            <tbody> {offers}
                            </tbody>
                        </table>
                    </div>

                    <div className="row">
                        <div className="col-sm-4 col-md-4">
                            <Link
                                className={"btn btn-block btn-dark"}
                                to={"/offers/add"}>Add new offer</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 col-md-4 mt-3">
                            <Link
                                className={"btn btn-block btn-info"}
                                to={"/transportations/addTransportation"}
                                onClick={() => this.props.loadOffersWithoutTransportation}>
                                Add new transportation
                            </Link>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-4 col-md-4 mt-3">
                            <Link
                                className={"btn btn-block btn-dark"}
                                to={"/offers/addReservation"}>
                                Make reservation of an Offer
                            </Link>
                        </div>
                    </div>
                </div>
                <ReactPaginate
                    previousLabel={"← Previous"}
                    nextLabel={"Next →"}
                    pageCount={pageCount}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination m-4 justify-content-center"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                />
            </div>
        );
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected
        })

    }
    getOffersPage = (offset, nextPageOffset) => {
        return this.props.offers.map((item) => {
            return (
                <OfferItem item={item} onDelete={this.props.onDelete}
                           onEdit={this.props.onEdit}
                           loadOffersWithoutTransportation={this.loadOffersWithoutTransportation}/>
            )
        }).filter((product, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }
}

export default Offers;