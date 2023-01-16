import React from 'react'
import classes from "./ProdCard.module.css"
import Card from '../UI/Card'
import Link from 'next/link'

const ProdCard = ({ name, plpimaage, price, special_price, discount, id, }) => {
    return (
        <Card className={classes.prodCard}>
            <Link href={`/${id.toString()}`}>
                <img src={plpimaage} alt='...' />
                <p className={classes.title}>{name}</p>
            </Link>
            <div className={classes.prodInfo}>
                <div className={classes.info}>
                    <h2>₹{special_price}</h2>
                    <p><del>{price}</del></p>
                    <p><span>{`${discount}%OFF`}</span></p>
                </div>
                <div className={classes.icon}>
                    <img src="/images/Group 450.png" alt='...' />
                </div>
            </div>
        </Card >
    )
}

export default ProdCard