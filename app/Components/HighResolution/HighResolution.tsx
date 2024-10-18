import React from 'react'

import styles from './HighResolution.module.css'

// For Components
import { Content } from '../Content/Content'
import { HighResolutionBox } from './HighResolutionBox'


// for Data
import { HighResolutionGamesData } from '@/Static/highResolutionData'

export const HighResolution = () => {
    return (
        <>
            <Content
                h6Text='High Resoltuion Games'
            />

            <div className={styles.HighResolutionGames}>
                {
                    HighResolutionGamesData.map((I) => (
                        <HighResolutionBox
                            key={I.id}
                            GameName={I.GameName}
                            ImgUrl={I.GameImg}
                            ImgAlt={I.GameName}
                            GameRating={I.GameRating}
                            GameResolution={I.GameResolution}
                        />
                    ))
                }
            </div>

        </>
    )
}
