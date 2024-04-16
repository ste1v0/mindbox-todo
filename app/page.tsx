'use client'

import styles from './styles.module.css'
import Title from './components/Title/Title'
import Container from './components/Container/Container'
import { TaskListContext, TaskListContextType } from './TaskListContext'
import { FilterContext, FilterContextType } from './FilterContext'
import { useState } from 'react'


export type TaskProps = {
  id: string,
  key?: number,  
  name: string,
  status: string
}

export default function App() {
  const [taskList, setTaskList] = useState<TaskProps[]>([]);
  const [filter, setFilter] = useState<string>('all');

  const taskListContextValue: TaskListContextType = {
    taskList,
    setTaskList,
  };

  const filterContextValue: FilterContextType = {
    filter,
    setFilter,
  };

  return (
    <TaskListContext.Provider value={taskListContextValue}>
      <FilterContext.Provider value={filterContextValue}>
        <div className={styles.container}>
          <Title />
          <Container />
        </div>
      </FilterContext.Provider>
    </TaskListContext.Provider>
  )
}