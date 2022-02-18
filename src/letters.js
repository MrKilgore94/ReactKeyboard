
import React, {useState} from 'react'



const Letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','o','p','q','r','s','t','u','v','w','x','y','z']


const Buttons =({word,setWord}) =>{


  const addLetter=(letter)=>{
    setWord(word + letter)
    
    }
  
  return Letters.map((letter)=>{
return <button onClick={()=>(addLetter(letter))}>{letter}</button>
  })
}

export default Buttons



