'use client'

import styles from './Task.module.css'
import { useContext } from 'react'
import { TaskListContext, TaskListContextType } from '@/app/TaskListContext'

type TaskProps = {
    key: number,
    id: number,
    name: string
    status: string
}

function Task({ key, id, name, status } : TaskProps) {

    const { taskList, setTaskList }: TaskListContextType = useContext(TaskListContext)

    function changeStatus() {
        setTaskList(prevValue => prevValue.map(task => {
            if (task.id === id) {
                return {...task, status: status === 'completed' ? 'active' : 'completed'}
            }
            return task
        }))
    }

    return (
        <div className={styles.task}>
            <span className="material-symbols-outlined" onClick={changeStatus}>{status === 'completed' ? 'radio_button_checked' : 'radio_button_unchecked'}</span>
            <p className={status === 'completed' ? styles.completed : styles.active}>{name}</p>
        </div>
    )
}

export default Task