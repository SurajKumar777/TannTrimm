import React from 'react'
import Navbar from './Navbar'
import classes from "./Layout.module.css"
import SubCatagories from './SubCatagories'

const Layout = (props) => {
    return (
        <div>
            <Navbar />
            <SubCatagories />
            <main className={classes.main}>{props.children}</main>
        </div >
    )
}

export default Layout