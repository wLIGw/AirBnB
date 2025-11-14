import { useState } from 'react';
import CategoryItem from '../CategoryItem/CategoryItem';
import FilterBtn from '../FilterBtn/FilterBtn';
import './style.scss'

import categoriesData from './../../data/categories.json'


const Categories = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    return ( 
        <div className="categories">
            <div className="container">
                <div className="categories__row">
                    <div className="categories__list">

                        {
                            categoriesData.map((cat, index) =>
                                (
                                    <CategoryItem 
                                    title={cat.title} 
                                    img={cat.img} 
                                    key={index}
                                    active={activeCategory === cat.title} 
                                    onClick={() => setActiveCategory(cat.title)} 
                                    />
                                )
                            )
                        }

                    </div>
                        <div className="categories__filter">
                            <FilterBtn />
                        </div>
            </div>
            </div>
        </div>
    );
}

export default Categories;