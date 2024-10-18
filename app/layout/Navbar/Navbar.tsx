"use client"
import React, { useState } from 'react'

import styles from './Navbar.module.css'
import Link from 'next/link'


// For React Icons
import { HiBars3BottomRight } from "react-icons/hi2";
import { MdOutlineCloseFullscreen } from "react-icons/md";


// For Components
import { Button } from '@/app/Components/Button/Button'

interface NavLinkProps {
    LinkText: string,
    LinkTo: string,
}


const NavLink: NavLinkProps[] = [
    {
        LinkText: "Home",
        LinkTo: ""
    }, {
        LinkText: "About",
        LinkTo: ""
    }, {
        LinkText: "Games",
        LinkTo: ""
    }, {
        LinkText: "Team",
        LinkTo: ""
    }, {
        LinkText: "Contact",
        LinkTo: ""
    },
]


export const Navbar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleSlider = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className={styles.Navbar}>

            <div>
                <Link href={"/"}>
                    <img src="/assets/logo.jpg" alt="" />
                </Link>
            </div>

            <div className={styles.NavLinks}>
                {
                    NavLink.map((I) => (
                        <div key={I.LinkText}>
                            <Link href={I.LinkTo}>{I.LinkText}</Link>
                        </div>
                    ))
                }
            </div>



            <div className={styles.BtnBox}>
                <Button
                    LinkText='Login Now'
                    LinkTo=''
                />
            </div>


            <HiBars3BottomRight
                className={styles.MenuIcon}
                onClick={toggleSlider}
            />

            <div className={`${styles.Slider} ${isOpen ? styles.Open : ''}`}>
                <div className={styles.SliderContent}>
                    <MdOutlineCloseFullscreen
                        className={styles.CloseIcon}
                        onClick={toggleSlider}
                    />

                    <div>
                        <Link href={"/"}>
                            <img src="/assets/logo.jpg" alt="" />
                        </Link>
                    </div>

                    {
                        NavLink.map((I) => (
                            <div key={I.LinkText} className={styles.PhoneNavLink}>
                                <Link href={I.LinkTo}>{I.LinkText}</Link>
                            </div>
                        ))
                    }

                    <Button
                        LinkText='Login Now'
                        LinkTo=''
                    />

                </div>
            </div>





        </nav>
    )
}
