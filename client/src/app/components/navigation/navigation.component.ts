import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document, public auth:AuthService) { }

  ngOnInit(): void {
  }

}
