import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../types/filter.interface";

const API_URL = "http://localhost:3000";

const useCars = () => {
  const context = useContext(FilterContext);

  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(API_URL + "/api/car")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        res.json().then((data) => {
          if (data.length < 0) return;

          if (context.type === "all") {
            setCars(data);
          } else {
            const filteredProducts = data.filter(
              (data: { bodyType: string }) =>
                data.bodyType.toLowerCase().includes(context.type.toLowerCase())
            );
            setCars(filteredProducts);
          }
        });
      }).catch((err) => {
        console.error(err);
      });
  }, [context]);

  return {
    cars
  }

};
export { useCars };

