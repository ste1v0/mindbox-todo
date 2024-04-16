import { createContext, Dispatch, SetStateAction } from 'react'
import { TaskProps } from './page';

export type TaskListContextType = {
  taskList: TaskProps[];
  setTaskList: Dispatch<SetStateAction<TaskProps[]>>
}
export const TaskListContext = createContext<TaskListContextType>({
  taskList: [],
  setTaskList: () => {}
})