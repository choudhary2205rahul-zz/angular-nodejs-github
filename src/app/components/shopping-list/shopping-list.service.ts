import {Injectable} from '@angular/core';
import {Ingredients} from "../shared/ingredient.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredients[]>();
  ingredientEditing = new Subject<number>();
  private ingredients: Ingredients[] = [
    {name: 'Apples', amount: 10},
    {name: 'Tomatoes', amount: 20},
    {name: 'Oranges', amount: 30},
    {name: 'Grapes', amount: 40},
  ];

  constructor() {
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  getIngredients(): Ingredients[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredients[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(editItemIndex: number, ingredient: Ingredients) {
    this.ingredients[editItemIndex] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(editItemIndex: number) {
    this.ingredients.splice(editItemIndex, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
