import { Component } from '@angular/core';
import {Doing} from './doing/doing';
import {Archive} from './archive/archive';
import {RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
   CommonModule,
  ],
  templateUrl: './content.html',
  styleUrl: './content.scss'
})
export class Content {

}
