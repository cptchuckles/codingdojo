import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

function mapHeading(obj) {
    if (obj === null) {
        return "Error, try again";
    }
    else if (obj === undefined) {
        return "Loading...";
    }

    return [obj.title, obj.name].reduce((a, v) => v ?? a);
}

function catchInterestingStats(obj) {
    if (obj == null) {
        return {};
    }
    const {
        model,
        height,
        mass,
        birth_year,
        hair_color,
        eye_color,
        gender,
        width,
        length,
        weight,
        age,
        planet,
        manufacturer,
        vehicle_class,
        crew,
        cost_in_credits,
        cargo_capacity,
        rotation_period,
        climate,
        terrian,
        gravity,
        population,
        passengers,
        hyperdrive_rating,
        starship_class,
        episode_id,
        director,
        producer,
        release_date,
        opening_crawl,
        designation,
        classification,
        skin_colors,
        average_lifespan,
        language,
    } = obj;
    return {
        model,
        height,
        mass,
        birth_year,
        hair_color,
        eye_color,
        gender,
        width,
        length,
        weight,
        age,
        planet,
        manufacturer,
        vehicle_class,
        crew,
        cost_in_credits,
        cargo_capacity,
        rotation_period,
        climate,
        terrian,
        gravity,
        population,
        passengers,
        hyperdrive_rating,
        starship_class,
        episode_id,
        director,
        producer,
        release_date,
        opening_crawl,
        designation,
        classification,
        skin_colors,
        average_lifespan,
        language,
    };
}

export default function ResourceViewer() {
    const {category, id} = useParams();
    const [swapiResult, setSwapiResult] = useState(undefined);

    const [heading, setHeading] = useState("Loading...");
    const [stats, setStats] = useState({});
    const [err, setErr] = useState(false);

    useEffect(() => {
        async function hitSwapi() {
            try {
                setErr(false);
                setHeading("Loading...");
                setStats({});

                const result = await axios.get(`https://swapi.dev/api/${category}/${id}/`);

                setSwapiResult(result.data);
            }
            catch (err) {
                setSwapiResult(null);
                setErr(true);
            }
        }

        hitSwapi();
    }, [category, id]);

    useEffect(() => {
        setHeading(mapHeading(swapiResult));
        setStats(catchInterestingStats(swapiResult));
    }, [swapiResult])

    return (
        <div style={{width: "100%", margin: "auto", textAlign: "left"}}>
            <h2>{heading}</h2>
            <ul>
                {Object.entries(stats).filter(([_,v]) => v).map(([stat,value]) => (
                    <li key={stat}><strong>{stat}:</strong> {value}</li>
                ))}
            </ul>
            { err && (
            <img src="http://www.quickmeme.com/img/41/41a3aa84f9db2059b7d0d2e90d23a5094c812831c99fb72aa482d19e1edf32f7.jpg" />
            )}
        </div>
    )
}
