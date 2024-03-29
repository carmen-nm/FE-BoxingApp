import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  @Input('formType')
  formType: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router){
    this.formType = "";
  }
}
