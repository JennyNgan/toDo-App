import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';
import { DoingService, Doing as DoingItem } from '../../../services/doing';
import {DeleteDoing} from './delete-doing/delete-doing';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {UpdateDoing} from './update-doing/update-doing';
import {Subscription} from 'rxjs';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-doing',
  standalone: true,
  imports: [
    MatCard,
    MatCheckbox,
    MatCardContent,
    MatIconModule,
    CommonModule,
    MatDialogModule,
    FormsModule,
  ],
  templateUrl: './doing.html',
  styleUrl: './doing.scss'
})
export class Doing implements OnInit {
  doings: DoingItem[] = [];
  private sub !: Subscription;

  constructor(private doingService: DoingService, private dialog: MatDialog) {}

  ngOnInit() {
    // this.loadList()
    this.loadListDoing()

    this.sub = this.doingService.refresh$.subscribe(() => {
      // this.loadList()
      this.loadListDoing()
    })
  }

  loadList(){
    this.doingService.getDoing().subscribe(data =>{
      this.doings = data;
    })
  }

  loadListDoing() {
    this.doingService.getDoing().subscribe({
      next: (data: any[]) => {
        // Chỉ lấy những công việc CHƯA DONE
        this.doings = data.filter(d => !d.done && !d.archive);
      }
    });
  }


  openUpdateDialog(doing: DoingItem){
    const dialogRef = this.dialog.open(UpdateDoing, {
      width: '500px',
      data: doing
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // this.doings.push(result);
        // console.log(result);
        const index = this.doings.findIndex(d => d.id === result.id);
        if (index !== -1) {
          this.doings[index] = result;
        }
      }
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
            this.doings = this.doings.filter(d => d.id !== id);
          }
        });
      }
    });
  }

  toggleDone(item: DoingItem) {
    const updatedItem = { ...item, done: true }; // Đánh dấu đã xong

    this.doingService.updateDoingg(item.id!, updatedItem).subscribe({
      next: () => {
        // Xóa item khỏi danh sách Doing ngay lập tức
        this.doings = this.doings.filter(d => d.id !== item.id);
        // Báo cho component Done load lại
        this.doingService.notifyRefresh();
      },
      error: err => console.error(err)
    });
  }

  toggleArchive(item: DoingItem) {
    const archive = { ...item, archive: true, done: false };

    this.doingService.updateDoingg(item.id!, archive).subscribe({
      next: () => {
        // Xóa item khỏi danh sách Doing ngay lập tức
        this.doings = this.doings.filter(d => d.id !== item.id);
        // Báo cho component Done load lại
        this.doingService.notifyRefresh();
      },
      error: err => console.error(err)
    });
  }

}
