import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe = {name:'', description:'',imagePath:'', ingredients: []}
  id: number = 0;

  constructor(private recipeService: RecipeService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.id);
    this.route.params.subscribe((param:Params) => {
      this.id = +param['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    })
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes'])
  }
}
