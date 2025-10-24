import { Routes } from '@angular/router';
import {Layout} from './layout/layout';
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
          // {
          //   path: 'add-doing',
          //   component: AddDoing
          // },
          // {
          //   path: 'update-doing',
          //   component: UpdateDoing
          // }
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
