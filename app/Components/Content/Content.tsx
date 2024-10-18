import React from 'react'

import styles from './Content.module.css'

interface ContentProps {
    h6Text: string,
}

export const Content = (
    { h6Text }: ContentProps
) => {
    return (
        <div className={styles.Content}>
            <h6>{h6Text}</h6>
        </div>
    )
}
