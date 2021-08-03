import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IsLoggedService } from './is-logged.service';
import { BooksService } from '../books/books.service';


@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
    ],
    providers: [IsLoggedService, BooksService]
})
export class CoreModule { }
