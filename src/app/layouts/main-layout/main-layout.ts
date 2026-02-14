import { Component } from '@angular/core';
import { Header } from '../../core/header/header';
import { Footer } from '../../core/footer/footer';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet,Header, Footer],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

}
