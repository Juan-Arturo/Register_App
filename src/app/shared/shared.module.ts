import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmptyHeaderComponent } from './components/empty-header/empty-header.component';

@NgModule({
  declarations: [
    ContentComponent,
    HeaderComponent,
    SidebarComponent,
    NotFoundComponent,
    FooterComponent,
    EmptyHeaderComponent
  ],
  exports: [
    ContentComponent,
    HeaderComponent,
    SidebarComponent,
    NotFoundComponent,
    FooterComponent,
    EmptyHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
