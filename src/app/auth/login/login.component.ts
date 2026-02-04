// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   imports: [],
//   templateUrl: './login.html',
//   styleUrl: './login.scss',
// })
// export class Login {

// }
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {}




import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {@Output() close = new EventEmitter<void>();

  onSubmit(): void {
    // 1️⃣ Save login data here
    // (API call / service / console.log)
  
    console.log('Login data saved');
  
    // 2️⃣ Close modal AFTER save
    this.close.emit();
  }
  
  closeModal(): void {
    this.close.emit();
  }
  }
