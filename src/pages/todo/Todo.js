import { React, useEffect, useState } from "react";
import {Grid, Card, CardHeader, CardContent, Button, TextField, Stack, Checkbox, Typography} from '@mui/material';
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from "react-redux";
import { appSelector, appActions } from "../../redux/appRedux";






const Todo = () => {
  const dispatch = useDispatch()
  const todo = useSelector(appSelector.todo)
  const [text, setText] = useState(null)

  useEffect(()=>{
    dispatch(appActions.setPageName('LISTA DE TAREAS'))
  },[])
  
  const handleChange = (e)=>{
     setText(e.target.value)
  }

  const addTask = async ()=>{
    dispatch(appActions.addTodo({text:text, id:uuid()}))
    await setText(prev=>'')
  }

  const handleChecked = (e, id) => {
    dispatch(appActions.setCompletedTodo({id, completed:e.target.checked}))

  }
      
  const delTask = async (id) => {
    dispatch(appActions.deleteTodo(id))
  }
      
    
   


  return (
   <Grid container spacing={3}>
    <Grid item md={12} xs={12}>
      <Card>
        <CardHeader title="Agrega una tarea" />
          <CardContent>
            <Stack sx={{justifyContent:'space-around'}} direction='row'>
              <Grid item md={9}>
              <TextField sx={{ width: '100%' }} value={text} label="tarea" variant="outlined" onChange={handleChange} />
              </Grid>
              <Grid item md={1.7}>
                <Button disabled={!text} variant="contained" onClick ={()=>addTask()}>Agregar</Button>
              </Grid>
            </Stack>
          </CardContent>
      </Card>
    </Grid>


    <Grid item md={12} xs={12}>
      <Card>
        <CardHeader title="Tareas" />
          <CardContent>{todo.map((t, index)=>
            (
              <Stack key={t.id} sx={{justifyContent:'space-between'}}direction='row'>
                <Grid item md={1}>
                  <Checkbox onChange={e=>handleChecked(e,t.id)} />
                </Grid>
                <Grid item md={9} sx={{pt: 1}}>
                  <Typography sx={{fontSize:18,fontWeight:700}}>{t.text}</Typography>
                </Grid>
                <Grid item md={2}>
              <Button variant="contained" onClick={()=>delTask(t.id)}>Eliminar</Button>
                </Grid>
              </Stack>
            ))}
          </CardContent>
      </Card>

    </Grid>
    <Grid item md={12} xs={12}><Typography sx={{fontSize:18,fontWeight:700}}>Te quedan {todo.filter((todo)=>!todo.completed).length} tareas por terminar
    </Typography></Grid>
   </Grid>
   
  );
};


export default Todo;