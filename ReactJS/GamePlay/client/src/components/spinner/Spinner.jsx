import styles from './Spinner.module.css'

export default function Spinner() {
    return (
        < div className={styles['loading-container']}>
            <div className={styles['loading-spinner']}>
                <span className={styles['loading-spinner-text']}>Loading</span>
            </div>
        </div >
    )
}