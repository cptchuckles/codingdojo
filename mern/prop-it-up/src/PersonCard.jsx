import React from 'react'

/**
 * PersonCard
 * it puts the name on the card or it gets the hose again
 *
 * @param {Object} props
 * @param {string} props.firstName
 * @param {string} props.lastName
 * @param {number} props.age
 * @param {string} props.hairColor
 */
const PersonCard = ({ firstName, lastName, age, hairColor }) => {
    return (
       <div className="card">
            <h2>{ lastName }, { firstName }</h2>
            <p>Age: { age }</p>
            <p>Hair color: { hairColor }</p>
       </div>
    );
}

export default PersonCard;
