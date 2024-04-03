import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  @Input() emp: any;

  sayHello(){
    alert('Hello ' + this.emp.firstname);
  }
}
