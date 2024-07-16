import { Route } from '@angular/router';
import { ChairsComponent } from './chairs/chairs.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import { DiningComponent } from './dining/dining.component';
import { HomedecorComponent } from './homedecor/homedecor.component';
import { OccasionalComponent } from './occasional/occasional.component';
import { OfficedesksComponent } from './officedesks/officedesks.component';
import { SofaComponent } from './sofa/sofa.component';


export const appRoutes: Route[] = [
    {
        path: 'chairs',
        component: ChairsComponent,
    },
    {
        path:'bedroom',
        component: BedroomComponent,
    },
    {
        path:'dining',
        component: DiningComponent,
    },
    {
        path: 'homedecor',
        component:HomedecorComponent,
    },
    {
        path: 'occassional',
        component: OccasionalComponent,
    },
    {
        path:'officedesks',
        component:OfficedesksComponent,
    },
    {
        path: 'sofa',
        component:SofaComponent,
    }
];
