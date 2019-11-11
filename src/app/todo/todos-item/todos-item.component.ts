import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Form, Validators } from '@angular/forms';

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
  constructor() { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    console.log(this.todo);
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
  }

}
