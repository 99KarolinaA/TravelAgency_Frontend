import axios from '../custom-axios/axios'

const OfferService = {
    fetchOffers: () => {
        return axios.get("/offers");
    },
    fetchOffersWithoutTransportation: () => {
        return axios.get("/offers/without")
    },
    deleteOffer: (id) => { //when we select item, we pass the id
        return axios.delete(`/offers/delete/${id}`)
    },
    addOffer: (nameOffer, dateFrom, dateTo, numSeats, typeRoom, amount, priceRoom, placeId) => {
        return axios.post("/offers/add", {
            "nameOffer": nameOffer,
            "dateFrom": dateFrom,
            "dateTo": dateTo,
            "numSeats": numSeats,
            "typeRoom": typeRoom,
            "amount": amount,
            "priceRoom": priceRoom,
            "placeId": placeId
        });
    },
    editOffer: (id, nameOffer, dateFrom, dateTo, numSeats, typeRoom, amount, priceRoom, placeId) => {
        return axios.put(`/offers/edit/${id.id}`, {
            "nameOffer": nameOffer,
            "dateFrom": dateFrom,
            "dateTo": dateTo,
            "numSeats": numSeats,
            "typeRoom": typeRoom,
            "amount": amount,
            "priceRoom": priceRoom,
            "placeId": placeId
        });
    },
    getOffer: (id) => {
        return axios.get(`/offers/${id}`);
    },
    reserveOffer: (typeRoom, amount, pricePerRoom, offerId) => {
        return axios.post("/offers/reserve", {
            "typeRoom": typeRoom,
            "amount": amount,
            "pricePerRoom": pricePerRoom,
            "offerId": offerId
        })
    }

}
export default OfferService;