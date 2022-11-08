import React, {useState} from "react";
import './Paginado.css'



export default function Paginado({dogsPerPage, allDogs, paginado}){
    const pageNumber = [];

  /*   const pageNumberLimit = 21;
      
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPageLimit, setMaxPageLimit] = useState(21);
    const [minPageLimit, setMinPageLimit] = useState(0);

 */

    for(let i = 1; i <= Math.ceil(allDogs/dogsPerPage)-1; i++){
        pageNumber.push(i)
    }


/* 

    function handlePrevClick(){
        if(pageNumber > 1){
       
            paginado(pageNumber - 1)
        }
    }

    function handleNextClick(){
        if(pageNumber < Math.ceil(allDogs/dogsPerPage)){
         
          paginado(pageNumber + 1)
            
             }
    } */

/*     const onPrevClick = ()=>{
       
        if((currentPage-1) % pageNumberLimit === 0){
            setMaxPageLimit(maxPageLimit - pageNumberLimit);
            setMinPageLimit(minPageLimit - pageNumberLimit);
        }
        setCurrentPage(prev=> prev-1);
     }
  
    const onNextClick = ()=>{
        
         if(currentPage+1 > maxPageLimit){
             setMaxPageLimit(maxPageLimit + pageNumberLimit);
             setMinPageLimit(minPageLimit + pageNumberLimit);
         }
         setCurrentPage(prev=>prev+1);
      }

 */



    return(
        <div>
            <nav className="pagination">
                <ul className="pages">
              {/*   <li>
                   <button  onClick={onPrevClick} >Prev</button>
               </li>  */}
                    {
                        pageNumber && pageNumber.map(number => (
                            <li key={number}>
                               <button className="PageBtn" onClick={() => paginado(number)}>{number}</button>
                            </li>
                        ))
                    }
               {/*        <li>
                   <button  onClick={onNextClick} >Next</button>
               </li> */} 
                </ul>
            </nav>
        </div>
    )
}
