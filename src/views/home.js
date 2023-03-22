import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Future Quality Developer</title>
        <meta property="og:title" content="Future Quality Developer" />
      </Helmet>
    </div>
  )
}

export default Home
