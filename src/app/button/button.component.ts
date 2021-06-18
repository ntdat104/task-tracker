import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: [],
})
export class ButtonComponent implements OnInit {
  @Input() bgColor!: string;
  @Input() text!: string;

  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.btnClick.emit();
  }
}
