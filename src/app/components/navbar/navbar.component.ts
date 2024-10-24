import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {}

  onSearch(term: string) {
    if (term) {
      console.log('Searching for:', term);
      // Aquí puedes implementar la lógica para redirigir o filtrar resultados
      // Por ejemplo, podrías redirigir a una página de resultados
      // this.router.navigate(['/search-results'], { queryParams: { q: term } });
    }
  }
}
