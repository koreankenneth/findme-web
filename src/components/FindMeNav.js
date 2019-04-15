import React from 'react'
import { NavLink } from 'react-router-dom'

export default function FindMeNav () {
  // FindMe / Taste / New post / Rank / MyPage
  return (
    <div className='center'>
      <button className='findmenav findmenav-active'>Find It.</button>
      <button className='findmenav'>Not Found Yet.</button>
      <button className='findmenav'>Found It.</button>
    </div>
  )
}