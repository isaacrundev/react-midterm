import axios from "axios";

export default function fetchData(liquorName) {
  return axios
    .get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquorName}`
    )
    .then(({ data }) => data.drinks)
    .catch((err) => console.err(`Error Msg: ${err}`));
}
