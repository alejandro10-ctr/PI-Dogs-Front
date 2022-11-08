import React from "react";
import {useState} from 'react';
import {useDispatch , useSelector } from 'react-redux';
import{ getDogsByName, getDogs } from '../redux/actions';
import { Link, useHistory } from "react-router-dom";
import './SearchBar.css'
import axios from "axios";

export default function SearchBar(){
    const dispatch = useDispatch();
    const history = useHistory();
    const dog = useSelector(state => state.dogs)
    const [name, setName] = useState("")
    const [search, setSearch] = useState(false)
    
    const [order, setOrder] = useState('') 
    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage, setDogsPerPage] = useState(8)
    const indexOfLast = currentPage * dogsPerPage
    const indexOfFirst = indexOfLast - dogsPerPage
    const [currentDogs, setCurrentDogs] = useState([])

    
    
     
    
    function handleInputChange(e){
      e.preventDefault()
      setName(e.target.value)
      
    } 
    
    function handleSubmit(e){
      e.preventDefault();

   /*  axios.get(`http://localhost:3001/dogs?name=${name}`)
       .then((res) => {
        if(res.data.lenght === 0) alert("Breed not found")
        else{
          return dispatch({
            type: 'GET_DOG_BY_NAME',
            payload: res.data,
          })
        }
       })
       .catch((error) => {
        console.log(error);
        alert("Breed not found")
       }) */



     if(name){
      setCurrentPage(1)
      dispatch(getDogsByName(name))
      setName("")
      setSearch(true)
    }else{
      setSearch(true)
      return alert("Pick a breed")
    }
 





    /* setCurrentPage(1)
    setSearch(true)
    dispatch(getDogsByName(name))
    setName(name) */
   /*  if(name){
      setSearch(true) 
      
    }else{
      setName("")
      setCurrentPage(1)
      setOrder(`Order ${e.target.value}`)
      setSearch(false)
      return alert("Search breed that exist")
    }
    if(document.getElementById("input1").value===""){
      setSearch(false)
     
      return alert("Please choose an existent breed")
    } */
    
  }
  
  function handleBack(e){
    e.preventDefault();
    setCurrentPage(1)
    document.getElementById("input1").value="";
    history.push('/home')
    dispatch(getDogs())
   
  }


    return(
       <div>
        <input 
        name = 'input'
        type = 'text'
        placeholder = 'Search By Breed...'
        onChange = {(e) => handleInputChange(e)}
        id='input1' 
        />
        <button className="btn" onClick={(e) => handleSubmit(e)} type = 'submit' >Search</button>
       
      
        <Link to='/home'>
        <button  onClick={(e) => handleBack(e)}  className="BackBtnSearch">Back</button>
        </Link>
     
       </div>
    )
}