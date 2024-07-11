import { VectorDoc } from "@datastax/astra-db-ts";

//  interface Todo {
//   id: number;
//   text: string;
//   completed: boolean;
// }
//   interface TodoStore {
//   value: string;
//   setValue: (value: string) => void;
//     todos: Todo[];
//     addTodo: (todo: Todo) => void;
//     removeTodo: (id: number) => void;
//     toggleTodo: (id: number) => void;
//   }


  interface PostVector extends VectorDoc { 
    username: string; 
    description: string;
    $vectorize: string

  }


  interface Task {
    id: number;
    title: string;
    completed: boolean;
    
  }