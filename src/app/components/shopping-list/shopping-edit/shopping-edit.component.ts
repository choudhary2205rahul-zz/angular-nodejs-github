import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredients} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // @ts-ignore
  @ViewChild('f') shoppingListForm: NgForm;
  private ingredientEditingSubs: Subscription = new Subscription();
  editMode: boolean = false;
  private editItemIndex: number = 0;
  editedItem: Ingredients = {name: '', amount: 0};

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.shoppingListService.ingredientEditing.subscribe(id => {
      this.editMode = true;
      this.editItemIndex = id;
      this.editedItem = this.shoppingListService.getIngredient(id);

      this.shoppingListForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount

      })
    })
  }

  onIngredientAddOrUpdate(form: NgForm) {
    const newIngredient: Ingredients = {name: form.value.name, amount: form.value.amount};
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onIngredientDelete() {
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.onIngredientClear();
  }

  onIngredientClear() {
    this.editMode = false;
    this.shoppingListForm.reset();
  }

  ngOnDestroy(): void {
    this.ingredientEditingSubs.unsubscribe();
  }
}
