import React from 'react'

import styles from './Features.module.css'

// For Components
import { FeatureBox } from './FeatureBox'

// Data
import { FeaturesData } from '@/Static/featureData'

export const Features = () => {
    return (
        <div className={styles.Features}>
            {
                FeaturesData.map((I) => (
                    <FeatureBox
                        key={I.id}
                        Icon={I.FeatureIcon}
                        FeatureDesc={I.FeatureDesc}
                        FeatureName={I.FeatureName}
                    />
                ))
            }
        </div>
    )
}
