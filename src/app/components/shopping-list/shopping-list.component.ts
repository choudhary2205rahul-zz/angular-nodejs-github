import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredients} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients: Ingredients[] = [];
  private ingredientsChangedEvent:Subscription = new Subscription();
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();

    this.ingredientsChangedEvent = this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredients[]) => {
      this.ingredients = ingredients;
    }, error => {
      console.log(error);
    });
  }

  ngOnDestroy(): void {
    this.ingredientsChangedEvent.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingListService.ingredientEditing.next(index);
  }
}
