import React from 'react';
import { FilterIcon } from '../../public/icons/FilterIcon';
import styles from "@/styles/FilterButton.module.css"

export default function FilterButton({ onChange }) {
    return (
        <div className={styles.filterButton}>
            <FilterIcon />
            <select onChange={onChange}>
                <option value="todos">Todos</option>
                <option value="North America">North America</option>
                <option value="Central America">Central America</option>
                <option value="South America">South America</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="África">Africa</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    );
};

