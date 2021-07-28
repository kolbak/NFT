import { animate } from "framer-motion";
import React, { useState } from "react"

import './carousel.scss'

// import { Transition } from 'react-transition-group';

// const duration = 300;

// const defaultStyle = {
//   transition: `opacity ${duration}ms ease-in-out`,
//   opacity: .7,
// }

// const transitionStyles = {
//   entering: { opacity: 1 },
//   entered: { opacity: 1 },
//   exiting: { opacity: .5 },
//   exited: { opacity: .5 },
// };
// function animate() {


//   requestAnimationFrame(animate);
// }
// requestAnimationFrame(animate);

const Carousel = ({ data }) => {
  let grid = [];
  for (let i = 0, l = data.length; i < l; i++) {
    grid.push(
      <div className="slide">
        <img src={data[i].avatarSRC} height="100" width="250" alt="" />
      </div>
      // <div className="slide">
      //   <img src={data[i].avatarSRC} height="100" width="250" alt="" />
      //   <span>{data[i].name}</span>
      // </div>
    )
  }

  console.log('grid :>> ', grid);

  return (
    // <div className="slider">
    //   <div className="slide-track">
    //     <div className="slide">
    //       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
    //     </div>
    //     <div className="slide">
    //       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
    //     </div>
    //     <div className="slide">
    //       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
    //     </div>
    //     <div className="slide">
    //       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
    //     </div>
    //     <div className="slide">
    //       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
    //     </div>
    //     <div className="slide">
    //       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
    //     </div>
    //     <div className="slide">
    //       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
    //     </div>
    //     <div className="slide">
    //       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
    //     </div>
    //     <div className="slide">
    //       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
    //     </div>
    //     <div className="slide">
    //       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
    //     </div>
    //     <div className="slide">
    //       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
    //     </div>
    //     <div className="slide">
    //       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
    //     </div>
    //     <div className="slide">
    //       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
    //     </div>
    //     <div className="slide">
    //       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
    //     </div>
    //   </div>
    // </div>
    <div className="slider">
      <div className="slide-track">
        {grid}
      </div>
    </div>
  )
}


export default Carousel