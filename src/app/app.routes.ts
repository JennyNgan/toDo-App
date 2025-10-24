import { Routes } from '@angular/router';
import {Layout} from './layout/layout';
// import {Done} from './layout/content/done/done';
import {Archive} from './layout/content/archive/archive';
import {Doing} from './layout/content/doing/doing';
import {AddDoing} from './layout/content/doing/add-doing/add-doing';
import {UpdateDoing} from './layout/content/doing/update-doing/update-doing';
import {Todo} from './layout/todo/todo';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'doing',
        children: [
          {
            path: '',
            component: Todo
          },
          {
            path: 'add-doing',
            component: AddDoing
          },
          {
            path: 'update-doing',
            component: UpdateDoing
          }
        ]
      },
      {
        path: 'done',
        component: Todo,
        data: {
          status: 'done'
        }
      },
      {
        path: 'archive',
        component: Todo,
        data: {
          status: 'archive'
        }
      },
      {
        path: '',
        redirectTo: 'doing',
        pathMatch: 'full',
      }
    ]
  }
];
