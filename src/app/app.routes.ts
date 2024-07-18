import { Route } from '@angular/router';
import { ChairsComponent } from './chairs/chairs.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import { DiningComponent } from './dining/dining.component';
import { HomedecorComponent } from './homedecor/homedecor.component';
import { OccasionalComponent } from './occasional/occasional.component';
import { OfficedesksComponent } from './officedesks/officedesks.component';
import { SofaComponent } from './sofa/sofa.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';


export const appRoutes: Route[] = [
    {
        path: 'chairs',
        component: ChairsComponent,
        children:[
            { path: 'products/:id', component: DetailsComponent }
        ]
    },
    {
        path:'bedroom',
        component: BedroomComponent,
        children:[
            { path: 'products/:id', component: DetailsComponent }
        ]
    },
    {
        path:'dining',
        component: DiningComponent,
        children:[
            { path: 'products/:id', component: DetailsComponent }
        ]
    },
    {
        path: 'homedecor',
        component:HomedecorComponent,
        children:[
            { path: 'products/:id', component: DetailsComponent }
        ]
    },
    {
        path: 'occassional',
        component: OccasionalComponent,
        children:[
            { path: 'products/:id', component: DetailsComponent }
        ]
    },
    {
        path:'officedesks',
        component:OfficedesksComponent,
        children:[
            { path: 'products/:id', component: DetailsComponent }
        ]
    },
    {
        path: 'sofa',
        component:SofaComponent,
        children:[
            { path: 'products/:id', component: DetailsComponent }
        ]
    },
    {
        path: '',
        component:SofaComponent,
    },{
        path: 'login',
        component:LoginComponent,
    }
];
