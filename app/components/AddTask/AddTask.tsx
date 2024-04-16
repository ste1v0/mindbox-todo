'use client'

import styles from './AddTask.module.css'
import { useContext, useState } from 'react'
import { TaskListContext, TaskListContextType } from '@/app/TaskListContext'
import { useHotkeys } from '@mantine/hooks'

function AddTask() {

    const { taskList, setTaskList }: TaskListContextType = useContext(TaskListContext);

    const [inputValue, setInputValue] = useState('')

    function addNewTask(value: string) {
        if (value) {
            setTaskList(prevValue  => [...prevValue, { id: prevValue.length + 1, key: prevValue.length + 1, name: value, status: 'active'}])
            setInputValue('')
        }
    }

    useHotkeys(
        [['enter', () => addNewTask(inputValue)]],
        []
    )

    return (
        <div className={styles.addTask}>
            <span className="material-symbols-outlined">expand_more</span>
            <input className={styles.focusedInput} type="text" value={inputValue} minLength={1} onChange={(e) => setInputValue(e.target.value)} id="addTask" name="addTask" autoComplete='off' placeholder='What needs to be done?' />
            <button className={styles.btn} onClick={() => addNewTask(inputValue)}>Add (↵ Enter)</button>
        </div>
    )
}

export default AddTask