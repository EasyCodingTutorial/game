import React from 'react'

import styles from './Footer.module.css'


import Link from 'next/link'
const GetHelp = [
    {
        LinkText: "Contact Support",
        LinkTo: "",
    },
    {
        LinkText: "Troubleshooting",
        LinkTo: "",
    },
    {
        LinkText: "FAQs",
        LinkTo: "",
    },
    {
        LinkText: "Technical Assistance",
        LinkTo: "",
    },
];

const Info = [
    {
        LinkText: "About Us",
        LinkTo: "",
    },
    {
        LinkText: "Game Library",
        LinkTo: "",
    },
    {
        LinkText: "Careers",
        LinkTo: "",
    },
    {
        LinkText: "Community Events",
        LinkTo: "",
    },
];

const CustomerServices = [
    {
        LinkText: "My Account",
        LinkTo: "",
    },
    {
        LinkText: "Game Subscriptions",
        LinkTo: "",
    },
    {
        LinkText: "Redeem Codes",
        LinkTo: "",
    },
    {
        LinkText: "Game Updates",
        LinkTo: "",
    },
];

export const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.FooterRow}>
                <div>
                    <img src="/assets/logo.jpg" alt="" />
                </div>


                <div>
                    <h6>Get Help</h6>
                    {
                        GetHelp.map((I: any) => (
                            <div key={I.LinkText} className={styles.LinkText}>
                                <Link href={I.LinkTo}>👉 {I.LinkText}</Link>
                            </div>
                        ))
                    }
                </div>


                <div>
                    <h6>Information</h6>
                    {
                        Info.map((I: any) => (
                            <div key={I.LinkText} className={styles.LinkText}>
                                <Link href={I.LinkTo}>👉 {I.LinkText}</Link>
                            </div>
                        ))
                    }
                </div>


                <div>
                    <h6>Customer Services</h6>
                    {
                        CustomerServices.map((I: any) => (
                            <div key={I.LinkText} className={styles.LinkText}>
                                <Link href={I.LinkTo}>👉 {I.LinkText}</Link>
                            </div>
                        ))
                    }
                </div>

            </div>


            <div className={styles.FooterRow1}>
                <p>Copyright © 2024. All Rights Reserved</p>
            </div>


        </footer>
    )
}
