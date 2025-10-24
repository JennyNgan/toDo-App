import { Component } from '@angular/core';
import {Sidebar} from './sidebar/sidebar';
import {Header} from './header/header';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [
    Sidebar,
    Header,
    RouterOutlet
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {
  isSidebarOpen = true;
  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log('Trạng thái sidebar:', this.isSidebarOpen);

  }
}
