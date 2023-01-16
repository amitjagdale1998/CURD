import styled from "@emotion/styled";
import { FormControl, FormGroup,Input,InputLabel,Typography,Button} from "@mui/material";
import React from "react";
import {addUser} from '../service/api';
const Container=styled(FormControl)`
  width:50%;margin: 5px auto 0 auto;
  &> div{
    margin-top:20px;
  }
  `
  const defaultvalue=
  {
    name:"",
    username:"",
    email:"",
    phone:'',

  }

const AddUser=()=>
{
    const[user,setUser]=React.useState(defaultvalue);
    const  onValueChange=(e)=>
    {
        console.log(e.target.name,e.target.username,e.target.phone,e.target.value);
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
    }
    const adduserdetails= async()=>
    {
        console.log("api call")
        await addUser(user);
    }
    return(
        <>
        <Container>
        <Typography variant="h4" component="h5">
  Add User
</Typography>
        <FormGroup>
            <FormControl>
            
                <InputLabel>Name:</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>UserName:</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="username"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email:</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone:</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="phone"/>
            </FormControl>
            <FormControl>
            <Button variant="contained" onClick={()=>adduserdetails()}>Add User</Button>
            </FormControl>
        </FormGroup>
        </Container>
        </>
    )
}
export default AddUser;