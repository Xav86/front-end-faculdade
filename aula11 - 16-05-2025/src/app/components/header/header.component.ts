import { Component, signal } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ToolbarModule, ButtonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menus = signal<any[]>([
    {
      label: 'Dashbord',
      icon: 'pi-chart-bar',
      selected: true,
      path: '/dashboard',
    },
    {
      label: 'List',
      icon: 'pi-list',
      selected: false,
      path: '/list',
    },
    {
      label: 'Add',
      icon: 'pi-plus-circle',
      selected: false,
      path: '/add',
    }
  ])

  selectMenu(index: Number) {
    this.menus.update(menus => {
      menus.forEach((m, i) => m.selected = index === i)

      return menus
    })
  }
}
