import './App.css';
import React, {Component} from "react"
import OfferService from "../../repository/offerRepository";
import Offers from "../Offers/OfferList/offers";
import Header from "../Header/header";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import OfferAdd from "../Offers/OfferAdd/offerAdd";
import OfferEdit from "../Offers/OfferEdit/offerEdit"
import PlaceAdd from "../Places/PlaceAdd/placeAdd";
import Places from "../Places/PlaceList/places"
import PlaceService from "../../repository/placeRepository";
import Accommodations from "../Accommodations/AccommodationList/accommodations";
import AccommodationAdd from "../Accommodations/AccommodationAdd/accommodationAdd";
import TransportationService from "../../repository/transportationRepository"
import TransportationAdd from "../Transportations/TransportationAdd/transportationAdd";
import ReservationAdd from "../Reservation/ReservationAdd";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offers: [],
            places: [],
            accommodations: [],
            transportations: [],
            selectedOffer: {},
            offersWithoutTransportation: []
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className="container">
                        <Route path={"/offers/add"} exact render={() =>
                            <OfferAdd onAddOffer={this.addOffer}
                                      places={this.state.places}/>}/>
                        <Route path={"/offers/edit/:id"} exact render={() =>
                            <OfferEdit
                                onEditOffer={this.editOffer}
                                offer={this.state.selectedOffer}
                                places={this.state.places}/>}/>
                        <Route path={"/offers"} //last only /offers
                               exact render={() =>
                            <Offers offers={this.state.offers}
                                    onDelete={this.deleteOffer}
                                    onEdit={this.getOffer}/>}/>

                        <Route path={"/places/add"} exact render={() =>
                            <PlaceAdd onAddPlace={this.addPlace}/>}/>
                        <Route path={"/places"}
                               exact render={() =>
                            <Places places={this.state.places}
                                    onDelete={this.deletePlace}
                                    loadAccommodations={this.loadAccommodations}/>}/>
                        <Route path={"/accommodations/addAccommodation"} exact render={() =>
                            <AccommodationAdd
                                places={this.state.places}
                                onAddAccommodation={this.addAccommodation}/>}/>
                        <Route path={"/accommodations"} exact render={() =>
                            <Accommodations
                                onDelete={this.deleteAccommodation}
                                accommodations={this.state.accommodations}/>}/>

                        <Route path={"/transportations/addTransportation"} exact render={() =>
                            <TransportationAdd
                                offers={this.state.offersWithoutTransportation}
                                onAddTransportation={this.addTransportation}
                            />}/>
                        <Route path={"/offers/addReservation"} exact render={() =>
                            <ReservationAdd
                                offers={this.state.offers}
                                addReservation={this.addReservation}
                            />}/>
                        <Redirect to={"/offers"}/>
                    </div>
                </main>
            </Router>
        )
    }

    loadOffers = () => {
        OfferService.fetchOffers()
            .then((data) => {
                this.setState({
                    offers: data.data
                })
            })
    }
    loadOffersWithoutTransportation = () => {
        OfferService.fetchOffersWithoutTransportation()
            .then((data) => {
                this.setState({
                    offersWithoutTransportation: data.data
                })
            })
    }
    loadPlaces = () => {
        debugger
        PlaceService.fetchPlaces()
            .then((data) => {
                console.log('test');
                this.setState({
                    places: data.data
                })
            })
    }
    loadAccommodations = (placeId) => {
        PlaceService.fetchAccommodations(placeId)
            .then((data) => {
                console.log('test')
                console.log(data);
                this.setState({
                    accommodations: data.data
                })
            })
    }
    deleteOffer = (id) => {
        OfferService.deleteOffer(id)
            .then(() => {
                this.loadOffers();
                this.loadOffersWithoutTransportation();
            });
    }
    addOffer = (nameOffer, dateFrom, dateTo, numSeats, typeRoom, amount, priceRoom, placeId) => {
        OfferService.addOffer(nameOffer, dateFrom, dateTo, numSeats, typeRoom, amount, priceRoom, placeId)
            .then(() => {
                this.loadOffers();
                this.loadOffersWithoutTransportation();
            }).catch(err => console.log(err));
    }
    addReservation = (typeRoom, amount, pricePerRoom, offerId) => {
        debugger
        OfferService.reserveOffer(typeRoom, amount, pricePerRoom, offerId)
            .then(() => {
                this.loadOffers();
                this.loadPlaces();
            }).catch(err => console.log(err));
    }
    editOffer = (id, nameOffer, dateFrom, dateTo, numSeats, typeRoom, amount, priceRoom, placeId) => {
        OfferService.editOffer(id, nameOffer, dateFrom, dateTo, numSeats, typeRoom, amount, priceRoom, placeId)
            .then(() => {
                this.loadOffers();
                this.loadOffersWithoutTransportation();
            })
    }
    getOffer = (id) => {
        OfferService.getOffer(id)
            .then((data) => {
                this.setState(
                    {
                        selectedOffer: data.data
                    }
                )
            })
    }
    deleteAccommodation = (id, placeId) => {
        PlaceService.deleteAccommodation(id)
            .then(() => {
                this.loadAccommodations(placeId);
            });
    }
    addAccommodation = (name, address, type, pricePerPerson, placeId) => {
        PlaceService.addAccommodation(name, address, type, pricePerPerson, placeId)
            .then(() => {
                console.log('TEST');
                // this.loadAccommodations(placeId);
            }).catch(err => console.log(err));
    }
    deletePlace = (id) => {
        PlaceService.deletePlace(id)
            .then(() => {
                this.loadPlaces();
            });
    }
    addPlace = (name, numRoomsAgency) => {
        PlaceService.addPlace(name, numRoomsAgency)
            .then(() => {
                this.loadPlaces();
            }).catch(err => console.log(err));
    }
    getPlace = (id) => {
        PlaceService.getPlace(id)
            .then((data) => {
                this.setState(
                    {
                        selectedPlace: data.data
                    }
                )
            })
    }
    addTransportation = (name, numSeatsAgency, fare, numVehicles, type, offerId) => {
        TransportationService.addTransportation(name, numSeatsAgency, fare, numVehicles, type, offerId)
            .then((data) => {
                this.loadOffersWithoutTransportation();
                console.log('TEST');
                this.setState({
                    addedTransportation: data.data
                })
            }).catch(err => console.log(err));
    }

    componentDidMount() {
        this.loadOffers();
        this.loadPlaces();
        this.loadOffersWithoutTransportation();
    }
}

export default App;