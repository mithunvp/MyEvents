import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `  
    <div class="container">
    <app-header></app-header>
    <section class="hero">
      <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Angular with Bulma
        </h1>
        <h2 class="subtitle">
          App is styled using Bulma
        </h2>
    </div>
  </div>
</section>
    <app-footer></app-footer>
  </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'my-events';
}