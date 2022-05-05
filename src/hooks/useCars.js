import { useEffect, useState } from "react";

const useCars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://carmax.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [cars]);
    return [cars, setCars];
}

export default useCars;

