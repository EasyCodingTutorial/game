import React from 'react'

import styles from './HighResolution.module.css'

interface Props {
    ImgUrl: string,
    ImgAlt?: string,
    GameName: string,
    GameRating: string,
    GameResolution: string,
}

export const HighResolutionBox = (
    {
        ImgUrl,
        ImgAlt,
        GameName,
        GameRating,
        GameResolution
    }: Props
) => {
    return (
        <div className={styles.HighResolution}>
            <div>
                <div>
                    <img src={ImgUrl} alt={ImgAlt} />
                </div>
                <div className={styles.Overlay}></div>
            </div>
            <div className={styles.Content}>
                <h6>{GameName}</h6>
                <div>
                    <p>Rating: {GameRating}</p>
                    <p>Resolution: {GameResolution}</p>
                </div>
            </div>
        </div>
    )
}
