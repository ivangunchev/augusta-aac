import React from 'react'
import styles from './video.module.scss'
const Video = () => {
    return (
        <div className={styles.videoContainer}>
            <iframe src="https://video.laacgolf.com/index.html?id=laac&lang=en" className="video" scrolling="no">
                <p>Your browser does not support iframes.</p>
            </iframe>
        </div>
    )
}

export default Video