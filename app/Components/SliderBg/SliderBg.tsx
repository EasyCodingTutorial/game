"use client"
import React, { useEffect, useState } from 'react'

import styles from './SliderBg.module.css'

export const SliderBg = () => {

    const Images = [
        '/assets/mainBg2.jpg',
        '/assets/mainBg3.jpg',
        '/assets/mainBg1.jpg'
    ]

    const [currentImgIndex, setCurrentImgIndex] = useState(0)

    // Function To Go To The  Next Image
    const nextImg = () => {
        setCurrentImgIndex((prevIndex) => (prevIndex + 1) % Images.length)
    }

    // Function T o Go To The Previous Image
    const prevImg = () => {
        setCurrentImgIndex((prevIndex) => (prevIndex - 1 + Images.length) % Images.length)
    }


    // Automatically Change The Img In Every 10 sec
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextImg()
        }, 10000) // 10000 ms = 10sec

        return () => clearInterval(intervalId)

    }, [])


    return (
        <div className={styles.Slider}>
            <div>
                <div>
                    <img src={Images[currentImgIndex]} alt="Background" />
                </div>
                <div className={styles.Overlay}></div>
            </div>
            <div className={styles.Content}>
                <h6>Easy Games</h6>
                <h5>Where Excitement Meets Adventure</h5>
            </div>

            {/* Slider Controls */}
            <div className={styles.Controls}>
                <button onClick={prevImg} className={styles.PrevButton}>⬅</button>
                <button onClick={nextImg} className={styles.NextButton}>➡</button>
            </div>

        </div>
    )
}
