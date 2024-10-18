import React from 'react'

import styles from './NewModel.module.css'


// For Components
import { Content } from '../Content/Content'

export const NewModel = () => {
    return (
        <>
            <Content
                h6Text='Our New Model'
            />

            <div className={styles.NewModel}>
                <img src="/assets/NewModel.jpg" alt="" />
            </div>

        </>
    )
}
