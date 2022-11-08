import React from "react";
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { postDog, getTemperaments } from "../redux/actions";
import './Form.css'



function validate(input){
    const errors = {};
    if(input.image_URL !== (/^(ftp|http|https):\/\/[^ "]+$/.test())) errors.image_URL= 'We need a valid URL to search your picture'
    if(!input.name) errors.name = 'Please name your dog'
    if(!input.temperaments.length === 0) errors.temperaments = 'Please give him a temperament'
    if(!input.weight_max) errors.weight_max = 'Please give him a maximum weight'
    if(input.weight_max <= 0) errors.weight_max = 'Weight nust be bigger than 0'
    if(!input.weight_min) errors.weight_min = 'Please give him a minimum weight'
    if(input.weight_min <= 0) errors.weight_min = 'Weight must be bigger than 0'
    if(!input.height_max) errors.height_max = 'Please give him a maximum height'
    if(input.height_max <= 0) errors.height_max = 'Height must be bigger than 0'
    if(!input.height_min) errors.height_min = 'Please give him a minimum height'
    if(input.height_min <= 0) errors.height_min = 'Height must be bigger than 0'
    if(!input.life_span) errors.life_span = 'Please estimate his life span'
   return errors
}



export default function Form(){

    const dispatch = useDispatch();
    const temper = useSelector((state) => state.temperament);
    const history = useHistory(); 
    const [errors, setErrors] = useState({})
  

    const [select, setSelect] = useState([])

    const [input, setInput] = useState({
        image_URL:"",
        name:"",
        temperaments:[],
        life_span: "",
        weight_max: "",
        weight_min: "",
        height_max: "",
        height_min: ""

    })

    useEffect(() => {
        dispatch(getTemperaments())
    },[dispatch])



    function handleSubmit(e){
     e.preventDefault();

     if(Object.values(errors).length > 1){
        alert('Please complete the information required')
     }else if(
        input.name === '' ||
        input.temperaments === '' ||
        input.height_max === '' ||
        input.height_min === '' ||
        input.weight_max === '' ||
        input.weight_min === '' ||
        input.life_span === '' 
     ){
        alert('Please complete the form correctly')
     }else{

     dispatch(postDog(input))
     alert('New breed has been created')
     setInput({
         image_URL:"", 
        name:"",
        temperaments:[],
        life_span: "",
        weight_max: "",
        weight_min: "",
        height_max: "",
        height_min: ""
     })
     history.push('/home')
    }
};

    function handleChange(e){
      e.preventDefault();
      console.log(e.target.name)
      setInput((prevInput) => {
        const newInput = {
            ...prevInput,
            [e.target.name] : e.target.value
        }
        const validations = validate(newInput)
        setErrors(validations)
        return newInput
      })
    }

   // var valorEnvio = ""

    function handleSelect(e){
      e.preventDefault();
      setSelect([...select ,e.target.value])
      console.log(select)
       setInput((input) =>{
          const newInput = {    
              ...input,
             // temperaments: [...select]
              temperaments: [ ...select, e.target.value]
            }
            
            //document.getElementById("temperamentos").value = e
            
            
            
            
            const validations = validate(newInput)
            setErrors(validations)
            return newInput
        })
        
        
    }
    console.log(input)
    
    
    function insertTemper(e){
          /*  e = document.getElementById("temperamentos").value
           valorEnvio =  e*/
            
     }
    




    return (
        <div>
        <div className="Form">
            <h1 className="FormTitle">Create your Breed</h1>
            <form  onSubmit={(e) => handleSubmit(e)} >
                <div>
                   
                <div>
                        <label className="text">
                            image_URL:
                        </label>
                        <input
                        className="input"
                        type="text"
                        value={input.image_URL}
                        name='image_URL'
                        onChange={e => handleChange(e)}
                        />
                         {
                            errors.name && (
                                <span> {errors.image_URL} </span>
                            )
                        } 
                    </div>

                    <div>
                        <label className="text">
                            Name:
                        </label>
                        <input
                        className="input"
                        type="text"
                        value={input.name}
                        name='name'
                        onChange={handleChange}
                        />
                        {
                            errors.name && (
                                <span> {errors.name} </span>
                            )
                        }
                    </div>
                    
                    <div>
                        <label className="text">
                            Weight_max:
                        </label>
                        <input
                        className="input"
                        type="number"
                        value={input.weight_max}
                        name="weight_max"
                        onChange={e => handleChange(e)}
                        />
                        {
                            errors.weight_max && (
                                <span> {errors.weight_max} </span>
                            )
                        }
                    </div>
                    <div>
                        <label className="text">
                            Weight_min:
                        </label>
                        <input
                        className="input"
                        type="number"
                        value={input.weight_min}
                        name="weight_min"
                        onChange={e => handleChange(e)}
                        />
                        {
                            errors.weight_min && (
                                <span> {errors.weight_min} </span>
                            )
                        }
                    </div>
                    <div>
                        <label className="text">
                            Height_max:
                        </label>
                        <input
                        className="input"
                        type="number"
                        value={input.height_max}
                        name="height_max"
                        onChange={e => handleChange(e)}
                        />
                        {
                            errors.height_max && (
                                <span> {errors.height_max} </span>
                            )
                        }
                    </div>
                    <div>
                        <label className="text">
                            Height_min:
                        </label>
                        <input
                        className="input"
                        type="number"
                        value={input.height_min}
                        name="height_min"
                        onChange={e => handleChange(e)}
                        />
                        {
                            errors.height_min && (
                                <span> {errors.height_min} </span>
                            )
                        }
                    </div>
                    <div>
                        <label className="text">
                            Life Span:
                        </label>
                        <input
                        className="input"
                        type="text"
                        value={input.life_span}
                        name="life_span"
                        onChange={e => handleChange(e)}
                        />
                        {
                            errors.life_span && (
                                <span> {errors.life_span} </span>
                            )
                        }
                    </div>
                </div>
                <div>
 
                <label className="text">
                          Temperaments:
                        </label>

                     <select defaultValue='Temperaments' onChange={handleSelect}>
                            <option disabled >Temperaments</option>
                            {temper?.map(d => (                    
                                <option onSelect={handleSelect} id="temperamentos" name='temperamentos' value={d.name} key={d.id} >{d.name}</option>
 
                                ))}
                             
                            </select>  
              
                         <textarea
                         className="input"
                         
                         value={select}
                         name='temperss'
                         onChange={insertTemper}
                         />  
                    </div>
                <div>
                    <button className="SubmitBtn" type="submit">Submit</button>
                </div>

                <div>
                <Link to='/home'>
                    <button className="BackBtn">Back</button>
                </Link>
                </div>
            </form>
        </div>
        </div>
    )
};