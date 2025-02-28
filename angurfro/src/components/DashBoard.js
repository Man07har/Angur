import React from 'react';
import Card from './Card'
export default function DashBoard(){
return (
    <div className = 'text-white justify-center items-center'>
<div className = 'justify-center'><h1 className="justify-center text-3xl">Angur Dashboard </h1></div>
<h1>Name: Manohar</h1>
<div className="flex-auto justify-center items-center">
<Card name ="Quantity of goods shipped last month" value ="07"/>
<Card name="Forecasted quantity of goods to ship this coming month" value="Rise up"/>
<Card name = "Year-to-date average goods shipped per month" value="77"/>
        </div>
        </div>
)
}