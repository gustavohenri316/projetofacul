import { useState } from "react";
import  Carousel from "react-elastic-carousel";
import Item from './Item'
import "./styles.css"


function Shows(){
const breakPoints =[
  { width: 1, itemToShow: 1},
  { width: 550, itemToShow: 2},
  { width: 768, itemToShow: 3},
  { width: 1200, itemToShow: 4},
]

  return(
    <div className="container">
                 
      <div className="carousel-wrapper">
        <Carousel isRTL breakPoints={breakPoints}>
         <Item>Shows</Item>
         <Item>Shows</Item>
         <Item>Shows</Item>
         <Item>Shows</Item>
         <Item>Shows</Item>
         <Item>Shows</Item>
         <Item>Shows</Item>
        </Carousel>

      </div>
    </div>
  )
}
export default Shows