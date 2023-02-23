import React, {useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { ListContext } from './App';
import { Card, Typography, CardContent, Box ,Button} from '@mui/material'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const AddList = () => {

  const navigate = useNavigate()

  const list = useContext(ListContext)

  const [task, setTask] = useState("")

  const changeHandler =e  => {
    setTask(e.target.value)
  }

  const clickHandler = e => {
    e.preventDefault()
    const newTodos = [...list.todos, task]
    list.setTodos(newTodos)

    setTask("")
    navigate('/')
  }

  

  return (
    <Stack>
      <Box display='flex' sx={{justifyContent:'center'}} >
        <Card display='flex' sx={{justifyItems:'center',width:'400px',height:'400px',marginTop:'10%',padding:'30px 0px'}} >
          <CardContent>
            <Typography sx={{textAlign:'center',color:'green'}} variant='h5'>Add Activity</Typography>
          </CardContent>
          <CardContent sx={{textAlign:'center'}}>
          <form style={{marginTop:'-10px'}}>
              <TextField type="text" name='task' value={task} onChange={changeHandler}
                 size='small' color='primary'
          ></TextField><br />
              <Button variant='contained' onClick={clickHandler} name='add' value='add'
                sx={{ marginTop: '10px',borderRadius:'20px',padding:'5px 40px' }}>Add</Button>
        </form>
          </CardContent>
     </Card>
      </Box>
    </Stack>
  )
}

export default AddList