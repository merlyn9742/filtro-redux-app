import * as fromTodo from '../todo/todo.actions';
import { Todo } from './model/todo.model';

const todoUno = new Todo ("Salvar al mundo");
const todoDos = new Todo ("Aprendiendo NgRx");
const todoTres = new Todo ("Aprendiendo NgRx dos.2");

todoDos.completado=true;

const estadoInicial: Todo[] = [todoUno, todoDos, todoTres];


export function  todoReducer(state = estadoInicial,
                             action: fromTodo.Acciones): Todo[]{
    switch(action.type){

       case fromTodo.AGREGAR_TODO:
           const todo = new Todo(action.texto);
           return [...state, todo]; 

        default: return state;
    }                            
}