import React from "react";
import {AppBar,Toolbar,styled}  from "@mui/material";
import {NavLink} from "react-router-dom"
const Tabs=styled(NavLink)`
 font-size:20px; margin-right:30px;color:inherit;
 `
const NavBar=()=>
{
    return(
        <>
        <AppBar position="static" >
            <Toolbar>
            <Tabs to="/" >Code For interViewvers</Tabs>
            <Tabs to="/allusers">All users</Tabs>
            <Tabs to="/addusers">Add Users</Tabs>

            </Toolbar>
        </AppBar>
        </>
    )
}
export default NavBar;