import { Box, Stack } from '@mui/material'
import * as React from 'react'

function UserTable() {
  return (
    <Box width="100%">
      <img src="/assets/react.svg" alt="image" width={100} />
      <Stack direction={'row'} width="100%">
        <Box
          border={1}
          paddingLeft={10}
          width="50%"
          sx={{ boxShadow: '0px 0px 5px 2px rgba(0,0,0,0.1)', color: 'dark' }}
        >
          <div border={'1px solid red'}>full Name</div>
          <h3>full Name</h3>
          <h3>full Name</h3>
          <h3>full Name</h3>
          <h3>full Name</h3>
        </Box>
        <Box
          border={1}
          paddingLeft={15}
          width="50%"
          sx={{ boxShadow: '0px 0px 5px 2px rgba(0,0,0,0.1)' }}
        >
          <h5>jamil afzal </h5>
          <h5>full Name</h5>
          <h5>full Name</h5>
          <h5>full Name</h5>
          <h6>full Name</h6>
        </Box>
      </Stack>
    </Box>
  )
}

export default UserTable
