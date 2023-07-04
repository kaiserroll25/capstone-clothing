import CategoryItem from "../category-item/category-item.component";
import './categories-page.styles.scss';


const CategoryPage = ({ categories }) => {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    )


}

export default CategoryPage;