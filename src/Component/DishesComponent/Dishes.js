import { getSelectedCategory } from "../../redux/dishesSlice";
import dataDishes from "./dataDishes";
import Dish from "./Dish";
import { useSelector } from "react-redux";



 const Dishes= () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return(
        <div>
    {dataDishes
    .filter(dish =>{
        if (selectedCategory ==='ALL') return true ;
        return selectedCategory ===dish.category;
    })
    .map(dish =>
        <Dish dish={dish}/>)}
        </div>
    );
}
export default Dishes;