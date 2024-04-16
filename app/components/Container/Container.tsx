import styles from './Container.module.css'
import AddTask from '../AddTask/AddTask'
import TaskList from '../TaskList/TaskList'
import BottomMenu from '../BottomMenu/BottomMenu'
import BottomStack from '../BottomStack/BottomStack'

function Container() {

    return (
        <div className={styles.box}>
            <div className={styles.container}>
                <AddTask />
                <TaskList />
                <BottomMenu />
            </div>
            <BottomStack width={89}  />
            <BottomStack width={88} />
        </div>
    )
}

export default Container