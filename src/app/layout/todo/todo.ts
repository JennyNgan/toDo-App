import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatCheckbox} from "@angular/material/checkbox";
import {NgForOf, NgIf} from "@angular/common";
import {Doing as DoingItem, DoingService} from '../../services/doing';
import {MatIconModule} from '@angular/material/icon';
import {ActivatedRoute, Router} from '@angular/router';
import {DeleteDoing} from '../content/doing/delete-doing/delete-doing';
import {MatDialog} from '@angular/material/dialog';
import {UpdateDoing} from '../content/doing/update-doing/update-doing';
import {AddUpdateTodo} from './add-update-todo/add-update-todo';

@Component({
  selector: 'app-todo',
    imports: [
        MatCard,
        MatCardContent,
        MatCheckbox,
        MatIconModule,
        NgForOf,
        NgIf
    ],
  templateUrl: './todo.html',
  styleUrl: './todo.scss'
})
export class Todo implements OnInit{
  todos: DoingItem[] = [];
  status: 'doing' | 'done' | 'archive' = 'doing';
  constructor(private route: ActivatedRoute, private doingService: DoingService, private dialog: MatDialog) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.status = data['status'] || 'doing';
      this.loadDone();
    });

    this.doingService.refresh$.subscribe((data) => this.loadDone());
  }

  loadDone() {
    this.doingService.getDoing().subscribe({
      next: (data: any[]) => this.todos = data.filter(d => d.status === this.status)
    });
  }

  checks(item: DoingItem) {
    const updatedItem = { ...item, status: 'done' };

    this.doingService.updateDoingg(item.id!, updatedItem).subscribe({
      next: () => {
        // Xóa item khỏi danh sách Doing ngay lập tức
        this.todos = this.todos.filter(d => d.id !== item.id);
        // Báo cho component Done load lại
        this.loadDone()
        // this.doingService.notifyRefresh();
      },
      error: err => console.error(err)
    });
  }

  openUpdateDialog(doing: DoingItem){
    const dialogRef = this.dialog.open(AddUpdateTodo, {
      width: '500px',
      // data: doing
      data: { mode: 'update', ...doing }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // this.doings.push(result);
        // console.log(result);
        const index = this.todos.findIndex(d => d.id === result.id);
        if (index !== -1) {
          this.todos[index] = result;
        }
      }
    });
  }

  toggleArchive(item: DoingItem) {
    const archive = { ...item, status: 'archive' };

    this.doingService.updateDoingg(item.id!, archive).subscribe({
      next: () => {
        // Xóa item khỏi danh sách Doing ngay lập tức
        this.todos = this.todos.filter(d => d.id !== item.id);
        // Báo cho component Done load lại
        this.doingService.notifyRefresh();
      },
      error: err => console.error(err)
    });
  }

  delete(id: string, title: string, description: string) {
    const dialogRef = this.dialog.open(DeleteDoing, {
      width: '350px',
      data: {
        title: title,
        message: description,
      }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.doingService.deleteDoing(id).subscribe({
          next: () => {
            this.todos = this.todos.filter(d => d.id !== id);
          }
        });
      }
    });
  }
}
