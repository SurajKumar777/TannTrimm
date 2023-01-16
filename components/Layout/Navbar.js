import React from 'react'
import classes from "./Navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <header>
            <div className={classes.links}>
                <Link href="/">
                    <Image src="/images/TANNTRIM.PNG" width="200" height="15" />
                </Link>
                <ul>
                    <li>
                        <Link href="/">
                            <Image src="/images/search.png" width="20" height="20" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <Image src="/images/user-alt.png" width="20" height="20" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <Image src="/images/bookmark.png" width="20" height="20" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <Image src="/images/shopping-bag.png" width="20" height="20" />
                        </Link>
                    </li>
                </ul>
            </div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/bags">bags</Link>
                    </li>
                    <li>
                        <Link href="/travels">travel</Link>
                    </li>
                    <li>
                        <Link href="/accessories">accessories</Link>
                    </li>
                    <li>
                        <Link href="/gifts">gifting</Link>
                    </li>
                    <li>
                        <Link href="/jewelerys">jewelery</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar