import React from 'react';
import Footer from '../layouts/Footer/Footer';
import Header from '../layouts/Header/Header';
import {
  useParams
} from "react-router-dom";

const Detail = ({keyword}) =>{
  let params = useParams();
   console.log(params);
  return (
    <div>
      <Header/>
         <h1>{keyword} {params.id}</h1>
      <Footer/>
    </div>
  )
}

export default Detail