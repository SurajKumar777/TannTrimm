import React from 'react'
import Image from 'next/image'
import classes from "./SubCatagories.module.css"
import Link from 'next/link'
import Data from "../Data/Data"

const SubCatagories = () => {
    return (
        <main className={classes.main}>
            {
                Data.map((val, ind) => {
                    return (
                        <>
                            <div className={classes.catagoriesCard} key={ind} >
                                <Link href="/" >
                                    <Image src={val.icon} alt='...' width="auto" height="auto" />
                                    <div className={classes.title}>
                                        <span>{val.title}</span>
                                    </div>
                                </Link>
                            </div>
                        </>
                    )
                })
            }
        </main>
    )
}

export default SubCatagories