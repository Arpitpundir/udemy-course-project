import { Component, OnInit } from '@angular/core';
import {Recipe} from "./../recipe.model"

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { 
    recipes: Recipe[] = ["Test Recipe", "This is simple a test", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0mut59wPI9jAGZeKRcSWS6Uub8jr0NtHe5Q&usqp=CAU"]
  }

  ngOnInit(): void {
  }

}
