import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function Home() {
    const navigate= useNavigate();
    useEffect(()=>{
        navigate('/mercury')

    },[])
    
  return (
    <>

    </>
  )
}

export default Home