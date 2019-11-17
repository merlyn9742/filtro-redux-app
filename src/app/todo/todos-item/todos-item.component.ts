import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Form, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actionsTodo from '../todo.actions';


@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit {
@Input() todo: Todo;
@ViewChild('txtInputFisico', {static: false}) txtInputFisico: ElementRef;
chkField: FormControl;
txtInput: FormControl;

editando: boolean;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    
    this.chkField.valueChanges
    .subscribe( () =>{
        const accion = new actionsTodo.ToggleTodoAction(this.todo.id)
        this.store.dispatch(accion);
    });
  }

  editar(){
    this.editando=true;
    setTimeout( ()=>{
      this.txtInputFisico.nativeElement.select();
      //select o focus
    }, 1);
  }

  terminarEdicion(){
    this.editando = false;

    if(this.txtInput.invalid){
      return;
    }

    if(this.txtInput.value === this.todo.texto){
      return;
    }
    const accion = new actionsTodo.EditarTodoAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(accion);
  }

  borrarTodo(){
    const accion = new actionsTodo.BorrarTodoAction(this.todo.id);

    this.store.dispatch(accion);
  }

}
