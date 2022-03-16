import React from 'react';
import "./CardPodcast.css";
// import headerImg from "../assets/header.png";
// import card2b from "../assets/card2b.png"


const CardPodcast = ({data}) => {
  return (
    <div className='cardPodcast'>
        {/* here we use a default Image called 'card1b' */}
        <img src='https://res.cloudinary.com/dkxkg9utr/image/upload/v1647442678/%D8%A3%D8%B3%D9%84%D9%85%D8%A9_%D8%A7%D9%84%D8%AF%D9%88%D9%84%D8%A9-%D9%85%D8%B1%D8%A8%D8%B9-2_wxhqdq.png' alt='header' />
        <div className='podcast-content'>
          <div className='global-simi-btn-red'>هوية</div>
          <h2>مقاومة إمبريالية المعرفة</h2>
          <p>لأساطيرِ البدايةِ في العالم أجمع أثرٌ نفسِي جذري –بغض النظرِ عن مصداقيتها العلمية–؛ إذ لها القوة الماكرةِ على تبرير الوضع الراهن وبالتوازي تحصرُ وعيَ المرء بما يمكن أن يصير إليه شكلُ العالم المستقبل. وكذا حالُ المجتمع الرأسمالي الحديث الذي أسس نفسه على روايتين مختلفتين لأسطورة مماثلة.</p>
          <div className='about-author'>
                <h6>أمجد عبد الرازق</h6>
                <h5 className='share-icon-in-card'><i className="fa-solid fa-share-nodes"></i> 15</h5>
                <h5 className='cal'><i className="fa-solid fa-calendar-days"></i> 22-2-2022</h5>
          </div>
        </div>
    </div>
  )
}

export default CardPodcast