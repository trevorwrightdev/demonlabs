import Meta from '../components/Meta'

import errorStyles from '../styles/Error.module.css'

export default function Custom404() {
    return (
    <>
        <Meta title='404'/>
        <div className={errorStyles.grid}>
            <h1 className={errorStyles.errorCode}>404</h1>
        </div>
    </>
    )
}