import React, { useState } from 'react'

/**
 * PersonCard
 * it puts the name on the card or it gets the hose again
 *
 * @param {Object} props
 * @param {string} props.firstName
 * @param {string} props.lastName
 * @param {number} props.initialAge
 * @param {string} props.hairColor
 */
const PersonCard = ({ firstName, lastName, initialAge, hairColor }) => {
  const [age, setAge] = useState(initialAge);

  return (
    <div className="card">
      <h2>{ lastName }, { firstName }</h2>
      <div style={{display: "flex", "justify-content": "space-between;"}}>
        <p style={{flex: 1}}>Age: { age }</p>
        <button onClick={() => setAge(age + 1)}>Grow up</button>
      </div>
      <p>Hair color: { hairColor }</p>
    </div>
  );
}

export default PersonCard;
