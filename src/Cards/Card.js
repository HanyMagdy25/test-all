import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.css"

const Card = ({item}) => {
  return (
    // Link className='card-link' to={`/article/${item.id}`}
    <Link className='card-link' to={`/article-inside/${item._id}`} >
      <div className='card'>
          <div className='card-container-img'>
              <img className='card-img' src={item.icon} alt='card' />
          </div>
          <div className='card-container-content'>
              <div className='card-container-content-container'>
                  <div className='global-simi-btn-small-blue'>{item.type}</div>
                  <h3>{item.name}</h3>
                  <p>{`${item.about.substring(0,60)}...`}</p>

                  <div className='about-author-in-card'>
                          <h6>{item.writer}</h6>
                          <h5 className='share-icon-in-card'><i className="fa-solid fa-share-nodes"></i> {item.numberOfShare}</h5>
                          <h5 className='cal'><i className="fa-solid fa-calendar-days"></i> {item.createdOn.substring(0, 10)}</h5>
                  </div>
              </div>
          </div>
      </div>
    </Link>
    
  )
}

export default Card