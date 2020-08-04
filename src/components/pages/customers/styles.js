import {makeStyles} from '@material-ui/core/styles'
export default makeStyles( theme=>({
    root: {
      width: '70%',
      marginLeft: theme.spacing(2),
      marginTop: theme.spacing(3), 
    },
    container: {
      maxHeight: 440,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
    
  }));