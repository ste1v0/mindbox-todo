import styles from './BottomStack.module.css'

type BottomStackProps = {
    width: number
}

function BottomStack({ width } : BottomStackProps) {
    return (
        <div className={styles.bottomStack} style={{ width: `${width}%` }} />
    )
}

export default BottomStack