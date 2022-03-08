import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularCoreModule } from '@qombi/angular/core';
import { AngularUiModule } from '@qombi/angular/ui';
import { AppComponent } from './app.component';
import { routes } from './router/routes';

@NgModule({
  imports: [AngularCoreModule, AngularUiModule, RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
