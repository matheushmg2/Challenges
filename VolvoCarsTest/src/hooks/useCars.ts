import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../types/filter.interface";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const useCars = () => {
    const context = useContext(FilterContext);

    const [cars, setCars] = useState([]);
  
    useEffect(() => {
      axios
        .get(API_URL + "/api/cars")
        .then((res) => {
          if (res.data.length < 0) return;
  
          if (context.type === "all") {
            setCars(res.data);
          } else {
            const filteredProducts = res.data.filter(
              (data: { bodyType: string }) =>
                data.bodyType.toLowerCase().includes(context.type.toLowerCase())
            );
            setCars(filteredProducts);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }, [context]);

    return {
        cars
    }

};
export { useCars };

