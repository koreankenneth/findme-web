import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  // FindMe / Taste / New post / Rank / MyPage
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to ='/' exact activeClassName='active'>
            FindMe
          </NavLink>
        </li>
        <li>
          <NavLink to='/taste' activeClassName='active'>
            Taste
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' activeClassName='active'>
            New Post
          </NavLink>
        </li>
        <li>
          <NavLink to='/rank' activeClassName='active'>
            Rank
          </NavLink>
        </li>
        <li>
          <NavLink to='/mypage' activeClassName='active'>
            My Page
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}