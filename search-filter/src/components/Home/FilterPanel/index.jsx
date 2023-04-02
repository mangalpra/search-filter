import React from 'react';
import { categoryList, ratingList} from "../../../constants";
import FilterListToggle from '../../common/FilterListToggle';
import CheckboxProton from '../../common/CheckboxProton';
import SliderProton from '../../common/SliderProton';
import "./styles.css";

const FilterPanel = ({ 
    selectedCategory, 
    selectToggle,
    selectedRating,
    selectRating,
    cuisines,
    changeChecked,
    changedPrice,
    selectedPrice,
}) => (
        <div>
            {/* Category */}
            <div className="input-group">
                <p className="label">Category</p>
                <FilterListToggle 
                    options={categoryList} 
                    value={selectedCategory} 
                    selectToggle={selectToggle}
                />
            </div>
            {/* Cusines */}
            <div className='input-group'>
                <p className="label">Cuisine</p>
                {cuisines.map((cuisine) => (
                    <CheckboxProton 
                        key={cuisine.id} 
                        cuisine={cuisine} 
                        changeChecked={changeChecked} 
                    />
                ))}
            </div>
            {/* Price Range */}
            <div className='input-group'>
                <p className="label-range">Price Range</p>
                <SliderProton value={selectedPrice} changedPrice={changedPrice}/>
            </div>
            {/* Star Rating */}
            <div className='input-group'>
                <p className="label">Star Rating</p>
                <FilterListToggle 
                    options={ratingList} 
                    value={selectedRating} 
                    selectToggle={selectRating}
                />
            </div>
        </div>
    );

export default FilterPanel;