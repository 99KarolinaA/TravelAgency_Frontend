import React from 'react';
import PlaceItem from '../PlaceItem/placeItem'
import {Link} from "react-router-dom";
import ReactPaginate from 'react-paginate'

class Places extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            page:0,
            size:2
        }
    }

    render(){
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.places.length / this.state.size);
        const places = this.getPlacesPage(offset, nextPageOffset);

        return(
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"row"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name of place</th>
                                <th scope={"col"}>Number of rooms</th>
                            </tr>
                            </thead>
                            <tbody> {places}
                            </tbody>
                        </table>
                    </div>

                    <div className="row">
                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 p-0">
                                <Link
                                    className={"btn btn-block btn-dark"}
                                    to={"/places/add"}>Add new place</Link>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 p-0">
                        <Link
                        className={"btn btn-block btn-info"}
                        to={"/accommodations/addAccommodation"}>Add new accommodation</Link>
                            </div>
                        </div>
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
    handlePageClick=(data)=> {
        let selected = data.selected;
        this.setState({
            page:selected
        })

    }
    getPlacesPage=(offset, nextPageOffset)=> {
        return this.props.places.map((item) => {
            return (
                <PlaceItem item={item} onDelete={this.props.onDelete}
                           loadAccommodations={this.props.loadAccommodations}
                             />
            )
        }).filter((place, index)=> {
            return index>=offset && index< nextPageOffset;
        })
    }
}

export default Places;