import { Html, Head, Main, NextScript } from 'next/document'


const Document = () => {
    return (

        <Html>
            <Head />
            <body>
                <Main />
                <NextScript />

                <div className="scores-wrapper">

                    <div className="scores-header">
                        <img src="https://www.aacgolf.com/wp-content/uploads/ibmlogo.png" alt="IBM" />
                        <img src="https://www.aacgolf.com/wp-content/uploads/rolexlogo.png" alt="Rolex" />
                    </div>
                    <div className="div-scroll">
                        <script src='https://scores.golfbox.dk/api/js/default/customerid/6/competitionid/3171757/template/AACv2' type='text/javascript' />
                    </div>
                </div>
            </body>
        </Html>
    )
}


export default Document