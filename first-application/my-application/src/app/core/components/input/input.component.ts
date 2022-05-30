import {Component, Input, OnInit} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'input-comp',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']

})

export class InputComponent implements OnInit {

  @Input() inputControl = new FormControl();
  @Input() inputPlaceholder: string = '';
  @Input() inputType: string = '';

  ngOnInit(): void {
  }

}
