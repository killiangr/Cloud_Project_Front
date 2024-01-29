import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

export default function Vehicule() {
    const paperStyle = {padding:"10px" , width:600, margin:'20px auto'}
    const[marque, setMarque]=React.useState('')
    const[type, setType]=React.useState('')
    const[modele, setModele]=React.useState('')
    const[nom, setNom]=React.useState('')
    const[utilisateur, setUtilisateur]=React.useState('')

    const[vehicules, setVehicules]=React.useState([])

    const url = "http://localhost:8080/vehicule/add"
    const handleClick = (e)=>{
      e.preventDefault()
      const Vehicule = {marque, type, modele, nom}
      console.log(Vehicule)
      fetch(url, {
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(Vehicule)
      }).then(()=>{
        console.log("New Vehicule Added")
      })
    }

  React.useEffect(()=>{
    fetch("http://localhost:8080/vehicule/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setVehicules(result);
    })
  })

  return (
    <Container>
        <Paper elevation={3} square={false} style={paperStyle}>
            <h1 style={{color:'#1976D2'}}>Ajouter un Vehicule</h1>
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
              <TextField id="outlined-basic" label="Marque" variant="outlined" fullWidth
              value={marque}
              onChange={(e)=>setMarque(e.target.value)}/>
              <TextField id="outlined-basic" label="Type" variant="outlined" fullWidth
              value={type}
              onChange={(e)=>setType(e.target.value)}/>
              <TextField id="outlined-basic" label="Modele" variant="outlined" fullWidth
              value={modele}
              onChange={(e)=>setModele(e.target.value)}/>
              <TextField id="outlined-basic" label="Nom" variant="outlined" fullWidth
              value={nom}
              onChange={(e)=>setNom(e.target.value)}/>
              <TextField id="outlined-basic" label="Utilisateur" variant="outlined" fullWidth
              value={utilisateur}
              onChange={(e)=>setUtilisateur(e.target.value)}/>
            </Box>
            <Button variant="contained" onClick={handleClick}>
              Submit
            </Button>
        </Paper>

        <h1 style={{color:'#1976D2'}}>Vehicules</h1>

        <Paper elevation={3} square={false} style={paperStyle}>
          {vehicules.map(vehicule=>(
            <Paper elevation={6} square={false} style={{margin:"10px", padding:"5px", textAlign:"left"}} key={vehicule.id}>
              Marque: {vehicule.marque}<br/>
              Type: {vehicule.type}<br/>
              Modele: {vehicule.modele}<br/>
              Nom: {vehicule.nom}<br/>
            </Paper>
          ))}
        </Paper>

    </Container>
  );
}