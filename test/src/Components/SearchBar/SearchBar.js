import React from 'react'
import { IconButton, Paper } from '@mui/material'
import { borderRadius } from '@mui/system'
import { Search } from '@mui/icons-material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function SearchBar() {
  const [searchBy, setSearchBy] = useState("");
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault()


    if (searchBy) {
      console.log(searchBy)
      navigate(`search/${searchBy}`)

    }
  }
  return (
    <Paper component={"form"} sx={{ borderRadius: 15, border: '1px solid black', pl: 2, mr: { sm: 5 }, boxShadow: 'none' }} onSubmit={handleSubmit}>
      <input className='search-bar' placeholder='search...' style={{ border: 0, outline: 0, marginTop: '5px' }} onChange={(e) => {
        setSearchBy(e.target.value)

      }} />
      <IconButton type='sumbit' sx={{ p: '3px' }}>
        <Search />
      </IconButton>

    </Paper>
  )
}

export default SearchBar