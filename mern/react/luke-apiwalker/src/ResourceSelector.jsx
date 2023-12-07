import { useState } from "react";

const validCategories = [
    "people",
    "planets",
    "starships",
    "vehicles",
    "films",
    "species",
]

export default function ResourceSelector({formSubmitAction}) {
    const [category, setCategory] = useState("people");
    const [id, setId] = useState(0);

    function setSafeCategory(ev) {
        ev.preventDefault();
        const newCategory = ev.target.value;

        if (validCategories.includes(newCategory)) {
            setCategory(newCategory);
        }
        else {
            alert("you will be punished");
        }
    }

    function submitAction(ev) {
        ev.preventDefault();
        formSubmitAction({category, id});
    }

    return (
        <form onSubmit={submitAction}>
            <label>Resource type:
                <select name="chosenCategory" onChange={setSafeCategory} value={category}>
                    {validCategories.map(category => (
                        <option key={category} value={category}>
                            {category[0].toUpperCase() + category.slice(1)}
                        </option>
                    ))}
                </select>
            </label>
            <label>ID:
                <input
                    type="number"
                    name="id"
                    value={id}
                    onChange={ev => setId(ev.target.value)}
                />
            </label>
            <button>go!</button>
        </form>
    )
}
