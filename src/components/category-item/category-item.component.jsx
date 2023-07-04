import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    return (

        <div className="category-container" >
            {/* <img src="" alt="{}" /> */}
            <div className="background-image" style={
                { backgroundImage: `url(${imageUrl})` }
            } />
            <div className="category-body-container">
                <h2 className="category-title">{title}</h2>
                <p>shop now</p>
            </div>

        </div>

    )
}

export default CategoryItem;