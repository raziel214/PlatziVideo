import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children, title }) => (
    
    <div className='categories'>
        <h3 className='categories_title'>{title} </h3>
        {children}
    </div>

);

export default Categories;