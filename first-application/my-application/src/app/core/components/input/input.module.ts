import {NgModule} from "@angular/core";
import {InputComponent} from "./input.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule ({
  declarations: [
    InputComponent
  ],
  exports: [
    InputComponent
  ],
  imports: [
    ReactiveFormsModule
  ]
})

export class InputModule { }
