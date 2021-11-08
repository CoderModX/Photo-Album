import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme)=>({
    container: {
        marginTop:"100px",
        
    },
    btn:{
        backgroundColor: '#12824C',
        color: '#FFFF00'},
    icons:{
        marginRight:'20px',
    },
    buttons:{
        marginTop:'40px'
    },
    cardGrid:{
        padding:'20px 0px'
    },
    card:{
        height:'100%',
        display:'flex',
        flexDirection:'column'
    },
    cardMedia:{
        paddingTop:'56.25%' // 16:9
    },
    cardContent:{
        flexGrow: 1
    },
    footer:{
        backgroundColor: 'smokewhite',
        padding: '50px 0px'
    }

}));

export default useStyles;