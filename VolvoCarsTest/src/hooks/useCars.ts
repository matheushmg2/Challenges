import axios from "axios";
import { useEffect, useState } from "react";

const useCars = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/api/cars").then((res) => {
            setCars(res.data)
        }).catch((err) => {
            console.error(err)
        });
    }, [])

    return {
        cars
    }

};
export { useCars };

