// src/app/register/register.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      this.authService.registroConNest(this.registerForm.value).subscribe(
        (response) => {
          console.log('Usuario registrado exitosamente:', response);
          alert('Usuario registrado exitosamente');
        },
        (error) => {
          console.error('Error al registrar usuario:', error);
          alert('Hubo un error al registrar el usuario');
        }
      );
    } else {
      console.error('Formulario no válido');
      alert('Por favor, complete todos los campos correctamente');
    }
  }

}

   
  


