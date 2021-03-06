import React, { useState } from 'react'
import './Banner.css'
import { Button } from "@material-ui/core";
import Search from './Search'
import { useHistory } from "react-router-dom"

function Banner() {
    const history = useHistory()
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="banner">
            <div className="banner_search">
                {showSearch && <Search />}

                <Button onClick={() => {
                    setShowSearch(!showSearch)
                }}
                    variant="outlined" className='banner_searchButton'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>

            </div>
            <div className="banner_info">
                <h1>Get out and streach your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <Button onClick={() => history.push('/search')} variant="outlined" >Explore now!</Button>
            </div>
        </div>
    )
}
export default Banner