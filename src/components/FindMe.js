import React, { Component } from 'react'
import FindMeNav from './FindMeNav'
import FindMeCard from './FindMeCard'

class FindMe extends Component {

  render() {
    return (
      <div>
        <FindMeNav />
        <ul>
          <li>
            <FindMeCard />
          </li>
          <li>
            <FindMeCard />
          </li>
          <li>
            <FindMeCard />
          </li>
        </ul>
      </div>
    )
  }
}

export default FindMe