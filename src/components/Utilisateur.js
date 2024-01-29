import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

export default function Utilisateur() {
    const paperStyle = {padding:"10px" , width:600, margin:'20px auto'}
    const[prenom, setPrenom]=React.useState('')
    const[nbr_vehicule, setnbr_Vehicule]=React.useState('')
    const[id_vehicule, setid_Vehicule]=React.useState('')

    const[utilisateurs, setVehicules]=React.useState([])

    const url = "http://localhost:8080/utilisateur/add"
    const handleClick = (e)=>{
      e.preventDefault()
      const Utilisateur = {prenom, nbr_vehicule, id_vehicule}
      console.log(Utilisateur)
      fetch(url, {
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(Utilisateur)
      }).then(()=>{
        console.log("New Utilisateur Added")
      })
    }

  React.useEffect(()=>{
    fetch("http://localhost:8080/utilisateur/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setVehicules(result);
    })
  })

  return (
    <Container>
        <Paper elevation={3} square={false} style={paperStyle}>
            <h1 style={{color:'#1976D2'}}>Ajouter un Utilisateur</h1>
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
              <TextField id="outlined-basic" label="Prenom" variant="outlined" fullWidth
              value={prenom}
              onChange={(e)=>setPrenom(e.target.value)}/>
              <TextField id="outlined-basic" label="nbr_Vehicule" variant="outlined" fullWidth
              value={nbr_vehicule}
              onChange={(e)=>setnbr_Vehicule(e.target.value)}/>
              <TextField id="outlined-basic" label="id_Vehicule" variant="outlined" fullWidth
              value={id_vehicule}
              onChange={(e)=>setid_Vehicule(e.target.value)}/>
            </Box>
            <Button variant="contained" onClick={handleClick}>
              Submit
            </Button>
        </Paper>

        <h1 style={{color:'#1976D2'}}>Utilisateurs</h1>

        <Paper elevation={3} square={false} style={paperStyle}>
          {utilisateurs.map(utilisateur=>(
            <Paper elevation={6} square={false} style={{margin:"10px", padding:"5px", textAlign:"left"}} key={utilisateur.id}>
              Prenom: {utilisateur.prenom}<br/>
              nbr_Vehicule: {utilisateur.nbr_vehicule}<br/>
              id_Vehicule: {utilisateur.id_vehicule}<br/>
            </Paper>
          ))}
        </Paper>

    </Container>
  );
}