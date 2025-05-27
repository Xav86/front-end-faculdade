import { Component, signal } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [ToolbarModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menus = signal<any[]>([
    {
      label: 'Dashbord',
      icon: 'pi-chart-bar',
      selected: true,
    },
    {
      label: 'List',
      icon: 'pi-list',
      selected: false,
    },
    {
      label: 'Add',
      icon: 'pi-plus-circle',
      selected: false,
    }
  ])

  selectMenu(index: Number) {
    this.menus.update(menus => {
      menus.forEach((m, i) => m.selected = index === i)

      return menus
    })
  }
}
