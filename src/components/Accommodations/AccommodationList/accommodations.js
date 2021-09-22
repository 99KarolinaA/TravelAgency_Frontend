import React from 'react';
import AccommodationItem from '../AcccommodationItem/accommodationItem'
import ReactPaginate from 'react-paginate'

class Accommodations extends React.Component {
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
        // const size=this.props.accommodations.length!==0 ? this.props.accommodations.length : 0;
        const pageCount = Math.ceil(this.props.accommodations.length / this.state.size);
        const accommodations = this.getAccommodationsPage(offset, nextPageOffset);

        return (
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"row"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name of accommodation</th>
                                <th scope={"col"}>Address of accommodation</th>
                                <th scope={"col"}>Type of accommodation</th>
                                <th scope={"col"}>Price per person of accommodation</th>
                                <th scope={"col"}>Place of accommodation</th>
                            </tr>
                            </thead>
                            <tbody> {accommodations}
                            </tbody>
                        </table>
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
    getAccommodationsPage = (offset, nextPageOffset) => {
        console.log(this.props.accommodations);
        return this.props.accommodations.map((item) => {
            return (
                <AccommodationItem item={item} onDelete={this.props.onDelete}
                />
            )
        }).filter((accommodation, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }
}

export default Accommodations;