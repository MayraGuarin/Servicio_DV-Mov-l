import { Component } from '@angular/core';
import { DashboardService } from 'src/app/servicios/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {





constructor(private sdashboard: DashboardService) {}

  ngOnInit(){
  }

}
