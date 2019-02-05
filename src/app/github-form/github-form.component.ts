
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import{Username}from '../username';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {
username:""
  //UsernameInput=new Username("");
// @Output() add  username=new EventEmitter<Username>();
    
    submitInput(){
       console.log(username)
  
    }
  constructor() { }
  
  ngOnInit() {
  }

  }
