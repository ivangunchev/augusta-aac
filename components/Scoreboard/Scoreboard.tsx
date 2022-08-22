import { useRouter } from 'next/router'
import React, { useEffect } from 'react'


const data = `
        <div className="scores-wrapper">
            <div className="scores-header">
                <img src="https://www.aacgolf.com/wp-content/uploads/ibmlogo.png" alt="IBM" />
                <img src="https://www.aacgolf.com/wp-content/uploads/rolexlogo.png" alt="Rolex" />
            </div>
            <div className="div-scroll">
                <script src='https://scores.golfbox.dk/api/js/default/customerid/6/competitionid/3171757/template/AACv2' type='text/javascript' />
            </div>
        </div>
    `

const Scoreboard = () => {
    const router = useRouter()
    useEffect(() => {
        if (!router.asPath.includes('competition')) {
            setTimeout(() => {
                router.reload()
            }, 100)
        }

    }, [])
    return (
        <div dangerouslySetInnerHTML={{ __html: data }}></div>
    )
}

export default Scoreboard