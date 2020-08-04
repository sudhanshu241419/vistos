import React from 'react'
//import Navbar from './header/mainnavbar'
import Navbar from './header/sidebar'
import Header from './header/header'
import Particles from 'react-particles-js'
import {makeStyles} from '@material-ui/styles'

const useStyle = makeStyles({
    particlesCanvas:{
        position:"absolute",
        opacity:"0.3"
    }
})
const Home =()=> {   
const classes = useStyle();
return (
    <div>
        <Particles
        canvasClassName={classes.particlesCanvas}
            params={{
                particles:{
                    nunber:{
                        value:50,
                        density:{
                            enable:true,
                            area:900
                        }
                    },
                    shape:{
                        type:"circle",
                    },
                    stroke:{
                        width:10,
                        color:"tomato",
                        opacity:5
                    },
                    size:{
                        value:10,
                        random:true,
                        color:"tomato",
                        animation:{
                            destroy:false,
                            enable:false,
                            minimumValue:0.1,
                            speed:40,
                            sync:false
                        }
                    },
                    opacity:{
                        value:1,
                        random:{enable:true},
                        animation:{
                            enable:false,
                            speed:1,
                            opacity_min:0.1,
                            sync:false
                        }
                    }
                }
            }
        }
             />
        <Navbar/>
        <Header/>
    </div>
)

}
export default Home;