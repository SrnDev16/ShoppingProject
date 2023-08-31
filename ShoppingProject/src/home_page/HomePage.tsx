import { Container, Grid, Paper } from "@mui/material"
import AppBarComponent from "./components/AppBarComponent"
import MenuData from "../data/MenuData"
import MyCard from "./components/MyCard"

const HomePage = () => {
  return (
   <>
   <AppBarComponent/>
   <Container maxWidth="lg" component={Paper} sx={{mt:2}}>
    <Grid container spacing={2}>
        {MenuData.map((item,index)=>{
            return <MyCard key={index} {...item}/>
        })}
    </Grid>
   </Container>
   </> 
  )
}

export default HomePage