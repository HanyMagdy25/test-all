import React, { useEffect, useState } from 'react';
import "./TvEdrak.css"
// import tvImage from "../../assets/tv.png"
import TvConst from './TvConst';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper-bundle.css";
import "swiper/modules/pagination/pagination.min.css";
// import SwiperCore, { Pagination } from "swiper";
import BigCard from '../../Cards/BigCard';
import TvLayout from '../Layout/TvLayout';

const TvEdrak = () => {

  // const [tv, setTv] = useState([]);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/tv")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       setTv(data);
  //       console.log("21",tv)
  //     });
  // },[]);

  useEffect(() => {
    fetch("http://localhost:8000/tv")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log("55" , data)
      });
  },[]);


  // <div className="header-right">
  //         <Swiper
  //           spaceBetween={60}
  //           pagination={{
  //             clickable: true,
  //           }}
  //         >
  //           {edraks.slice(0, 5).map((slide, index) => (
  //             <SwiperSlide key={index}>
  //               <HeaderSlider slide={slide} />
  //             </SwiperSlide>
  //           ))}
  //         </Swiper>
  //       </div>


  return (
    <div className="tv">
      <div className="tv-container">
        <div className="tv-slider">
            <Swiper
              spaceBetween={60}
              pagination={{
                clickable: true,
              }}
            >
              {data.slice(0, 4).map((slide, index) => (
                <SwiperSlide key={index}>
                  <TvConst slide={slide} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* الاكثر مشاهدة */}
      {/* our data come from db.json*/}
      <div className="most-popular">
        <div className="most-popular-tv-container">
          <h1>الأكثر مشاهدة</h1>
          <hr />
          <div className="most-popular-cards">
            {/*to Stop map method after certain number with slice method */}
            {data.slice(0, 4).map((card, index) => (
              <BigCard key={index} data={card} />
            ))}
          </div>
        </div>
      </div>

      <>
        <TvLayout title={"لقاءات معرفية مترجمة"}/>
      </>
      <>
        <TvLayout title={"لقاءات معرفية"}/>
      </>



        {/* {data.map((item,index)=>(
          <TvConst item={item} key={index}/>
        ))} */}
      </div>
    </div>
  )
}

export default TvEdrak