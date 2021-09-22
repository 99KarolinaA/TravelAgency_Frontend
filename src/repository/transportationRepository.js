import axiosPlace from '../custom-axios/axiosTransportation'

const TransportationService = {
    addTransportation: (name, numSeatsAgency, fare, numVehicles, type,offerId) => {
        debugger
        return axiosPlace.post("/transportations/add", {
            "name" : name,
            "numSeatsAgency" : numSeatsAgency,
            "fare":fare,
            "numVehicles":numVehicles,
            "type":type,
            "offerId":offerId
        });
    },

}
export default TransportationService;