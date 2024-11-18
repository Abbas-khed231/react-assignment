import React from 'react'
import { TextField } from '@mui/material'

const SearchField = () => {
  return (
    <TextField placeholder='Search Movies Name' sx={{backgroundColor: "#fff", mx: '15px'}}>
    </TextField>
  )
}

export default React.memo(SearchField);