import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const DOGS_DETAILS = "DOGS_DETAILS";
export const SEARCH_DOG = "SEARCH_DOG";

export function getDogs(){
    return async(dispatch) =>{
        const {data} = await axios.get("http://localhost:3001/dogs")

        return dispatch({
            type: GET_DOGS,
            payload: data
        })
    }
};

export function dogsDetails(id){
    return async(dispatch) =>{
        const dogId = await axios.get(`http://localhost:3001/dogs/${id}`);

        return dispatch({
            type: DOGS_DETAILS,
            payload: dogId.data
        })

    }
};

export function searchDog(name){
    return async(dispatch) =>{
        try{
            const dogName = await axios.get(`http://localhost:3001/dogs?name=${name}`)

            return dispatch({
                type: SEARCH_DOG,
                payload: dogName.data
            })

        }catch(err){
            alert('No name found')
        }
    }
}
