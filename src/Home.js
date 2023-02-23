import { Typography,Button,AppBar,Toolbar, Grid } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useContext } from 'react'
import { Link} from 'react-router-dom'
import { ListContext } from './App'
import { Box, Card, CardContent } from '@mui/material'


const Home = () => {
  const { todos } = useContext(ListContext)
  const list = useContext(ListContext)


  return (
  <Stack>
      <AppBar position='static'>
        <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
        <Typography variant='h6'>TodoList</Typography>
          <Link style={{ textDecoration: 'none' }} to="/addlist">
            <Button color='secondary' variant='contained'>Add</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Box>
        {todos?.map((each, idx) => (
          <Card sx={{margin:'20px'}}>
            <CardContent sx={{ fontWeight: 'bold', fontSize: '20px' }}>
              <Grid container my={1} style={{ display: 'flex' }} key={idx}>
            <Grid item xs={1}>#{idx + 1}</Grid>
                <Grid item xs ={9} style={{ marginLeft: '50px' }}>{each}</Grid>
                
              <Grid item xs={1} style={{ display: 'flex', justifyContent: 'flex-end' }}><Button onClick={
                () => {
                  todos.splice(idx, 1);
                  const newTodos = [...list.todos]
                  list.setTodos(newTodos)
                }
              } variant='contained' color='secondary'>Done</Button></Grid>
            </Grid>
              
            </CardContent>
          </Card>
        ))}
      </Box>
   </Stack>
  )
}

export default Home