// import {Component, OnInit} from '@angular/core';
// import {NgForOf, NgIf} from '@angular/common';
// import {MatIconModule} from '@angular/material/icon';
// import {MatCard, MatCardContent} from '@angular/material/card';
// import {MatCheckbox, MatCheckboxModule} from '@angular/material/checkbox';
// import {Doing as DoingItem, DoingService} from '../../../services/doing';
// import {Router} from '@angular/router';
//
// @Component({
//   selector: 'app-done',
//   imports: [
//     MatIconModule,
//     NgIf,
//     MatCard,
//     MatCardContent,
//     MatCheckboxModule,
//     NgForOf
//   ],
//   templateUrl: './done.html',
//   styleUrl: './done.scss'
// })
// export class Done implements OnInit {
//
//   doneList: DoingItem[] = [];
//   constructor(private  doingService: DoingService, private route: Router) { }
//
//   ngOnInit() {
//     this.route.url
//     console.log(this.route.url)
//     this.loadDone();
//     this.doingService.refresh$.subscribe(() => this.loadDone());
//   }
//
//   loadDone() {
//     this.doingService.getDoing().subscribe({
//       next: (data: any[]) => this.doneList = data.filter(d => d.done)
//     });
//   }
// }
