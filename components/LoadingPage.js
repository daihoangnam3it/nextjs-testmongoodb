import React, { useRef } from 'react';
import Image from 'next/image';
const LoadingPage = () => {
  return (
    <div className='container'>
      <div className='dot dot1'>
      <img ref={list} src="/images/dot.png" alt="" className="img-1"/>
      <img ref={list} src="/images/earth (1).png" alt="" className="img-2"/>
      </div>
      <div className='dot dot2'>
      <img ref={list} src="/images/custom.png" alt="" className="img-1"/>
      <img ref={list} src="/images/snail.png" alt="" className="img-2"/>
      </div>
      <div className='dot dot3'>
      <img ref={list} src="/images/bleach.png" alt="" className="img-1"/>
      <img ref={list} src="/images/paw.png" alt="" className="img-2"/>
      </div>
      <div className='dot dot4'>
      <img ref={list} src="/images/dot.png" alt="" className="img-1"/>
      <img ref={list} src="/images/farmer.png" alt="" className="img-2"/>
      </div>
      <div className='dot dot5'>
      <img ref={list} src="/images/hexagon.png" alt="" className="img-1"/>
      <img ref={list} src="/images/potato.png" alt="" className="img-2"/>
      </div>
      <style jsx>{`
   
        .container {
          width: 100%;
          background-color: rgb(235, 247, 127);
          height: 100vh;
          margin: 0 auto;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .dot {
          width: 50px;
          height: 50px;
          position: relative;
        }
        .dot .img-2 {
          position: absolute;
          z-index: 9999;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(0);
        }
        .dot img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .dot1 .img-1 {
          animation: dot1 0.1s 0.25s forwards;
        }
        .dot1 .img-2 {
          animation: img2 0.1s 0.5s forwards;
        }
        .dot2 .img-1 {
          animation: dot1 0.1s 0.75s forwards;
        }
        .dot2 .img-2 {
          animation: img2 0.1s 1s forwards;
        }
        .dot3 .img-1 {
          animation: dot1 0.1s 1.25s forwards;
        }
        .dot3 .img-2 {
          animation: img2 0.1s 1.5s forwards;
        }
        .dot4 .img-1 {
          animation: dot1 0.1s 1.75s forwards;
        }
        .dot4 .img-2 {
          animation: img2 0.1s 2s forwards;
        }
        .dot5 .img-1 {
          animation: dot1 0.1s 2.25s forwards;
        }
        .dot5 .img-2 {
          animation: img2 0.1s 2.5s forwards;
        }
        @keyframes dot1 {
          0% {
            transform: scale(1, 1);
          }
          100% {
            transform: scale(0, 1);
          }
        }
        @keyframes img2 {
          0% {
            transform: scale(1, 1);
          }
          100% {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: scale(3);
          }
        }
      `}</style>
      <style jsx global>{`
      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

      `}</style>
    </div>
  );
};

export default LoadingPage;
