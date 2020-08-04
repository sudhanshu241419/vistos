import React, { useState } from "react"
import { Grid, TextField,FormControl,InputLabel,Select } from '@material-ui/core';


function storeForm(props){
const [value,setValues] = useState('');
const classes = props

const handleChange=(event)=>{
    setValues(event.target.value)
}

    return (
            <Grid container spacing={1}>                                                 
               <Grid item xs={6}>                                                          
                                <FormControl variant="outlined" className={classes.formControl} margin='dense'> 
                                <InputLabel htmlFor="storename">Store</InputLabel>                           
                                <Select                                    
                                    value={store}
                                    onChange={handleStore}
                                    size="small"
                                    label="Store"
                                    inputProps={{
                                        name: 'storename',
                                        id: 'storename',
                                    }}
                                    height="25%"
                                    >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Austin</option>
                                    <option value={20}>Cicago</option>
                                    <option value={30}>New York</option>
                                    <option value={40}>Delhi</option>
                                    <option value={50}>Chenai</option>
                                    <option value={60}>Banglore</option>
                                    </Select>                                                                
                                </FormControl> 

                                <FormControl variant="outlined" className={classes.formControl} margin='dense'> 
                                <InputLabel htmlFor="points">Points/Hours</InputLabel>                           
                                <Select                                    
                                    value={points}
                                    onChange={handlePoints}
                                    label="Points/Hours"
                                    size="small"
                                    inputProps={{
                                        name: 'points',
                                        id: 'points',
                                    }}
                                    
                                    >
                                    <option aria-label="None" value="" />
                                    <option value={1}>Points</option>
                                    <option value={2}>Hours</option>                                   
                                    </Select>
                                                                
                                </FormControl>                           
                            </Grid>

                            <Grid item xs={6}>
                                <FormControl className={classes.formControl} >
                                    <TextField id="guys" label="Number of Guys" variant="outlined"  size="small"/>
                                </FormControl>    
                                <FormControl className={classes.formControl}>
                                    <TextField id="trucks" label="Numbers of Trucks" variant="outlined" size="small" />
                                </FormControl>    
                            </Grid>      
            </Grid> 
    )
}

export default storeForm