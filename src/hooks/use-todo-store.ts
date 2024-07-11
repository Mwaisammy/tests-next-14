import { create } from "zustand";


interface Todo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
  }
  
  interface TodoStore {
    todos: Todo[];
    addTodo: (todo: Omit<Todo, 'completed'>) => void;
    toggleTodo: (id: number) => void;
  }




  export const useTodoStore = create<TodoStore>((set, get) => ({

    todos: [],
    addTodo : (todo) => {

        const newTodo: Todo = {
            ...todo, completed: false
        }

        set({ todos: [...get().todos, newTodo]})
        // set(state => ({ todos: [...state.todos, newTodo]})) same as above

        
    },

    toggleTodo: (id) => {
        set({ todos: get().todos.map((todo) => todo.id === id ? {...todo , completed : !todo.completed} : todo)})
    }

  }))


  ///get --> used to get the initial elements


//   const todoArray = [
//     {

//     }
//   ]