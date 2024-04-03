import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentComponent, EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Peter Verzhnaksyi';

  person = {
    name: 'Peter Verzhanskyi',
    age: 31
  }

  employee = {
    firstname: 'Peter',
    lastname: 'Verzhanskyi',
    age: 31,
    city: 'Toronto',
    salary: 75000,
    designation: 'dev'
  }

}

