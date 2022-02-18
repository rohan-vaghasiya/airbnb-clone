import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to='/'>
                <img className="header_icon" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="" />
            </Link>

            <div className="header_center" >
                <input type="text" name="" id="" />
                <SearchIcon />
            </div>

            <div className="header_right">
                <p>Become host</p>
                <LanguageSharpIcon />
                <ExpandMoreSharpIcon />
                <Avatar />
            </div>
        </div>


    )
}

export default Header
