import React from 'react'
import styles from './RegistrationForm.module.scss'

// const data = `
//     <script type="text/javascript" src="https://stadion.formstack.com/forms/js.php/augusta_test_form"></script>
//     <noscript>
//     <a href="https://stadion.formstack.com/forms/augusta_test_form" title="Online Form">Online Form - Augusta Test Form</a>
//     </noscript>
//     <div style="text-align:right; font-size:x-small;"><a href="http://www.formstack.com?utm_source=jsembed&utm_medium=product&utm_campaign=product+branding&fa=h,4934415" title="Powered by Formstack">Powered by Formstack</a>
//     </div>
//         `

const RegistrationForm = () => {
    return (
        <>
            {/* <div dangerouslySetInnerHTML={{ __html: data }}></div> */}
            <iframe className={styles.registrationForm} src="https://stadion.formstack.com/forms/augusta_test_form" title="Augusta Test Form"></iframe>
        </>
    )
}

export default RegistrationForm