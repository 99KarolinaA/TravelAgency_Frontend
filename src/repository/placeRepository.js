import axiosPlace from '../custom-axios/axiosPlace'

const PlaceService = {
    fetchPlaces: () => {
        debugger
        return axiosPlace.get("/places");
    },
    deletePlace: (id) => {
        return axiosPlace.post(`/places/delete/${id.id}`)
    },
    addPlace: (name, numRoomsAgency) => {
        return axiosPlace.post("/places/add", {
            "name" : name,
            "numRoomsAgency" : numRoomsAgency,
        });
    },
    getPlace: (id) => {
        return axiosPlace.get(`/places/${id}`);
    },

    fetchAccommodations: (placeId) => {
        return axiosPlace.get(`/accommodations/${placeId}`);
    },
    deleteAccommodation: (id) => {
        return axiosPlace.delete(`/accommodations/delete/${id.id}`)
    },

    addAccommodation: (name, address, type, pricePerPerson, placeId) => {
        return axiosPlace.post("/accommodations/add", {
            "name" : name,
            "address" : address,
            "type":type,
            "pricePerPerson":pricePerPerson,
            "placeId":placeId
        });
    }
}
export default PlaceService;