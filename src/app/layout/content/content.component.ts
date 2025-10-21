import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardHeader, MatCardContent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
