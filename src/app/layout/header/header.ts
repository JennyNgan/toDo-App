import {Component, EventEmitter, inject, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DoingService, Doing as DoingItem } from '../../services/doing';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatToolbar} from '@angular/material/toolbar';
import {AddUpdateTodo} from '../todo/add-update-todo/add-update-todo';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbar
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  doings: DoingItem[] = [];
  constructor(private doingService: DoingService, private dialog: MatDialog) {}

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddUpdateTodo, {
      width: '500px',
      data: {mode: 'add'}
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.doings.push(result);
        console.log(result);
      }
    });
  }

  @Output() toggle = new EventEmitter<void>();
  onToggle() {
    this.toggle.emit();
  }
}
