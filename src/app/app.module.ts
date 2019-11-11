import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//NGRX
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todo/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

//Forms
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodosListComponent } from './todo/todos-list/todos-list.component';
import { TodosItemComponent } from './todo/todos-item/todos-item.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { FooterComponent } from './footer/footer.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosListComponent,
    TodosItemComponent,
    TodoFooterComponent,
    TodoAddComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ todos: todoReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
