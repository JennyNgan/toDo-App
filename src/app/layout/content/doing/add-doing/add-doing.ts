import { Component } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {Doing as DoingItem, DoingService} from '../../../../services/doing';

@Component({
  selector: 'app-add-doing',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogTitle,
    MatButtonModule,
    MatDialogActions,
    MatDialogContent,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './add-doing.html',
  styleUrl: './add-doing.scss'
})
export class AddDoing {
  newDoingForm!: FormGroup;
  // doings: DoingItem[] = [];

  constructor(public dialogRef: MatDialogRef<AddDoing>, private doingService: DoingService, private fb: FormBuilder) {
    this.newDoingForm = this.fb.group({
      title: ['', Validators.required],
      description: ['']
    });
  }

  onAdd(){
    //obect mới
    const newDoing: Partial<DoingItem> = {
      title: this.newDoingForm.value.title,
      description: this.newDoingForm.value.description,
      status: 'doing'
    };

    //kiểm tra form hợp lệ
    if (this.newDoingForm.invalid) {
      this.newDoingForm.markAllAsTouched();
      return;
    }

    //gọi API và đóng diaglog khi thành công
    this.doingService.addDoing(newDoing).subscribe({
      next: (created) => {
        this.dialogRef.close(created);
        this.doingService.notifyRefresh();
      },
    });
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
