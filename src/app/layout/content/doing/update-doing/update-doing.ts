import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatInput, MatLabel} from "@angular/material/input";
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Doing as DoingItem, DoingService} from '../../../../services/doing';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-update-doing',
  imports: [
    FormsModule,
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatFormFieldModule,
    MatIconModule,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './update-doing.html',
  styleUrl: './update-doing.scss'
})
export class UpdateDoing {
  updateDoingForm!: FormGroup;

  constructor(private dialogRef: MatDialogRef<UpdateDoing>, private fb: FormBuilder, private doingService: DoingService,@Inject(MAT_DIALOG_DATA) public data: DoingItem) {
    this.updateDoingForm = this.fb.group({
      title: [data.title, Validators.required],
      description: [data.description],
    });
  }

  onUpdate(){
    const updateDoings: Partial<DoingItem> = {
      title: this.updateDoingForm.value.title,
      description: this.updateDoingForm.value.description
    };

    this.doingService.updateDoingg(this.data.id!, updateDoings).subscribe({
      next: (update) => {
        this.dialogRef.close(update);
      },
      error: (err) => console.error(err)
    });
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
