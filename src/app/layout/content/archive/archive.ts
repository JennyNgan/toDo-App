import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatCheckbox} from "@angular/material/checkbox";
import {NgForOf, NgIf} from "@angular/common";
import {MatIconModule} from '@angular/material/icon';
import {Doing as DoingItem, DoingService} from '../../../services/doing';

@Component({
  selector: 'app-archive',
    imports: [
        MatCard,
        MatCardContent,
        MatCheckbox,
        MatIconModule,
        NgForOf,
        NgIf
    ],
  templateUrl: './archive.html',
  styleUrl: './archive.scss'
})
export class Archive implements OnInit {
  archiveList: DoingItem[] = [];
  constructor(private doingService: DoingService) {}

  loadArchive(){
    this.doingService.getDoing().subscribe({
      next: (data: any[]) => this.archiveList = data.filter(d => d.archive)
    })
  }
  ngOnInit() {
    this.loadArchive();
    this.doingService.refresh$.subscribe(() => this.loadArchive())
  }
}
