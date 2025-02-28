import React from 'react'

export default function Card({name, value}){
    return(
        <div className ='border-4 border-white p-5 m-2'>
       <h2>{name}</h2>
       <h2>{value}</h2>
        </div>
        
    )
}