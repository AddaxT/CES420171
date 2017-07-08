import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './auth-guard/auth-guard.guard';
import { AccessCodeGuard } from './access-code/access-code.guard';



export const routeConfig: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        children: [
        ]
    }
];