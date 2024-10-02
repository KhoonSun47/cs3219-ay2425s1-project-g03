import { Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { CollaborationComponent } from './collaboration/collaboration.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);

export const routes: Routes = [
    {
        path: 'account',
        loadChildren: accountModule,
    },
    {
        path: 'questions',
        component: QuestionsComponent,
    },
    {
        path: 'start',
        component: CollaborationComponent,
    },
];
