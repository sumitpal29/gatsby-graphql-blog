import React from 'react'
import {Link} from 'gatsby'

function PageNotFound() {
  return (
    <div>
      <title>Not found</title>
      <h1>Page not found</h1>
      <Link to="/">Visit Home</Link>
    </div>
  )
}

export default PageNotFound
