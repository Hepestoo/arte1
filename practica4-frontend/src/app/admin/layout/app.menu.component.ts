import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'ADMINISTRACIÓN',
                items: [
                    { label: 'Admin', icon: 'pi pi-fw pi-home', routerLink: ['admin'] },
                    { label: 'Perfil', icon: 'pi pi-fw pi-user', routerLink: ['/admin/perfil'] }
                ]
            },
            {
                label: 'Inventario',
                items: [
                    { label: 'Categoría', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/categoria'] },
                    { label: 'Producto', icon: 'pi pi-fw pi-check-square',  routerLink: ['/adim/producto'] },
                ]
              
            },
            {
                label: 'Pedidos',
                items: [
                    { label: 'Lista Pedidos', icon: 'pi pi-fw pi-eye', routerLink: ['/admin/pedido'], badge: 'NEW' },
                    { label: 'Nuevo Pedido', icon: 'pi pi-fw pi-eye', url: ['/admin/pedido/nuevo'], badge: '_blank' },
                    { label: 'Clientes', icon: 'pi pi-fw pi-users', url: ['/admin/cliente'], target: '_blank' },
                ]
            },

            {
                label: 'Roles y Usuarios',
                items: [
                    { label: 'Usuarios', icon: 'pi pi-fw pi-users', routerLink: [''],  },
                    { label: 'Roles', icon: 'pi pi-fw pi-desktop', url: [''], target: '_blank' },
                    
                ]
            },
           
        ];
    }
}
