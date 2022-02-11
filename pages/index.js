//import React from 'react';
//import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import Basic from "../components/popcard";
import Carousel from "../components/carousel";





export default function Home() {
  return (
    <>
      <div className="container-fluid setup2">
        <div className='row'>
          <div className="col p-0">
            {/* CAROUSEL PARTS.... */}
            <Carousel />
            {/* STARTING THE MAIN CONTENT */ }
            <p>working with real development after the test</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum ad accusantium modi. Quos sunt nihil voluptatem voluptas qui suscipit illo recusandae, pariatur voluptate tenetur veritatis odit. Ipsa modi commodi inventore facilis iste soluta corporis voluptatibus dolorem quis, accusantium facere ullam architecto maxime sit vero asperiores voluptatem esse tenetur numquam illum!</p>
          </div>
        </div>
      </div>
    
    </>
  );
}



