import { Routes, RouterModule } from '@angular/router';

import { MovieComponent } from './movie/index';
import { SearchComponent } from './search/index';
import { SearchPageComponent } from './page/index';

export const appRoutes: Routes = [
    //{path: '', redirectTo: 'search', pathMatch: 'full' },
    //{path: 'search', component: SearchPageComponent },
    //{path: 'searchList/:searchName', component: MovieComponent },
    {path: '', component: MovieComponent, pathMatch: 'full' },
    /*  otherwise redirect to home  */
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
export const routing = RouterModule.forRoot(appRoutes);