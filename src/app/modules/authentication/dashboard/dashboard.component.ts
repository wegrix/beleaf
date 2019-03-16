import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UpdateProfileService } from '../update-profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user: {};

  // Links
  links: any[] = [
    {
      url: '#perfil',
      name: 'Perfil',
      isOpen: true
    },
    {
      url: '#blog',
      name: 'Mi Blog',
      isOpen: false
    },
    {
      url: '#publicity',
      name: 'Publicidad',
      isOpen: false
    },
    {
      url: '#paypal',
      name: 'Configuracíon bancaria',
      isOpen: false
    },
    {
      url: '#notifications',
      name: 'Notificaciones',
      isOpen: false
    },
    {
      url: '',
      name: 'Soporte',
      isOpen: false
    }
  ];

  // Inputs

  profileInputs = [
    {
      label: 'Nombre',
      id: 'name',
      type: 'text',
      value: this.authentication.auth.currentUser.displayName,
    }, {
      label: 'Nombre de proyecto',
      id: 'project',
      type: 'text',
      value: ''
    },
    {
      label: 'Correo Electrónico',
      id: 'email',
      type: 'email',
      value: this.authentication.auth.currentUser.email || ' '
    }
  ];

  // Dynamic content

  closeAllCarets(): void {
    this.links.forEach((caret) => {
      caret.isOpen = false;
    });
  }

  showCaret(caret: any): void {
    if (!caret.isOpen) {
      this.closeAllCarets();
    }
    caret.isOpen = !caret.isOpen;
  }


  constructor(
    public authenticated: AuthService,
    private authentication: AngularFireAuth,
    private updateProfile: UpdateProfileService,
  ) {
  }

  ngOnInit() {
    this.updateProfile.getUser().subscribe((doc) => {
      this.user = doc.data();
    });

  }
}
