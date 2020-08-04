import React, { useState } from "react"
import {Box,CircularProgress,Typography,Button,Tabs,Tab,Fade,Divider,Paper,TextField,InputAdornment,
    Table,TableBody,TableCell,TableContainer,TableHead,TableRow,
    Accordion,AccordionSummary,AccordionDetails,Grid,FormControl,
    InputLabel,Input,FormHelperText,Select,option,Checkbox,Radio,RadioGroup,FormLabel,FormControlLabel,
    ListItem,ListItemIcon,ListItemText,TextareaAutosize, Card,NativeSelect, CardContent 
} from "@material-ui/core";
//import Navbar from'../../header/mainnavbar'
import Navbar from '../../header/sidebar'
import clsx from 'clsx'
import {ExpandMore,ZoomOut,AccountBalance,Backup,Build,Home,MeetingRoom,ViewComfy,Widgets,Contacts,ShoppingCart,ChromeReaderMode,
    PeopleOutlineOutlined
} from '@material-ui/icons'

import { withRouter,useHistory } from "react-router-dom";


//https://material-ui.com/components/selects/#select
//https://material-ui.com/api/form-control/#formcontrol-api
//https://material-ui.com/components/checkboxes/

// styles
import useStyles from "./styles"
import useCommonStyles from "../commonStyles"

//table
const TAX_RATE = 0.07;
const ccyFormat=(num)=> {
    return `${num.toFixed(2)}`;
  }
  
const priceRow=(qty, unit)=> {
    return qty * unit;
  }
  
const createRow=(desc, qty, unit)=> {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
  }
  
const subtotal=(items)=> {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }
  
const rows = [
    createRow('Full Value Protection', 10000,1,80),
    createRow('Point', 10, 60,600),
    createRow('Box', 2, 5),
    createRow('Stair/ETC', 5),
    createRow('Number Of Guys', 5),
    createRow('Miles', 5),
    createRow('Special Items', 5),
    createRow('Extra Stops', 5),
    createRow('Prime Day Charge', 5),
    createRow('Equipment Rental', 5),
    createRow('Storage in Transit', 5),
    createRow('Packing & Materials', 5),
    createRow('Packing Labors', 5),
    createRow('Boxes/Packing Materials ', 5),
    
  ];

    
const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;
//End of table

const StyledRadio=(props)=> {
    const classes = useStyles();    
      
    return (
      <Radio
        className={classes.redioRoot}
        disableRipple
        color="default"
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }
 function CreateJob() {
    const history = useHistory()
    const classes = useStyles();
    const commonClasses = useCommonStyles();
    const [values, setValues] = React.useState({
        standardHourlRate: '',
        primeHourlRate: '',
        primePerBox: '',
        dollarPerPoint: '',
        estimatedCrewTimeDivisor: '',
      });
    const [store, setStore] = React.useState('');
    const [points,setPoints] = React.useState('');    
    const [check, setCheck] = React.useState({checkedB: true});
    const [jobClass,setJobClass] = React.useState('');
    const [jobStatus,setJobStatus]=React.useState('');    
    const handleCheckboxChange = (event) => {
        setCheck({ ...check, [event.target.name]: event.target.checked });
      };
    
    const handleChange = (event) => {
        setValues(event.target.value);        
    };
    const handleStore = (event)=>{
        setStore(event.target.value);        
    }
    const handlePoints = (event)=>{
        setPoints(event.target.value);
    }
    const handleJobClass = (event)=>{
        setJobClass(event.target.value)
    }
    const handleJobStatus=(event)=>{
        setJobStatus(event.target.value)
    }

    const [paymentType,setPaymentType] = useState()
    const handlePaymentType = (event)=>{
        setPaymentType(event.target.value)
    }
    const [resMove,setResMove] = useState()
    const handleResMove = (event)=>{
        setResMove(event.target.value)
    }
    const [foundUs,setFoundUs] = useState()
    const handleFoundUs = (event)=>{
        setFoundUs(event.target.value)
    }
    const [remindeMe,setRemindeMe] = useState()
    const handleRemindeMe = (event)=>{
        setRemindeMe(event.target.value)
    }
    const [addressType,setAddressType]=useState()
    const handleAddressType=(event)=>{
        setAddressType(event.target.value)
    }
    const [propertyType,setPropertyType]=useState()
    const handlePropertyType=(event)=>{
        setPropertyType(event.target.value)
    }
    const [defaultFloor,setDefaultFloor]=useState()
    const handleDefaultFloor=(event)=>{
        setDefaultFloor(event.target.value)
    }
    const [walkDistance,setWalkDistance]=useState()
    const handleWalkDistance=(event)=>{
        setWalkDistance(event.target.value)
    }

    const [roomType,setRoomType]=useState()
    const handleRoomType=(event)=>{
        setRoomType(event.target.value)
    }

    
    const [defaultItem,setDefaultItems]=useState()
    const handleDefaultItems=(event)=>{
        setDefaultItems(event.target.value)
    }
    const [item,setItem]=useState()
    const handleItem=(event)=>{
        setItem(event.target.value)
    }
    const [relatedItem,setRelatedItem]=useState()
    const handleRelatedItem=(event)=>{
        setRelatedItem(event.target.value)
    }

    const [equipmentName,setEquipmentName]=useState()
    const handleEquipmentName=(event)=>{
        setEquipmentName(event.target.value)
    }
    const [declaredValue,setDeclaredValue]=useState()
    const handleDeclaredValue=(event)=>{
        setDeclaredValue(event.target.value)
    }

  
    
   
    return (
        <>
        {
        localStorage.usertoken? 
            <div className={commonClasses.root}>
            <Navbar/>           
            <main className={commonClasses.content}>
             <div className={commonClasses.toolbar} />
                    <div style={{"display":"flex","width":"100%"}}>
                    <Paper elevation={3} component = "div" className={commonClasses.rootPaper}>
                    <Typography variant="h6" className={commonClasses.heading}>
                        Create New Job
                    </Typography>
                    <Divider/>
                    
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography>Store Details</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
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
                        
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header">
                        
                        <Typography>Job Details</Typography>
                        
                        </AccordionSummary>
                        <AccordionDetails>
                        
                        <Grid container spacing={1}>                            
                            <Grid item xs={6}>                            
                                <FormControl variant="outlined" className={classes.formControl} margin='dense'>                             
                                    <InputLabel htmlFor="jobStatus">Job Status</InputLabel>
                                    <Select 
                                        value={jobStatus}
                                        inputProps={{
                                            name: 'jobStatus',
                                            id: 'jobStatus',
                                        }} 
                                        onChange={handleJobStatus}
                                        label="Job Status"
                                    >
                                    <option value={1}>Active</option>
                                    <option value={2}>Pending</option>
                                    <option value={3}>Estimation</option>
                                    
                                    </Select>                                  
                                </FormControl>     

                                <FormControl variant="outlined" className={classes.formControl} margin='dense'>                            
                                    <InputLabel htmlFor="jonClass">Job Classification</InputLabel>
                                    <Select 
                                        inputProps={{
                                            name: 'jobClass',
                                            id: 'jobClass',
                                        }} 
                                        value={jobClass} 
                                        onChange={handleJobClass}
                                        label="Job Classification"
                                        >
                                    <option value={10}>Job1</option>
                                    <option value={20}>job2</option>                                   
                                    </Select>                                  
                                </FormControl>   

                                <FormControl variant="outlined" className={classes.formControl} margin='dense'>                            
                                    <InputLabel htmlFor="foundUs">How They Found Us</InputLabel>
                                    <Select 
                                        inputProps={{
                                            name: 'foundUs',
                                            id: 'foundUs',
                                        }} value={foundUs} onChange={handleFoundUs} label="How They Found Us">
                                    <option value={10}>Addvertisment</option>
                                    <option value={20}>Truck</option>
                                    <option value={30}>Phone</option>
                                    <option value={40}>Paper</option>                                   
                                    </Select>                                  
                                </FormControl>  

                                 <FormControl>                            
                                <TextField
                                    id="date"
                                    label="Possiable Move Date"
                                    type="date"
                                    defaultValue="2020-07-05"
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    size="small"
                                    variant="outlined"
                                    className={classes.formControl}
                                />                                         
                                </FormControl>   
                                <FormControl>                            
                                <TextField
                                    id="date"
                                    label="Moveing Date"
                                    type="date"
                                    defaultValue="2020-07-05"
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    size="small"
                                    size="small"
                                    variant="outlined"
                                    className={classes.formControl}
                                />                                         
                            </FormControl>
                            
                            <FormControl>                            
                                <TextField
                                    id="date"
                                    label="Follow Up Date"
                                    type="date"
                                    defaultValue="2020-07-05"
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    size="small"
                                    size="small"
                                    variant="outlined"
                                    className={classes.formControl}
                                />                                         
                            </FormControl> 
                                
                            </Grid>
                        
                            <Grid item xs={6}>
                            <FormControl variant="outlined" className={classes.formControl} margin='dense'>                            
                                    <InputLabel htmlFor="paymentType">Payment Type</InputLabel>
                                    <Select 
                                    inputProps={{
                                        name:'paymentType',
                                        id:"paymentType"
                                    }}
                                    label="Payment Type" 
                                    value={paymentType} 
                                    onChange={handlePaymentType}>
                                        <option value={1}>Cash</option>
                                        <option value={2}>Credit</option>                                    
                                    </Select>                                  
                            </FormControl>   
                            <FormControl variant="outlined" className={classes.formControl} margin="dense">                            
                                    <InputLabel htmlFor="resMove">Residencial/Commercial Move</InputLabel>
                                    <Select 
                                    inputProps={{
                                        name:'resMove',
                                        id:"resMove"
                                    }}
                                    label="Residencial/Commercial Move"                                    
                                    value={resMove} 
                                    onChange={handleResMove}>
                                    <option value={1}>Residencial</option>
                                    <option value={0}>Commercial</option>                                    
                                    </Select>                                  
                            </FormControl>                    
                          
                            <FormControl>                            
                                <TextField
                                    id="date"
                                    label="Contact Date"
                                    type="date"
                                    defaultValue="2020-07-05"
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    size="small"
                                    variant="outlined"
                                    className={classes.formControl}
                                />     
                            </FormControl>
                               
                            <FormControl>                            
                                <TextField
                                    id="date"
                                    label="Packing Date"
                                    type="date"
                                    defaultValue="2020-07-05"
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    size="small"
                                    variant="outlined"
                                    className={classes.formControl}
                                />                           
                            </FormControl>                               

                             <FormControl>                            
                                <TextField
                                    id="date"
                                    label="Delivery Date"
                                    type="date"
                                    defaultValue="2020-07-05"
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    size="small"
                                    variant="outlined"
                                    className={classes.formControl}
                                />                                         
                            </FormControl> 
                            <FormControl>                           
                                <TextField
                                    defaultValue="2.5"
                                    label="Cost Per Miles"
                                    id="cost_per_miles"
                                    className={classes.textField}                                    
                                    InputLabelProps={{shrink: true}}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                    }}
                                    size="small"
                                    variant="outlined"
                                    className={classes.formControl}
                                />                           
                            </FormControl>                                                    
                            
                            </Grid>                   
                        </Grid>   
                        </AccordionDetails>

                        
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        >
                        <Typography>Contact Details</Typography>
                        
                        </AccordionSummary>
                        <AccordionDetails>
                        <Grid container spacing={1}>                   
                           <Grid item xs={6}>
                                <FormControl className={classes.formControl}>                       
                                
                                    <TextField 
                                        id="firstname"
                                        variant="outlined"  
                                        size="small"
                                        label="First Name"
                                    />                              
                                </FormControl>   
                                
                                <FormControl className={classes.formControl}>                           
                                    
                                    <TextField 
                                        id="phone1"
                                        variant="outlined"  
                                        size="small"
                                        label="Phone 1"    
                                    />                                     
                                </FormControl>   

                                <FormControl className={classes.formControl}>                     
                                   
                                    <TextField 
                                    id="email" 
                                    type="email"
                                    variant="outlined"  
                                    size="small"
                                    label="Email"
                                    />                              
                                </FormControl>                         
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl className={classes.formControl}>                            
                                
                                    <TextField 
                                        id="lastname"
                                        variant="outlined"  
                                        size="small"
                                        label="Last Name"    
                                    />                              
                                </FormControl>

                                <FormControl className={classes.formControl}>                            
                                   
                                    <TextField 
                                        id="phone2"
                                        variant="outlined"  
                                        size="small"
                                        label="Phone 2"
                                    />                              
                                </FormControl>

                                <FormControl variant="outlined" className={classes.formControl} margin='dense'>                             
                                    <InputLabel id="remindeMe">Reminder Me</InputLabel>
                                    <Select                                        
                                        id="remindeMe" 
                                        onChange={handleRemindeMe}
                                        value={remindeMe}                                                              
                                        label="Reminder Me"
                                        inputProps={{
                                            name: 'remindeme',
                                            id: 'remindeme',
                                        }}
                                    
                                    >
                                    <option value={10}>No Reminder</option>
                                    <option value={20}>Phone Call</option>
                                    <option value={30}>Email</option>
                                    <option value={40}>Fax</option>                                    
                                    </Select>                                  
                                </FormControl>   
                            </Grid>
                           
                            </Grid>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel3a-content" id="panel3a-header">
                            <Typography>Add Address</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <Grid container spacing={1}>                   
                                    <Grid item xs={6}>                               
                                        <FormControl className={classes.formControl}>                            
                                        <TextField 
                                            id="addressName" 
                                            label="Address Name" 
                                            variant="outlined"  
                                            size="small"
                                        />                             
                                </FormControl>  
                                <FormControl className={classes.formControl}> 
                                        <TextField 
                                            id="address" 
                                            label="Street, City, State, Zip" 
                                            variant="outlined"  
                                            size="small"
                                        />                             
                                </FormControl>    
                                <FormControl variant="outlined" className={classes.formControl} margin='dense'>                            
                                    <InputLabel id="defaultFloor">Default Floor</InputLabel>
                                    <Select 
                                        value={addressType}
                                        onChange={handleDefaultFloor}                                    
                                        label="Default Floor"
                                        inputProps={{
                                            name: 'defaultFloor',
                                            id: 'defaultFloor',
                                        }}
                                    >
                                    <option value={0}>0</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>   
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>  
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>
                                    <option value={11}>11</option>                                   
                                    </Select>                                  
                                </FormControl> 
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={check.checkedB}
                                        onChange={handleCheckboxChange}
                                        name="checkedB"
                                        color="primary"
                                        value="1"
                                    />
                                    }
                                    label="Has Elevator"
                                    className={classes.formControl}
                                />                          
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl variant="outlined" className={classes.formControl} margin='dense'>                            
                                <InputLabel htmlFor="addressType">Address Type</InputLabel>      
                                    <Select 
                                        value={addressType}
                                        onChange={handleAddressType}                                    
                                        label="Address Type"
                                        inputProps={{
                                            name: 'addressType',
                                            id: 'addressType',
                                        }}
                                    >
                                    <option value={0}>Pick up</option>
                                    <option value={1}>Drop off</option>                                
                                    </Select>     
                                </FormControl>
                                <FormControl variant="outlined" className={classes.formControl} margin='dense'>                            
                                    <InputLabel id="propertyType">Property Type</InputLabel>
                                    <Select 
                                        id="propertyType" 
                                        value={propertyType} 
                                        onChange={handlePropertyType}
                                        label="Property Type"
                                        inputProps={{
                                            name: 'propertyType',
                                            id: 'propertyType',
                                        }}
                                    >
                                    <option value={0}>Home</option>
                                    <option value={1}>Apartment</option>
                                    <option value={2}>Twon Home</option>
                                    <option value={3}>Storage</option>   
                                    <option value={4}>office</option>
                                    <option value={5}>Other</option>
                                                                    
                                    </Select>                                  
                                </FormControl> 
                                
                                <FormControl variant="outlined" className={classes.formControl} margin='dense'>                            
                                    <InputLabel id="walkDistance">Walk Distance</InputLabel>
                                    <Select                                       
                                        value={walkDistance} 
                                        onChange={handleWalkDistance}
                                        label="Walk Distance"
                                        inputProps={{
                                            name: 'walkDistance',
                                            id: 'walkDistance',
                                        }}
                                    >
                                    <option value={0}>0 Yard</option>
                                    <option value={1}>1 Yard</option>
                                    <option value={2}>2 Yard</option>
                                    <option value={3}>3 Yard</option>                                    
                                    </Select>                                  
                                </FormControl>  
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={check.checkedB}
                                        onChange={handleCheckboxChange}
                                        name="checkedB"
                                        color="primary"
                                        value="1"
                                    />
                                    }
                                    label="Overried Milege"
                                    className={classes.formControl}
                                />       
                            </Grid>
                           
                           
                            </Grid>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        >                        
                        <Typography> Room Details</Typography>
                        
                        </AccordionSummary>
                        <AccordionDetails>
                        <Card className={classes.roomDetailCard} variant="outlined">
                        <Grid container spacing={1}>  
                                                        
                            <Grid item xs={6}>
                                <FormControl className={classes.formControl}>                            
                                    <TextField 
                                        id="room" 
                                        variant="outlined"
                                        label="Room"
                                        size="small"

                                    />                              
                                </FormControl>  

                                <FormControl variant="outlined" className={classes.formControl} margin='dense'>                            
                                <InputLabel id="roomType">Room Type</InputLabel>
                                    <Select                                       
                                        onChange={handleRoomType} 
                                        label="Room Type"
                                        size="small"
                                        inputProps={{
                                            name: 'roomType',
                                            id: 'roomType',
                                        }}
                                    >
                                        <option value={1}>Dining</option>
                                        <option value={2}>Study</option>                               
                                    </Select>                                  
                                </FormControl>   

                                <FormControl variant="outlined" className={classes.formControl} margin='dense'>                            
                                <InputLabel htmlFor="defaultItem">Default Deliverable Items</InputLabel>
                                <Select 
                                    label="Default Deliverable Items" 
                                    onChange={handleDefaultItems} 
                                    className={classes.font_size}
                                    size="small"
                                    inputProps={{
                                        name: 'defaultItem',
                                        id: 'defaultItem',
                                    }}
                                >
                                    <option value={0}>None</option>
                                    <option value={1}>Dining</option>
                                    <option value={2}>Stuty</option>                               
                                </Select>                                  
                                </FormControl>  

                                <FormControl className={classes.formControl}>                
                                    <TextField 
                                        id="floor"
                                        label="floor" 
                                        variant="outlined"  
                                        size="small"
                                    />                              
                                </FormControl>                   
                            </Grid>                         
                           
                            <Grid item xs={6}>
                                    <FormControl variant="outlined" className={classes.formControl} margin='dense'>                            
                                        <InputLabel htmlFor="points">Item</InputLabel>       
                                        <Select 
                                            value={item}
                                            onChange={handleItem}
                                            label="Item"
                                            size="small"
                                            inputProps={{
                                                name: 'item',
                                                id: 'item',
                                            }}
                                        >
                                            <option value={1}>Dining Table</option>
                                            <option value={2}>Chair</option>                               
                                        </Select>                                  
                                    </FormControl>  

                                    <FormControl className={classes.formControl}>                            
                                        
                                        <TextField 
                                            id="quantity"
                                            variant="outlined"
                                            label="Quantity"
                                            size="small"
                                        
                                        />                              
                                    </FormControl>    

                                    <FormControl  variant="outlined" className={classes.formControl} margin='dense'>                            
                                        <InputLabel htmlFor="relatedRoom">Related Item</InputLabel>
                                        <Select 
                                            value={relatedItem}
                                            onChange={handleRelatedItem}
                                            label="Related Item"
                                            size="small"                                            
                                            inputProps={{
                                                name: 'relatedItem',
                                                id: 'relatedItem',
                                            }}
                                        >
                                            <option value={1}>Dining Table</option>
                                            <option value={2}>Chair</option>                               
                                        </Select>                                  
                                    </FormControl> 
                                    <FormControl className={classes.formControl}>                            
                                     <TextField 
                                            id="point"
                                            variant="outlined"
                                            label="Point Or Price"
                                            size="small"
                                        
                                        />                                                         
                                    </FormControl>  
                            </Grid>
                                             
                        </Grid>                 
                        </Card> 
                        <Grid>
                            <Button variant="contained" color="secondary">
                                +
                            </Button>
                        </Grid> 
                            
                    </AccordionDetails>
                    </Accordion>

                    
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        >
                        
                        <Typography>Address Boxes</Typography>
                        
                        </AccordionSummary>
                        <AccordionDetails>
                        <Card className={classes.addressBoxCard} variant="outlined">
                        <Grid container spacing={1}>  
                        
                        <Grid item>
                        <FormControl className={classes.addressBox}>                            
                            <TextField 
                                id="quantity" 
                                label="Quantity" 
                                variant="outlined"  
                                size="small"                                    
                            />                              
                            </FormControl>
                        </Grid>  
                        <Grid item>
                        <FormControl className={classes.formControl}>                            
                            <TextField 
                                id="description" 
                                label="Description" 
                                variant="outlined"  
                                size="small"
                                
                            />                              
                            </FormControl>
                        </Grid>
                        <Grid item>
                                       
                            <FormControl className={classes.addressBox}>                            
                            <TextField 
                                id="price" 
                                label="Price" 
                                variant="outlined"  
                                size="small"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                            />                              
                            </FormControl>                            
                           
                        </Grid>

                        <Grid item>                                              
                            <FormControl className={classes.addressBox}>                            
                            <TextField 
                                id="staircharge" 
                                label="Stair Charge" 
                                variant="outlined"  
                                size="small"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">%</InputAdornment>,
                                }}
                            />                              
                            </FormControl>            
                           
                        </Grid>
                        <Grid item>     
                        <FormControl  variant="outlined" className={classes.addressBox} margin='dense'>                            
                            <InputLabel htmlFor="pufloor">P.U. Floor</InputLabel>
                            <Select 
                                value={relatedItem}
                                onChange={handleRelatedItem}
                                label="P.U. Floor"
                                size="small"                                            
                                inputProps={{
                                    name: 'pufloor',
                                    id: 'pufloor',
                                }}
                            >
                                <option value={1}>1</option>
                                <option value={2}>2</option> 
                                <option value={1}>3</option>
                                <option value={2}>4</option> 
                                <option value={1}>5</option>
                                <option value={2}>6</option>                               
                            </Select>                                  
                        </FormControl> 
                        </Grid>
                        <Grid item>     
                        <FormControl  variant="outlined" className={classes.addressBoxDo} margin='dense'>                            
                            <InputLabel htmlFor="doloc">D.O. Loc</InputLabel>
                            <Select 
                                value={relatedItem}
                                onChange={handleRelatedItem}
                                label="D.O. Loc"
                                size="small"                                            
                                inputProps={{
                                    name: 'doloc',
                                    id: 'doloc',
                                }}
                            >
                                <option value={1}>1</option>
                                <option value={2}>2</option> 
                                <option value={1}>3</option>
                                <option value={2}>4</option> 
                                <option value={1}>5</option>
                                <option value={2}>6</option>                               
                            </Select>                                  
                        </FormControl> 
                        </Grid>
                        <Grid item>     
                        <FormControl  variant="outlined" className={classes.addressBoxDo} margin='dense'>                            
                            <InputLabel htmlFor="dofloor">D.O. Floor</InputLabel>
                            <Select 
                                value={relatedItem}
                                onChange={handleRelatedItem}
                                label="D.O. Floor"
                                size="small"                                            
                                inputProps={{
                                    name: 'dofloor',
                                    id: 'dofloor',
                                }}
                            >
                                <option value={1}>1</option>
                                <option value={2}>2</option> 
                                <option value={1}>3</option>
                                <option value={2}>4</option> 
                                <option value={1}>5</option>
                                <option value={2}>6</option>                               
                            </Select>                                  
                        </FormControl>
                        </Grid>
                        <Grid>
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={check.checkedB}
                                onChange={handleCheckboxChange}
                                name="packingservice"
                                color="primary"
                                value="1"
                            />
                            }
                            label="Packing Service"
                            className={classes.formControl}
                        />
                        </Grid>           
                        
                       
                    </Grid> 
                   
                    <Grid container spacing={1}>  
                        <Grid>
                            <Card className={classes.addressBoxEstimate} variant="outlined">
                                <CardContent>
                                    
                                        <FormControl className={classes.addressBoxDo}>                            
                                            <TextField 
                                                id="boxmovingcost" 
                                                label="Box moving cost" 
                                                variant="outlined"  
                                                size="small"
                                                InputProps={{
                                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                                }}
                                            />                              
                                        </FormControl> 
                                    
                                    
                                        <FormControl className={classes.addressBoxDo}>                            
                                            <TextField 
                                                id="materials" 
                                                label="Materials" 
                                                variant="outlined"  
                                                size="small"
                                                InputProps={{
                                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                                }}
                                            />                              
                                        </FormControl>
                                    
                                        <FormControl className={classes.addressBoxDo}>                            
                                        <TextField 
                                            id="packingestimated" 
                                            label="Packing Estimated" 
                                            variant="outlined"  
                                            size="small"
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                            }}
                                        />                              
                                        </FormControl>
                                    
                                    
                                </CardContent>
                        
                            </Card>
                        </Grid>
                    </Grid>
                    </Card>                   
                        <Grid>
                            <Button variant="contained" color="secondary">
                                +
                            </Button>
                        </Grid>  
                   
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        >
                        
                        <Typography>Equipment Rental</Typography>
                       
                        </AccordionSummary>
                        <AccordionDetails>
                        <Grid container spacing={1}>  
                                                        
                            <Grid item xs={6}>                                                          
                                <FormControl variant="outlined" className={classes.formControl} margin='dense'>                            
                                    <InputLabel id="equipmentName">Equipment Name</InputLabel>
                                    <Select 
                                        value={equipmentName}
                                        onChange={handleEquipmentName}
                                        label="Equipment Name"
                                        size="small"                                            
                                        inputProps={{
                                            name: 'equipmentName',
                                            id: 'equipmentName',
                                        }}
                                    >
                                    <option value={1}>Equp1</option>
                                    <option value={2}>Equp1</option>
                                    <option value={3}>Equp1</option>
                                    <option value={4}>Equp1</option>
                                    <option value={5}>Equp1</option>
                                    <option value={6}>Demo1</option>
                                    </Select>                                  
                                </FormControl>                            
                            </Grid>
                            
                            <Grid item xs={6}>
                                <FormControl className={classes.formControl}>                           
                                <TextField 
                                    id="cost" 
                                    label="Cost" 
                                    variant="outlined"  
                                    size="small"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                    }}
                                />                             
                                </FormControl>
                            </Grid>
                           
                           
                        </Grid> 
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        >
                        
                        <Typography>Line Item Adjustment</Typography>
                       
                        </AccordionSummary>
                        <AccordionDetails>
                        <Grid container spacing={1}>  
                            <Grid item xs={6}>
                                    <FormControlLabel className={classes.formControl}
                                    control={
                                    <Checkbox                                        
                                        onChange={handleCheckboxChange}
                                        name="checkedB"
                                        color="primary"
                                        value="1"
                                    />
                                    }
                                    label="Override Extra Stop Charge"
                                    className={classes.font_size}
                            />       
                                
                            <FormControlLabel className={classes.formControl}
                                control={
                                <Checkbox                                        
                                    onChange={handleCheckboxChange}
                                    name="checkedB"
                                    color="primary"
                                    value="1"
                                />
                                }
                                label="Overried Service Charge"
                                className={classes.font_size}
                                />  
                            </Grid>                                    
                            <Grid item xs={6}>
                                <FormControl  className={classes.formControl}>                            
                                    <TextField 
                                    id="description" 
                                    label="Description" 
                                    variant="outlined"  
                                    size="small"
                                    />                             
                                </FormControl>                             
                                                           
                                <FormControl className={classes.formControl}>                            
                                <TextField 
                                    id="amount" 
                                    label="Amount" 
                                    variant="outlined"  
                                    size="small"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                    }}
                                />                              
                                </FormControl>
                            </Grid>
                           
                           
                        </Grid> 
                        </AccordionDetails>
                    </Accordion>


                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        >
                        
                        <Typography>Store and transit</Typography>
                       
                        </AccordionSummary>
                        <AccordionDetails>
                        <Grid container spacing={1}>  
                        
                            <Grid item xs={4}>
                            <FormControl className={classes.formControlStoreText}>                            
                                <TextField 
                                    id="truck" 
                                    label="Truck" 
                                    variant="outlined"  
                                    size="small"                                    
                                />                              
                                </FormControl>
                            </Grid>  
                                
                           
                                                            
                        <Grid item xs={4}>
                        <FormControl className={classes.formControlStoreText}>                            
                                <TextField 
                                    id="night" 
                                    label="Night" 
                                    variant="outlined"  
                                    size="small"
                                    
                                />                              
                                </FormControl>
                            </Grid>
                            
                            <Grid item xs={4}>
                                                  
                                <FormControl className={classes.formControlStoreText}>                            
                                <TextField 
                                    id="truckCost" 
                                    label="Truck Cost" 
                                    variant="outlined"  
                                    size="small"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                    }}
                                />                              
                                </FormControl>                            
                               
                            </Grid>
                           
                           
                        </Grid> 
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        >
                        
                        <Typography>FVP</Typography>
                       
                        </AccordionSummary>
                        <AccordionDetails>
                        <Grid container spacing={1}>  
                       
                            <Grid item xs={6}>
                                <FormControl variant="outlined" margin="dense" className={classes.formControl}>                            
                                    <InputLabel htmlFor="declaredValue">Declared Value</InputLabel>                                    
                                    <Select 
                                        value={declaredValue}
                                        onChange={handleDeclaredValue}
                                        label="Declared Value"
                                        size="small"
                                        inputProps={{
                                            name: 'declaredValue',
                                            id: 'declaredValue',
                                        }}
                                    >
                                    <option value={0}>None</option>
                                    <option value={1}>Customer Decline FVP</option>
                                    
                                    </Select>                                
                                </FormControl>
                            </Grid>  
                                
                           
                                                            
                            <Grid item xs={6}>
                                <FormControl className={classes.formControl}>                            
                                <TextField 
                                    id="fvpCost" 
                                    label="Cost" 
                                    variant="outlined"  
                                    size="small"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                    }}
                                />                              
                                </FormControl> 
                            </Grid>                        
                        </Grid> 
                        </AccordionDetails>
                    </Accordion>


                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        >
                        
                        <Typography>Notes</Typography>
                       
                        </AccordionSummary>
                        <AccordionDetails>
                        <Grid container spacing={1}>
                                           
                            <Grid item xs={12}>
                                <FormControl className={classes.formControl}>                            
                                <TextField                                    
                                    label="Notes"                                    
                                    variant="outlined"
                                    multiline                                    
                                    labelWidth={300}
                                    rows={4}
                                    />                             
                                </FormControl>
                            </Grid>
                        
                        </Grid> 
                        </AccordionDetails>
                    </Accordion>



                    </Paper>
               


                {/* Side Bar Paper */}
                <div className={classes.basicinfo}>                    
                        <Paper elevation={3} component = "div" className={classes.basicconf}>
                            <Typography variant="h6" className={commonClasses.heading}>
                              Basic Conf
                            </Typography>
                            <Divider/>
                            <TextField
                            defaultValue="60"
                            label="Standard hourly rate"
                            id="standard_hourly_rate"
                            className={clsx(classes.margin, classes.textField)}
                            size="small"
                            variant="outlined"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                            />

                            <TextField
                            defaultValue="65"
                            label="Prime hourly rate"
                            id="prime_hourly_rate"
                            className={clsx(classes.margin, classes.textField)}
                            size="small"
                            variant="outlined"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                            />

                            <TextField
                            defaultValue="2.5"
                            label="Price per box"
                            id="price_per_box"
                            className={clsx(classes.margin, classes.textField)}
                            size="small"
                            variant="outlined"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                            />

                            <TextField
                            defaultValue="8.5"
                            label="Dollars per points"
                            id="dollars_per_points"
                            className={clsx(classes.margin, classes.textField)}
                            size="small"
                            variant="outlined"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                            />

                            <TextField
                            defaultValue="60"
                            label="Estimated crew time"
                            id="estimated_crew_time_divisor"
                            className={clsx(classes.margin, classes.textField)}
                            size="small"
                            variant="outlined"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                            />
                            
                        </Paper>
                   

                    {/* End Basic conf */}


                    {/* Estimated Cost */}
                    
                        <Paper elevation={3} component = "div" className={classes.estimation}>
                            <Typography variant="h6" className={commonClasses.heading}>
                               Estimated Cost
                            </Typography>
                            <Divider/>

                            <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                
                                <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.desc} >
                                    <TableCell nowrap>{row.desc}</TableCell>
                                    <TableCell align="right">{row.qty}</TableCell>
                                    <TableCell align="right">{row.unit}</TableCell>
                                    <TableCell align="right">${ccyFormat(80)}</TableCell>
                                    </TableRow>
                                ))}

                                <Typography variant="h6" className={commonClasses.heading}>Additionals</Typography>                               
                                
                                <TableRow>                                    
                                    <TableCell colSpan={3}>Line Item Adjustment</TableCell>
                                    <TableCell align="right" id="lineitem">${ccyFormat(100)}</TableCell>
                                </TableRow> 
                                <TableRow>
                                    
                                    <TableCell colSpan={3}>Service Charge</TableCell>
                                    <TableCell align="right" id="servicecharge">${ccyFormat(100)}</TableCell>
                                </TableRow>    
                                <TableRow>
                                   
                                    <TableCell colSpan={3} className={classes.color}>Estimated Total Credit</TableCell>
                                    <TableCell align="right" id="totalcredit">${ccyFormat(600)}</TableCell>
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell colSpan={3} className={classes.color}>Esimated Total Cash</TableCell>
                                    <TableCell align="right" id="total">${ccyFormat(650)}</TableCell>
                                </TableRow>
                                </TableBody>
                            </Table>
                            </TableContainer>

                        </Paper>
                   
                    {/* End of Estimated cost */}
                </div>
                </div>
        </main>
        </div>:history.push('/login')
        }
        </>
      )
}
export default CreateJob; 