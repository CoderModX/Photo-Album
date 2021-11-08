import { Typography,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container,Button} from "@mui/material";
import React from "react";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import useStyles from "./styles";

const cards = [1,2,3,4,5,6,7,8,9]
const currentYear = new Date().getFullYear();

function App(){
    const classes= useStyles();
    return(
        <>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCameraIcon className={classes.icons}/>
                    <Typography  variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hello, Everyone. This is a photo album. The Frontend of this website/app is created using MaterialUI in ReactJS.
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing ={2} justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See Photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary Action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth='md' style={{marginTop:'20px'}}>
                <Grid container spacing={4} >
                {cards.map((card)=>(
                    <Grid item key={card} xs={12} sm={6} md={4}> 
                        <Card className={classes.card}>
                            <CardMedia 
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5">
                                    Heading
                                </Typography>
                                <Typography>
                                    This is a media card. You can use this section to describe the content.
                                </Typography>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        View
                                    </Button>
                                    <Button size="small" color="primary">
                                        Edit
                                    </Button>
                                </CardActions>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                </Grid>
            </Container>
            </main>
            <footer className={classes.footer}>
                <Typography vairant='h6' align='center' gutterBottom>
                    Footer
                </Typography>
                <Typography vairant='subtitle1' align='center' color='textSecondary'>
                    Photo Album © {currentYear}
                </Typography>
            </footer>
        </>
    )
}

export default App;