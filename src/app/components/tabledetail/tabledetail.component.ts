import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabledetail',
  standalone: true,
  imports: [],
  templateUrl: './tabledetail.component.html',
  styleUrl: './tabledetail.component.css'
})
export class TabledetailComponent {
  constructor(private router: Router) {}

    navigateToHomePage() {
        this.router.navigate(['/home']); 
    }

}
