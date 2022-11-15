
 
import React from 'react';
// import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getDogsById, getTemperaments } from "../redux/actions";
//import allReducers from "../redux";
//import  rootReducer from '../redux/reducer' 
import './Detail.css'




export default function Detail(){
    const dispatch = useDispatch();
    const doggydog = useSelector((state) => state.detail)
    console.log(doggydog)
    //const detail = useSelector((state) => state.detail)
    const {id} = useParams();
   console.log(id)
    const [loading, setLoading] = useState(false)
    
    
    
    
    useEffect(() => {
        dispatch(getTemperaments(id))
        dispatch(getDogsById(id))
    }, [dispatch, id]) 
   
    
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [dispatch, id])
    
    
     /* var info = async () => await axios.get('http://localhost:3001/dogs/' + id)
                .then(res => (res.data))
                .then(info => console.log(info)) 
 */
   
  
               
    
     
    if(loading){
        return (
            <div className="LoaderContainerId">
                <div className="LoadingId">Loading...</div>
                <div className="spinnerId"></div>
            </div>
        )
    }else{
          
        return (
            <div className='ContainerDetail' >
                <div className='cardDetail'>
                   <h1>  { doggydog.name } </h1>
                   <img className='imageDetail'  src={doggydog.image} alt="https://pbs.twimg.com/media/E6xbYveX0AckxOZ?format=jpg&name=900x900" />

                  <h4>weight: { doggydog.weight.length === 2 ? doggydog.weight[0] + " to " + doggydog.weight[1] : doggydog.weight[0]}  kg</h4>
                  <h4>height: { doggydog.height.length === 2 ? doggydog.height[0] + " to " + doggydog.height[1] : doggydog.height[0]} cm</h4>
                  <h3>temperaments: {doggydog.temperaments.map((el, index )=> index === el.length ? el : el + " | ")}</h3>
                  </div>
                  <Link to='/home' >
                  <button className='backButton'  >Back</button>
                  </Link>
             </div>
            
               )
               
         
            }

            
        }
         
        
        
        
        
        
        /* import { useParams } from "react-router-dom"
        import {useState, useEffect} from "react"
        import axios from "axios"
        //import "./DogDetail.css"
        import { useSelector } from "react-redux";
        
        function DogDetail() {
            const temperaments = useSelector((state) => state.temperaments);
            const [dogDetail, setDogDetail] = useState({name: "", temperament: "", height: "", life_span: "", weight: "", image: ""})
            let {id} = useParams()
        
            useEffect(() => {
                traerDetalles()
            }, [])
        
            const traerDetalles = () => {
                axios.get(`http://localhost:3001/dogs/${id}`) 
                    .then((res) => {
                        console.log(res)
                        setDogDetail({
                            name: res.data.name,
                            temperament: res.data.temperament,
                            height: res.data.height,
                            weight: res.data.weight,
                            life_span: res.data.life_span,
                            image: res.data.image
                        })
                    })
                    .catch((error) => {
                        console.log(error);
                    }); 
            } 
        
            return (
                <div className= "fondo-dog-detail">
                    <div className= "container-amarillo">
                        <div className= "container-img">
                            <img className= "img-perro" src= {dogDetail.image}></img>
                        </div>
                        <div className="descripcion-perro">
                            <p>{dogDetail.name}</p>
                            <div>
                                <p>Temperamento: {dogDetail.temperament}</p>
                                <p>Altura:{dogDetail.height}</p>
                                <p>Peso: {dogDetail.weight}</p>
                                <p>Años de vida: {dogDetail.life_span}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        
        export default DogDetail */




 /*        import { connect } from "react-redux";
import { getDogsById } from '../redux/actions'
import React, { useEffect } from 'react';
//import './detalles.css'
import { Link } from "react-router-dom";

const Detalles = (props) => {    
    useEffect(() => props.getDogsById(props.match.params.id), [props.match.params.id]) 
    return ( 
        <div className='detContainer'>
            <div>
              <img className='dogsDet' src='https://barks-and-recreation.com/wp-content/uploads/2018/04/Husky-Pups-Looking-Left-1000x753-min.png' width="540" height="360" alt="" />
            </div>
            <Link to='/home'>
            <button className='btnDet'>Back</button>
            </Link>
            {props.detail ?
            <div >
            <div className='detBox'>
                <img className='imgDet' src={props.detail.image} width="360" height="240" alt="" />
                <div className='textDet'>
                    <div className='textDetItem'><span>Name:</span>&nbsp;<span>{props.detail.name}</span></div>
                    <div className='textDetItem'><span>Temperament:</span>&nbsp;<span>{props.detail.temperament}</span></div>
                    <div className='textDetItem'><span>Weight:</span>&nbsp;<span>{props.detail.weight}&nbsp;lb</span></div>
                    <div className='textDetItem'><span>Height:</span>&nbsp;<span>{props.detail.height}&nbsp;inches</span></div>
                    <div className='textDetItem'><span>Life span:</span>&nbsp;<span>{props.detail.life_span}&nbsp;</span></div>
                </div>
            </div> 
            </div>
            : 
            <div classNamea='loadingDet'>
              <div><img src='https://www.petbarn.com.au/skin/frontend/enterprise/petbarn/images/dropdowns/dropdown_dog.gif' width="480" height="320" alt="" /></div>
              <div><span>Loading..</span></div>
            </div> 

            }
        </div>
        )
};

  function mapStateToProps(state) {
    return {
        detail:state.detalle
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        getDogsById: id => dispatch(getDogsById(id)),
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Detalles); */


 /*  import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";
import { getDogsById } from "../redux/actions";
//import s from '../styles/DogDetail.module.css';


export default function Detail (props){
    console.log(props)

const dispatch = useDispatch()


useEffect(() => {
    dispatch(getDogsById(props.match.params.id));
}, [dispatch])

const myDog = useSelector((state)=> state.detail)
console.log(myDog)

    
return (
    <div >
        {myDog?.length > 0 ? 
        <div >
            <h1 >{myDog[0].name}</h1>
            <div >
                <img  src={myDog[0].image ? myDog[0].image : "https://www.anipedia.net/imagenes/nombres-de-perros-800x375.jpg"} alt=""/>
            <div >
            <div > 
                <h2 >Tamaño: </h2>
                <p> {myDog[0].height_min}  -  </p>
                <p>{myDog[0].height_max}  Centimetros</p>
            </div>
            <div >
            <h2>Peso: </h2>
                <p> {myDog[0].weight_min}  -  </p>
                <p>{myDog[0].weight_max}  Kilogramos</p>
            </div>
            <div >
            <h2 >Tiempo de Vida: </h2>
            
                <p>{myDog[0].life_span}  Años</p>
            </div>
            
            <h2 >Temperamentos: </h2>
            <p>{!myDog[0].createInDb ? myDog[0].temperament : myDog[0].Temperaments.map(e=>e.name + " ")}</p>
        </div> </div>  </div>
            : <img src="https://media.giphy.com/media/2RCQ345oLZSVi/giphy.gif" alt="" /> }
    <Link to= '/home'><button >Volver</button></Link>
    </div>
)

} */