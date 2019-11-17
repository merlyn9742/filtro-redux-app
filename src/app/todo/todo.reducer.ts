import * as fromTodo from '../todo/todo.actions';
import { Todo } from './model/todo.model';

const todoUno = new Todo ("Salvar al mundo");
const todoDos = new Todo ("Aprendiendo NgRx");
const todoTres = new Todo ("Aprendiendo NgRx dos.2");

const estadoInicial: Todo[] = [todoUno, todoDos, todoTres];


export function  todoReducer(state = estadoInicial,
                             action: fromTodo.Acciones): Todo[]{
    switch(action.type){

       case fromTodo.AGREGAR_TODO:
           const todo = new Todo(action.texto);
           return [...state, todo]; 

        case fromTodo.TOGGLE_ALL_TODO:
            return state.map( todoEdit => {
                return{
                    ...todoEdit,
                    completado: action.completado
                };
            });

        case fromTodo.TOGGLE_TODO:
            return state.map( todoEdit => {
                if(todoEdit.id === action.id){
                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    };
                }else{
                    return todoEdit;
                }

            });
        
        case fromTodo.EDITAR_TODO:   
            return state.map( todoEditText =>{
                if(todoEditText.id == action.id){
                    return {
                        ...todoEditText,
                        texto: action.texto
                    };
                }else{
                    return todoEditText;
                }
            });

        case fromTodo.BORRAR_TODO:
            return state.filter( todoEdit => todoEdit.id !== action.id);    

        case fromTodo.LIMPIAR_COMPLETADOS_TODO:
            return state.filter(todoEdit => !todoEdit.completado);
        default: return state;
    }                            
}