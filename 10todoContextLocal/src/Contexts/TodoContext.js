import { createContext,useContext } from "react";

//  #Imp:- Context API is not made for too big Projects.* 

export const TodoContext = createContext({
    todos:[
        //Properties
        {
            id:1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    
    //Functionalities

     addTodo:(todo) =>{},
     updateTodo:(id,todo)=>{},
     deleteTodo:(id)=>{},
     toggleComplete:(id)=>{}
})

export const useTodo=()=>{
    // When you use useContext hook. it should be mandatory that pass one context
    // in it
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider