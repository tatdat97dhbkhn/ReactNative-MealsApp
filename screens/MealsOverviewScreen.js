import {CATEGORIES, MEALS} from "../data/dummy-data";
import {useLayoutEffect} from "react";
import MealsList from "../components/MealList/MealsList";

function MealsOverviewScreen({route, navigation}) {
  const {categoryId} = route.params
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0
  })

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title

    navigation.setOptions({
      title: categoryTitle
    })
  }, [categoryId, navigation]);

  return <MealsList items={displayedMeals}></MealsList>
}

export default MealsOverviewScreen
