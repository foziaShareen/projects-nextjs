"use client"
import React from "react";
import { useState } from "react";

function Card({children}){
  return(
    <div className="border-md border-green-100 p-10 bg-amber-300 ">
      <h2 className="text-2xl font-bold mb-5">Card component</h2>
      <div>{children}</div>
    </div>
  )
}

export default function Home() {
const [isVisible,setIsVisible]=useState(true)
const [names,setNames]=useState(["fozia","sadia","alia"])
 const sethandle=()=>{
  
  setIsVisible(!isVisible)

 }
const cards=isVisible &&names.map((name,index)=>(
  <Card key={index}>
    <p className="text-lg">Hello, {name}!</p>
  </Card>
))


  const name="fozia"
  return (
    
       <div className="p-20 space-y-3">
      <div>
      <h1 className="bg-gray-700">{name} home</h1>

      </div>
      {cards}
     
      <button onClick={sethandle}>{isVisible?"hide":"show"}</button>
    </div>
      
    
  
   )
   

}
