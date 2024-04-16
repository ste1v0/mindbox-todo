'use client'

import styles from './TaskList.module.css'
import Task from '../Task/Task'
import { useContext } from 'react'
import { TaskListContext, TaskListContextType } from '@/app/TaskListContext'
import { FilterContext, FilterContextType } from '@/app/FilterContext'

function TaskList() {

    const { taskList, setTaskList }: TaskListContextType = useContext(TaskListContext)
    const { filter, setFilter }: FilterContextType = useContext(FilterContext)

    return (
        <>
            {taskList.length > 0 && 
            <ul className={styles.taskList}>
                {filter === 'all' 
                ? taskList.map((task) => {
                    return (
                        <Task key={task.id} id={task.id} name={task.name} status={task.status} />
                    )
                })
                : taskList.filter(task => task.status === filter).map(e => {
                    return (
                        <Task key={e.id} id={e.id} name={e.name} status={e.status} />
                    )
                })
            }
            </ul>
            }
        </>
    )
}

export default TaskList