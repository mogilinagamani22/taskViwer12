import * as React from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Description } from '@mui/icons-material';

export function Form() {
  const [updatedData, setupdatedData] = useState({})
  const [Data, setData] = useState({
    Name:"",
    Description:"",
    Date:"",
    Time:""
  });
  const SettingData=(event,fieldProp)=>{
    setData(
        (prevState)=>{
            return{
                ...prevState,
                [fieldProp]:event.target.value
            }
        }
    );
  }
  const SettingDataForDate_Time=(value,fieldProp)=>{
    setData(
        (prevState)=>{
            return{
                ...prevState,
                [fieldProp]:value
            }
        }
    );
  }
  const  StoreTheDataInLocalStorage=()=>{
         setupdatedData(...updatedData,Data);
      
  }

  return (
    <>
      {/* -------------main grid---------------------- */}
      <Grid container  >
           <Grid xs={9}>
           <Typography variant='h5'style={{marginTop:120,marginLeft:500, marginBottom:100}} > Task Creator </Typography>
          <Stack spacing={1} direction="column" alignItems="baseline" justifyContent="center" alignItems="center" >
          <form>
                  <label forclass="taskname">Task Name</label><br />
                  <TextField id="taskname"
                        name="Name" 
                        variant="outlined" 
                        size="small"
                        required
                        style={{width:520}}   
                        onChange={event=>SettingData(event,"Name")}/> <br /><br />
                  <label forclass="taskDescriptiin">Task Description (optional)</label><br />
                <TextField
                        id="taskDescriptiin"
                        name="Description"
                        variant="outlined" 
                        size="small"
                        style={{width:520}} 
                        onChange={event=>SettingData(event,"Description")} /> <br /> <br />
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        size="small"
                        id="date"
                        style={{width:500}} 
                        onChange={(value) =>SettingDataForDate_Time(value,Date)}
                        renderInput={(params) => <TextField {...params} />} />
                    <TimePicker
                        size="small"
                        id="time"
                        onChange={(value) =>SettingDataForDate_Time(value,"Time")}
                        renderInput={(params) => <TextField {...params} />} />
                </LocalizationProvider>
                <br /><br /> <br />
                <Button 
                        variant='contained' 
                        size="large"
                        color="secondary"
                        style={{width:200,marginLeft:320}} 
                        onClick={StoreTheDataInLocalStorage} 
                        >
                        Add Task
              </Button>
          </form>
          </Stack>
      </Grid>
        <div id="seperator" style={{borderLeft:3 ,borderColor:"black",borderStyle:"solid",minHeight:"100vh"}}></div>
        <Grid xs={2}>
                <Stack spacing={1} direction="row" alignItems="baseline" justifyContent="space-between"   style={{marginTop:40,marginLeft:40}}>
                        <Button variant='outlined' size="medium" color="secondary">UpComming</Button>
                        <Button variant='outlined' size="medium" color="secondary" >All</Button>
                </Stack>
               <div className='Container'>
                    <div className='child'>
                        {/* <h4>vyshnavi</h4> */}
                    </div>
               </div>
          </Grid>
      </Grid>
    </>
  );
}
