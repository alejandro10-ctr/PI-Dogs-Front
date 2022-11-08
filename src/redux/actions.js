import React from 'react';
import axios from 'axios'

export const GET_DOGS = 'GET_DOGS'
export const GET_DOGS_BY_NAME = 'GET_DOGS_BY_NAME'
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'
export const GET_DOGS_BY_ID = 'GET_DOGS_BY_ID'
export const POST_DOG = 'POST_DOG'
export const FILTER_BY_CREATION = 'FILTER_BY_CREATION'
export const ALPHABETICAL_SORT = 'ALPHABETICAL_SORT'
export const FILTER_BY_TEMPERAMENTS = 'FILTER_BY_TEMPERAMENTS' 
export const WEIGHT_SORT = 'WEIGHT_SORT'
//export const DELETE_CARD = 'DELETE_CARD'
//export const CLEAR_STATE = 'CLEAR_STATE'
 


export function getDogs(){
return async function(dispatch){
    try{
        const json = await axios.get('http://localhost:3001/dogs');
        return dispatch({
            type: GET_DOGS,
            payload: json.data,
            //allDogs: json.data
        });
    }catch(error){
        console.log(error)
    }
}
};

export function getDogsByName(name){
    return async function(dispatch){
        try{
           let response = await axios.get(`http://localhost:3001/dogs?name=${name}`)
           return dispatch({
            type: GET_DOGS_BY_NAME,
            payload: response.data
           });
        }catch(error){
            console.log(error)
        }
    }
};

export function getTemperaments(){
    return async function(dispatch){
        try{
            const temps = await axios.get('http://localhost:3001/temperament');
                   
            return dispatch({
                type: GET_TEMPERAMENTS,
                payload: temps.data,
                temperament: temps.data
            });
        }catch(error){
            console.log(error)
        }
    }
};


export function getDogsById(id){
    return async function(dispatch){
        console.log(dispatch)
        console.log(id)
        try{
            var info = await axios.get('http://localhost:3001/dogs/' + id)
            console.log(info)
              return dispatch({
                type: GET_DOGS_BY_ID,
                detail: info.data[0]
            }
            );
        }catch(error){
            console.log(error)
        }
    }
};

export function postDog(){
    return async function(dispatch){
        try{
           let dogPosted = await axios.post('http://localhost:3001/')
           return dispatch({
            type: POST_DOG,
            payload: dogPosted
           });
        }catch(error){
            console.log(error)
        }
    }
};

export function filterByCreation(payload){
  
        return ({
          type: FILTER_BY_CREATION,
          payload       
        });
  
}

export function filterByTemperaments(payload){
        return ({
            type: FILTER_BY_TEMPERAMENTS,
            payload
        });
}


export function alphabeticalSort(payload){
        return ({
            type: ALPHABETICAL_SORT,
            payload
        });
}

export function weightSort(payload){
    return ({
        type: WEIGHT_SORT,
        payload
    });
}

/* export function deleteCard (id){
    return ({
        type: DELETE_CARD,
        payload : !id
    });
} */

/* export function clearState(){
    return {
        type: CLEAR_STATE
    }
} */