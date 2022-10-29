import { React, useEffect} from "react";
import {Grid,Paper,Box, Typography} from '@mui/material';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import { ListAlt, ManageSearch } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import { appSelector, appActions } from "../../redux/appRedux";





const Dashboard = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(appActions.setPageName('TABLERO'))
  },[])
  const todo = useSelector(appSelector.todo)
  return (
   <Grid container spacing={3}>
    <Grid item md={6} xs={12}>
     <Paper sx={{p: 2}}>
       <Box>
        <Typography sx={{fontSize:18,fontWeight:700}}>
            Te quedan {todo.filter((todo)=>!todo.completed).length} tareas por terminar
        </Typography>
         
            
          
        </Box>
     </Paper>
    </Grid>
    <Grid item md={6} xs={12}>
     <Paper sx={{p: 2}}>
       <Box>
       <Typography sx={{fontSize:18,fontWeight:700}}>
            Tienes {todo.filter((todo)=>todo.completed).length} tareas completadas
        </Typography>
          
        
       </Box>
     </Paper>
    </Grid>
    <Grid item md={6} xs={12}>
     <Paper sx={{p: 2}}>
       <Box>
         <Button component={Link} to="/todo">
         <ListAlt/>
            LISTA DE TAREAS
          </Button>
        </Box>
     </Paper>
    </Grid>
    <Grid item md={6} xs={12}>
     <Paper sx={{p: 2}}>
       <Box>
        <Button component={Link} to="/fetch-list">
          <ManageSearch/>
          FetchList
        </Button>
       </Box>
     </Paper>
    </Grid>
   </Grid>
  );
};


export default Dashboard;