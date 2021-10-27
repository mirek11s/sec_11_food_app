import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [mealsState, setMealsState] = useState([]);
  const [isLoadingMenu, setIsLoadingMenu] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-app-5d01f-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      const responseData = await response.json();

      // if (!response.ok) {
      //   throw new Error("Something went wrong!");
      // }

      const loadedMeals = [];

      //key are the ids in the nested object in Firebase DB
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMealsState(loadedMeals);
      setIsLoadingMenu(false);
    };

    fetchMeals().catch((error) => {
      setIsLoadingMenu(false);
      setHttpError('Something went wrong! Failed to fetch the data.');
    });
  }, []);

  //check if menu is loading
  if (isLoadingMenu) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading..</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = mealsState.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
