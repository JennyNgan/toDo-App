import {Component, Inject} from '@angular/core';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatInput, MatInputModule, MatLabel} from '@angular/material/input';
import {CommonModule, NgIf} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {Doing as DoingItem, DoingService} from '../../../services/doing';

@Component({
  selector: 'app-add-update-todo',
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
  templateUrl: './add-update-todo.html',
  styleUrl: './add-update-todo.scss'
})
export class AddUpdateTodo {
  doingForm!: FormGroup;

  isAddMode = true; // Mặc định là thêm mới
  constructor(public dialogRef: MatDialogRef<AddUpdateTodo>, private fb: FormBuilder,private doingService: DoingService, @Inject(MAT_DIALOG_DATA) public data: DoingItem & { mode?: 'add' | 'update'}) {
    this.isAddMode = data.mode === 'add';
    this.doingForm = this.fb.group({
      title: [data.title ||'', Validators.required],
      description: [data.description || '']
    });
  }

  onSubmit(){
    //kiem tra form cos hop le k
    if (this.doingForm.invalid) {
      this.doingForm.markAllAsTouched();
      return;
    }

    if(this.isAddMode){
      this.onAdd();
    } else {
      this.onUpdate();
    }
  }

  onAdd(){
    //obect mới
    const newDoing: Partial<DoingItem> = {
      title: this.doingForm.value.title,
      description: this.doingForm.value.description,
      status: 'doing'
    };

    //gọi API và đóng diaglog khi thành công
    this.doingService.addDoing(newDoing).subscribe({
      next: (created) => {
        this.dialogRef.close(created);
        this.doingService.notifyRefresh();
      },
    });
  }

  onUpdate(){
    this.doingService.updateDoingg(this.data.id!, this.doingForm.value).subscribe({
      next: (update) => {
        this.dialogRef.close(update);
      },
    });
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
