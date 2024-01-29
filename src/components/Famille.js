import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

export default function Famille() {
    const paperStyle = {padding:"10px" , width:600, margin:'20px auto'}
    const[nom_famille, setnom_Famille]=React.useState('')
    const[taille_famille, settaille_Famille]=React.useState('')
    const[nbr_vehicule, setnbr_Vehicule]=React.useState('')

    const[familles, setVehicules]=React.useState([])

    const url = "http://localhost:8080/famille/add"
    const handleClick = (e)=>{
      e.preventDefault()
      const Famille = {nom_famille, taille_famille, nbr_vehicule}
      console.log(Famille)
      fetch(url, {
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(Famille)
      }).then(()=>{
        console.log("New Famille Added")
      })
    }

  React.useEffect(()=>{
    fetch("http://localhost:8080/famille/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setVehicules(result);
    })
  })

  return (
    <Container>
        <Paper elevation={3} square={false} style={paperStyle}>
            <h1 style={{color:'#1976D2'}}>Ajouter une Famille</h1>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, 
                 //width: '25ch'
                 },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="nom_Famille" variant="outlined" fullWidth
              value={nom_famille}
              onChange={(e)=>setnom_Famille(e.target.value)}/>
              <TextField id="outlined-basic" label="taille_Famille" variant="outlined" fullWidth
              value={taille_famille}
              onChange={(e)=>settaille_Famille(e.target.value)}/>
              <TextField id="outlined-basic" label="nbr_Vehicule" variant="outlined" fullWidth
              value={nbr_vehicule}
              onChange={(e)=>setnbr_Vehicule(e.target.value)}/>
            </Box>
            <Button variant="contained" onClick={handleClick}>
              Submit
            </Button>
        </Paper>

        <h1 style={{color:'#1976D2'}}>Familles</h1>

        <Paper elevation={3} square={false} style={paperStyle}>
          {familles.map(famille=>(
            <Paper elevation={6} square={false} style={{margin:"10px", padding:"5px", textAlign:"left"}} key={famille.id}>
              nom_Famille: {famille.nom_famille}<br/>
              taille_Famille: {famille.taille_famille}<br/>
              nbr_Vehicule: {famille.nbr_vehicule}<br/>
            </Paper>
          ))}
        </Paper>

    </Container>
  );
}