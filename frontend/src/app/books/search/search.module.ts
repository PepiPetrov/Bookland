import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NameComponent } from './name/name.component'
import { SearchService } from './search.service';
import { BooksService } from '../books.service';
import { FormsModule } from '@angular/forms';
import { ButtonDirective } from './button.directive';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { AuthorComponent } from './author/author.component';
import { YearComponent } from './year/year.component';



@NgModule({
  declarations: [
    MainComponent,
    NameComponent,
    ButtonDirective,
    AuthorComponent,
    YearComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [SearchService, BooksService]
})
export class SearchModule { }
