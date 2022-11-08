import React from "react"
import { GET_DOGS, GET_DOGS_BY_NAME, GET_TEMPERAMENTS, GET_DOGS_BY_ID, POST_DOG, FILTER_BY_CREATION, FILTER_BY_TEMPERAMENTS, ALPHABETICAL_SORT, WEIGHT_SORT, /* DELETE_CARD,  CLEAR_STATE */} from "./actions"

var initialState = {
    detail: [], 
    dogs: [],
    allDogs: [],
    temperament: [],
}



export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_DOGS: 
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            };
        case GET_DOGS_BY_NAME:
            return{
                ...state,
                dogs: action.payload
            };
        case GET_TEMPERAMENTS:
            return{
                ...state,
                temperament: action.payload
            };
        case GET_DOGS_BY_ID:
            return{
                ...state,
                detail: action.paylaod 
            };
        case POST_DOG:
            return{
                ...state,
                dogs: action.payload
            };
        case FILTER_BY_CREATION:
            const allDogs = state.allDogs
            const filterCreation = action.payload === 'created' ?
            allDogs.filter(e => e.id.toString().includes('-')) :
            allDogs.filter(e => !e.id.toString().includes('-'))             
            return{
                ...state,
                dogs: action.payload === 'All' ? allDogs : filterCreation
            };
        
        case FILTER_BY_TEMPERAMENTS:
            const allD = state.allDogs
            let filteredDogs = [];
            if(action.payload === 'All'){
                filteredDogs = allD
            }else{
                for(let i = 0; i < allD.length; i++){
                    let match = allD[i].temperaments.find((t) => t === action.payload);
                    if(match){
                        filteredDogs.push(allD[i]);
                    }
                }
            } 
                return{
                ...state,
                dogs: filteredDogs
            };  
            
        case ALPHABETICAL_SORT:
            const infoDogs = [...state.dogs]
            const alphaSorted = action.payload === 'asc' ?
            infoDogs.sort(function (a, b) {
                if(a.name > b.name) return 1
                if(a.name < b.name) return -1
                return 0;
            }) :
            infoDogs.sort(function (a, b) {
                if(a.name < b.name) return 1
                if(a.name > b.name) return -1
                return 0;
            });  
            return{
                ...state,
                dogs : alphaSorted
            };
        
        case WEIGHT_SORT:
            const doggs = [...state.dogs]
            const weightSorted = action.payload === 'fromMin' ?
            doggs.sort((a,b) => parseInt(a.weight.slice(0, 3)) - parseInt(b.weight.slice(0, 3))) 
            :
            doggs.sort((a,b) => parseInt(b.weight.slice(0, 3)) - parseInt(a.weight.slice(0, 3)))
              
            
            return{
                ...state,
                dogs : weightSorted
            };

        /* case DELETE_CARD:
            const dogggs = state.allDogs
            const dbD = dogggs.filter(el => el.id.includes('-'))
            const dFiltered = dbD ? dbD.filter(el => el.id !== dbD.id) : dogggs
             return {
                ...state,
                dogs: dFiltered
            }   */  
     /*    case CLEAR_STATE: {
            return {
              
                state: {}
            } 
            } */
        

        default:
            return state


    }}