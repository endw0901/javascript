# memo

<img src="https://github.com/endw0901/javascript/blob/main/meal-finder/img.png" width="30%">

## API

- [The Meal DB](https://www.themealdb.com/api.php)

```
List all meals by first letter
www.themealdb.com/api/json/v1/1/search.php?f=a
```

## Javascript

- 複数の const をまとめて定義する方法
- 検索文字列が空かどうかの判定：

```
if (term.trim()) {
```

- key-value の配列を検索して DOM 作成

```
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }
```
