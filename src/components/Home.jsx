import React from "react";
import { useState, useEffect } from'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDogs, getDogsByName, getTemperaments, getDogsById, postDog, filterByCreation, filterByTemperaments, alphabeticalSort, weightSort, deleteCard } from "../redux/actions";
import { Link } from 'react-router-dom'
import Card from './Card'
import Paginado from "./Paginado";
import SearchBar from './SearchBar'
import Navbar from "./Navbar";
//import axios from  'axios'
import './Home.css'


let prevId = 1    

export default function Home(){
    
    const dispatch = useDispatch()
    const allDogs = useSelector((state) => state.dogs)
   // console.log(allDogs)
    
    const allTemperaments = useSelector((state) => state.temperament)
    
    const details = useSelector((state) => state.detail)
   //console.log(details)
    
  
    
    
const [ loading, setLoading] = useState(false)

const [order, setOrder] = useState('')
const [currentPage, setCurrentPage] = useState(1)
const [dogsPerPage, setDogsPerPage] = useState(8)
const indexOfLast = currentPage * dogsPerPage
const indexOfFirst = indexOfLast - dogsPerPage
const [currentDogs, setCurrentDogs] = useState([])

//const maximo = allDogs.lenght /dogsPerPage






const pagination = (pageNumber) => {
    setCurrentPage(pageNumber)
    setCurrentDogs(allDogs?.slice(indexOfFirst, indexOfLast))
}


useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
    setLoading(false)
    },2000)
dispatch(getTemperaments())    
dispatch(getDogs())
},[dispatch])

useEffect(() => {
    if(allDogs){
        setCurrentDogs(allDogs?.slice(indexOfFirst, indexOfLast))
    }
},[allDogs])




function handleFilterChange(e){
    e.preventDefault();
    dispatch(filterByCreation(e.target.value))
    setCurrentPage(1)
    setOrder(`Order ${e.target.value}`)
};

function handleFilterTemp(e){
    e.preventDefault();
    dispatch(filterByTemperaments(e.target.value))
    setCurrentPage(1)
    setOrder(`Order${e.target.value}`)
}



function handleSort(e){
    e.preventDefault();
    dispatch(alphabeticalSort(e.target.value))
    setCurrentPage(1);
    setOrder(`Order ${e.target.value}`)
};


function handleWeightSort(e){
    e.preventDefault();
    dispatch(weightSort(e.target.value))
    setCurrentPage(1);
    setOrder(`Order ${e.target.value}`)
}


 /* function prevHandler(){

  const prevPage = currentPage - 1;
  if(prevPage < 1) return;
  setDogsPerParge(allDogs.splice(indexOfFirst, 8))
  setCurrentPage(prevPage)

} */
/*
function nextHandler(pageNumber){
    const nextPage = pageNumber + 1;
    if(indexOfFirst === indexOfLast) return;
    
    setCurrentPage(nextPage)
    setCurrentDogs(allDogs?.slice(indexOfFirst, indexOfLast))
}
*/
 
/* 
const  temps = async()=> await fetch('http://localhost:3001/temperament').then(
            resp =>  resp.data).catch(error => console.log(error))
             */
        


 




if(loading){
    return(
        <div className="LoaderContainer">
        <div className="Loading">Loading...</div>
        <div className="spinner"></div>
        </div>
    )
} else
return (
    <div className="body">
        <div>
        <Navbar/>
        
        </div>
        
        <div className="sortsYfilter">
            <h3 className="FiltersTitle">Filters:</h3>

        <div className="Filters">
        <div>
            <select defaultValue="By Creation" name="By Creation" onChange={e => handleFilterChange(e)}>
                <option value='By Creation'  disabled>By Creation</option>
                <option value='All' >All</option>
                <option value='api'>Old breed</option>
                <option value='created'>New breed</option>
            </select>
        </div> 
        <div>
            <select defaultValue='By Temperaments' name="temperaments" onChange={e => handleFilterTemp(e)} >
               <option value='By Temperaments'  disabled>By Temperaments</option>
                <option value = 'All' >All</option>
                    { 
                      allTemperaments?.map(el =>{ 
                       return(
                            <option value={el.name} key={el.id}> {el.name} </option>
                       )}
                      )
                    }


                
            </select>
        </div>
        </div>
            <h3 className="SortsTitle">Sorts:</h3>
        <div className="Sorts">
        <div>
            <select defaultValue='Alphabetical Sort' name="alphabetical" onChange={e => handleSort(e)}>
                <option value='Alphabetical Sort' disabled>Alphabetical Sort</option>
                <option value='asc'  >Ascendent</option>
                <option value='desc' >Descendent</option>
            </select>
        </div>
        <div>
            <select defaultValue='Weight Sort' name="weight" onChange={e => handleWeightSort(e)}>
                <option value='Weight Sort' disabled>Weight Sort</option>
                <option value='fromMin'  >from Min to Max</option>
                <option value='fromMax' >from Max to Min</option>
            </select>
        </div>
        </div>
        </div>
        <div className="SearchBar">
            <SearchBar/>
        </div>
        <div className="toForm">
            <Link to='/form'>
                <button className="btnToForm">Create your dog</button>
            </Link>
        </div>         
        <div className="cardss">
            {currentDogs && currentDogs.map(e => {
                return(
                    <div  key={prevId++} >
                        <Link to={`/${e.id}`} >
                            <Card
                            image = {e.image ? e.image : e.img}
                            name = {e.name}
                            weight_min = {e.weight[0]}
                            weight_max = {e.weight[1]}
                            temperaments = {e.temperaments}
                            key = {e.id}
                            />
                        </Link>
                    </div>
                )
            })}
        </div>
          
         {/*  <button onClick={prevHandler} > Prev </button> */}
            {
                <Paginado
                dogsPerPage = {dogsPerPage}
                allDogs = {allDogs?.length}
                paginado = {pagination}
            />}
          {/* <button onClick={nextHandler} > Next </button>   */}
        
    </div>
)

};