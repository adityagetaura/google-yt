import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "a33ce6ff10cf448d9";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
                );
                if (response.ok) {
                    const result = await response.json();
                    setData(result);
                } else {
                    throw new Error('Network response was not ok.');
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle error here (e.g., set error state)
            }
        };

        fetchData(); // Call fetchData function to initiate API request
    }, [term]);

    return { data };
};

export default useGoogleSearch;
