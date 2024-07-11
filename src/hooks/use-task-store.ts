import { create } from "zustand";
import { Task } from "../../typings";


type Props = {
    tasks: Task[];
    addTask : (title: string) => void;
    updateTask : (id: number, updates: Partial<Task>) => void;
    removeTask: (id: number) => void;


}




export const useTaskStore = create<Props>((set, get) => ({
    tasks: [],
    addTask : ( title) => {
        const newTask = {
            title,
            id: Date.now(),
            completed: false
        }


        set(state => ({ tasks: [...state.tasks, newTask] }))

    },

    removeTask : (id) => {
        set( state => ({ tasks: state.tasks.filter(task => task.id !== id)}))
    },

    updateTask(id, updates) {
        set(state => ({ tasks: state.tasks.map((task) => task.id === id ? {...task, ...updates} : task)}))
        
    },

  

        
    }

))