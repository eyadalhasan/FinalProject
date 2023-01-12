import React from 'react'
import { Stack } from '@mui/system'
import { Link } from 'react-router-dom'
import { logo } from '../../Utils/constants'
import SearchBar from '../SearchBar/SearchBar'
import "./Navbar.css"
function Navbar() {

  return (
    <div className="Navbar">
      <img src={logo} alt="" height={45} />

      <SearchBar />
    </div>

  )
}

export default Navbar