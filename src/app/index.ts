import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {store} from './reducers';

import {AppComponent} from './containers/App';
import {FooterComponent} from './components/Footer';
import {HeaderComponent} from './components/Header';
import {MainSectionComponent} from './components/MainSection';
import {TodoItemComponent} from './components/TodoItem';
import {TodoTextInputComponent} from './components/TodoTextInput';
import {MyClass} from './components/myclass';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    store
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainSectionComponent,
    TodoItemComponent,
    TodoTextInputComponent,
    MyClass
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
