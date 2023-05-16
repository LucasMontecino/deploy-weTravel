import React from "react";


export default function Paginado({hotels,currentPage,setCurrentPage,search}){
    function nextPage(){
        if(currentPage <= hotels.length - 12 && hotels.filter(el=> el.name.includes(search)).length > currentPage + 12)
        // currentPage <= hotels.length - 12
        setCurrentPage(currentPage+12)
    }
    function prevPage(){
        if(currentPage > 0)
        setCurrentPage(currentPage-12)
    }
    return(
        <div className="flex justify-center items-center">
            {
            currentPage > 0 ? (<div className="bg-[color:var(--second-bg-color)] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]  hover:shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] rounded-[10px] p-2 mx-2 mb-3">
                 <button onClick={prevPage}>Prev Page</button>
            </div>)
            : null
            }
            {
                 currentPage <= hotels.length - 12 ? (<div className="bg-[color:var(--second-bg-color)] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]  hover:shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] rounded-[10px] p-2 mx-2 mb-3">
                  <button onClick={nextPage}>Next Page</button>
             </div>)
             : null
            }
        </div>
    )
}