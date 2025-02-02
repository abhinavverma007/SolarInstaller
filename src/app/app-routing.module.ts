import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./features/services/services.module').then(m => m.ServicesModule),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./features/projects/projects.module').then(m => m.ProjectsModule),
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('./features/locations/locations.module').then(
        m => m.LocationsModule
      ),
  },
  {
    path: 'solar-calculator',
    loadChildren: () =>
      import('./features/calculator/calculator.module').then(
        m => m.CalculatorModule
      ),
  },
  {
    path: 'testimonials',
    loadChildren: () =>
      import('./features/testimonials/testimonials.module').then(
        m => m.TestimonialsModule
      ),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./features/blog/blog.module').then(m => m.BlogModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./features/contact/contact.module').then(m => m.ContactModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        m => m.DashboardModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then(m => m.HomeModule),
  },

  { path: '**', redirectTo: '', pathMatch: 'full' }, // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
