import React, { useEffect } from "react";
import "./ArticleInside.css";
import { images } from "../constants";
import BigCard from "../Cards/BigCard";
import HeaderLeft from "../Header/HeaderLeft";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import Paragraph from "./Paragraph";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncEdrak, getAllEdrak } from "../Redux/EdrakSlice";
import { useParams } from "react-router-dom";
// jquery
import $ from 'jquery';
import {isMobile} from 'react-device-detect';
import Swal from "sweetalert2";
import Spinner from "../constants/Spinner";



const edrakAuthors = [
  {
    name: "أ. عبدالرحمن النحياني",
    imgUrl: images.author1,
  },
  {
    name: "د. هبة رءوف عزت",
    imgUrl: images.author2,
  },
  {
    name: "أ. نادية المطيري",
    imgUrl: images.author3,
  },
  {
    name: "أ. رحمة رضا",
    imgUrl: images.author4,
  },
]


// الداتا هتكون هنا مش على الريدكس مؤقتا


// To Copy The URL
function copy() {
  const el = document.createElement('input');
  el.value = window.location.href;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  // alert('URL Copied');
}

const ArticleInside = () => {

  const { _id } = useParams();
  console.log("id:", _id)
  let dispatch = useDispatch();
  const edraks = useSelector(getAllEdrak);
  // const edraksAuthors= useSelector(getAllEdrakAuthors)
  useEffect(() => {
    dispatch(fetchAsyncEdrak());
    // dispatch(fetchAsyncEdrakAuthors(_id));
  }, [dispatch]);
  console.log("new edraks", edraks);

  const articleIn = edraks.find((a) => a._id === _id);
  console.log("article in :", articleIn)

  if (!articleIn) {
    return <div className="spinner"><Spinner/></div>;
  }

  // to copy the url and pass to facebook icon
  const url = window.location.href

  // Copied Alert With JQuery
  function copyAlert() {
    let timerInterval
    Swal.fire({
        title: 'تم نسخ الرابط',
        timer: 5000,
        // timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()

        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })


    if (isMobile) {
        $(".navbar-toggler").trigger("click")
    }
}
  

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-right">
          <div className="header-right-content">
            <div className="global-simi-btn">{articleIn.type}</div>
            <h1 className="header-headline">{articleIn.name}</h1>
            <div className="about-author">
              <h5>{articleIn.writer}</h5>
              <div className="share-icon">
                <i className="fa-solid fa-share-nodes"></i>
                {articleIn.numberOfShare}
              </div>
              <div className="cal">
                <i className="fa-solid fa-calendar-days"></i>
                {articleIn.createdOn.substring(0, 10)}
              </div>
            </div>
            <div className="social-icons-small">
              <span onClick={()=>{copy();copyAlert()}}>
                <i className="fa-solid fa-share-from-square"></i>
              </span>
              <span>
                <TwitterShareButton
                  url={url}
                >
                  <i className="fa-brands fa-twitter"></i>
                </TwitterShareButton>
              </span>
              <span>
                <FacebookShareButton
                  url={url}
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </FacebookShareButton>
              </span>
            </div>
          </div>
          <div className="img-container">
            <img src={articleIn.img} className="img-header" alt="headerImage" />
          </div>
          {/* هنا المقالات بتغير الداتا من فوق */}
          <div className="big-paragraph">
            {articleIn.paragraphs.map((paragraph, index) => (
              <Paragraph paragraph={paragraph} key={index} />
            ))}
          </div>



          {/* المزيد من المدونات */}
          <div className="more-blogs">
            <h1>المزيد من المدونات</h1>
            <hr />
            <div className="articles-inside">
              {edraks.slice(0, 3).map((card, index) => (
                <BigCard key={index} data={card} />
              ))}
            </div>
          </div>
        </div>

        <div className="header-left">
          <HeaderLeft data={edraks} edrakAuthors={edrakAuthors} />
        </div>
      </div>
    </div>
  );
};

export default ArticleInside;