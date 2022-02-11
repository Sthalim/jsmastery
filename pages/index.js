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
            <Carousel/>
              <h1 className=''>Now working with the UI and Back end code together to master all the skills i have as a full stack developer!</h1>
              <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta excepturi, esse voluptate aut velit libero necessitatibus iusto, obcaecati laborum distinctio eligendi officiis sed qui. Incidunt earum magni perferendis reprehenderit cupiditate laudantium aperiam dolores nisi. Voluptas id dolores modi vitae ea, fugiat fugit ullam iure suscipit officia laudantium doloremque perspiciatis sed?</p>
              <Basic/>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus nesciunt modi totam molestiae. Ipsum a autem incidunt magni. Magnam numquam perspiciatis velit placeat, nesciunt voluptatum adipisci consequuntur a expedita voluptate!</div>
            
          </div>
        </div>
      </div>
    
    </>
  );
}



