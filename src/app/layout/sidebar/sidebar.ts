import {booleanAttribute, Component, Input, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {SidebarService} from '../../services/sidebar';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar implements OnInit {
  sidebarItems: any[] = [];
  @Input() isOpen: boolean = true;
  constructor(private sidebarService: SidebarService ) {}

  ngOnInit() {
    this.sidebarService.getSidebarItems().subscribe({
      next: (data: any[]) => {
        this.sidebarItems = data;
        console.log(data);
      }
    })
  }

}
