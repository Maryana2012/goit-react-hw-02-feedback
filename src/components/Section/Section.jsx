import PropTypes from 'prop-types';
import React from "react";
import css from '../Section/Section.module.css'
export default function Section({title, children}) {
    return (<div className={css.Section}>
           <h1 className={css.Title}>{title}</h1>
           {children}
           </div>)
}
Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.object).isRequired
}