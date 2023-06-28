
'use client'
import React from 'react'
import { Spinner } from '@chakra-ui/react'

const loading = () => {
  return (
    <div>
      <Spinner size='xl' color='red' />
    </div>
  )
}

export default loading
