import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

function FindMeCard() {
  const post = {
    id: 'awoeifjawefij',
    author: 'nelo13',
    timestamp: '2019-03-04',
    text: 'Please, find this item asap. I need to prepare it before my anniversay date.',
    isSecret: true,
    item: {
      name: '18SS 골든구스 슈퍼스타 화이트',
      brand: 'Golden Goose',
      imageURL: '/images/goose.jpg',
    },
    comments: ['C19286398619283','C19286398619284','C19286398619285','C19286398619286'],
    followers: ['koreankenneth', 'ekei', 'heideson']
  }


  return (
    <Link to={`/findme/${post.id}`} className='findme-card'>
      <img
        src={post.item.imageURL}
        alt={`image of ${post.item.name}`}
        className='avatar'
      />
      <div className='findme-card-info'>
        <div>
          <div>
            <button className='findme-card-btn'>Nike</button>
            <button className='findme-card-btn'>Secret Find</button>
          </div>
          <span className='findme-card-title'>{post.item.name}</span>
          <div className='findme-card-timestamp'>{post.timestamp}</div>
        </div>
      </div>
    </Link>
  )
}

export default withRouter(FindMeCard)