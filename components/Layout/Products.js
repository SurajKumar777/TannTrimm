import React from 'react'
import Image from 'next/image'
import classes from "./Products.module.css"
import ProdCard from './ProdCard'


const Products = (props) => {
    return (
        <section className={classes.prodContainer}>
            <div className={classes.heading}>
                <p>products</p>
                <p>total products <Image src="/images/Vector4.png" alt="..." width="20" height="20" /></p>
            </div>
            <div className={classes.main}>
                {
                    props.ProdData.map((val) => {
                        return <ProdCard {...val} key={val.id} />
                    })
                }
            </div>

        </section>
    )
}

export default Products