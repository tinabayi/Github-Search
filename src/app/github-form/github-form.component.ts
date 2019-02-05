import { Component, OnInit } from '@angular/core';
import{Username}from '../username';

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {
  newUsername=new Username("");

  constructor() { }

  ngOnInit() {
  }

}
