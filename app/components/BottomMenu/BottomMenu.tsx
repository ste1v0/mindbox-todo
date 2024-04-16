'use client'

import styles from './BottomMenu.module.css'
import { useContext } from 'react'
import { TaskListContext, TaskListContextType } from '@/app/TaskListContext'
import { FilterContext, FilterContextType } from '@/app/FilterContext'

function BottomMenu() {

    const { taskList, setTaskList }: TaskListContextType = useContext(TaskListContext)
    const { filter, setFilter }: FilterContextType = useContext(FilterContext)

    const activeTasks = taskList.filter(task => task.status === 'active')

    return (
        <div className={styles.bottomMenu}>
            <span  className={styles.bottomMenuCount}>{activeTasks.length} items left</span>
            <ul className={styles.bottomMenuList}>
                <li className={filter === 'all' ? styles.active : styles.bottomMenuItem} onClick={() => setFilter('all')}>All</li>
                <li className={filter === 'active' ? styles.active : styles.bottomMenuItem} onClick={() => setFilter('active')}>Active</li>
                <li className={filter === 'completed' ? styles.active : styles.bottomMenuItem} onClick={() => setFilter('completed')}>Completed</li>
            </ul>
            <span className={styles.bottomMenuClear} onClick={() => setTaskList(prevValue => prevValue.filter(task => task.status !== 'completed'))}>Clear completed</span>
        </div>
    )
}

export default BottomMenu