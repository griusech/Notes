import React from 'react'
import './Navbar.css'
import { Avatar } from '@material-ui/core'
import { useStateValue } from '../../StateProvider'

const Navbar = () => {

    const [{ user }] = useStateValue();
    
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark text-white">
               
        <div className="container p-2">
            <div className="navbar-brand m-auto">
                <Avatar src={user.photoURL}/>
                <h6>{user.displayName}</h6>
            </div>
        </div>
    </nav>
        </div>
    )
}

export default Navbar