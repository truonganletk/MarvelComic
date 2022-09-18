import React, { useEffect, useState } from 'react'
import {
    useLocation,
    useNavigate, createSearchParams
} from "react-router-dom";


const SearchContent = () => {
    const [limit] = useState(20);
    const [contentType, setContentType] = useState("");
    const [nameStart] = useState("");

    const navigate = useNavigate();


    useEffect(() => {
        const navigateHandler = () => {

            navigate({
                search: createSearchParams({
                    limit: limit,
                    contentType: contentType,
                    nameStart: nameStart
                }).toString()
            });
        };
        navigateHandler();
    }, [limit, contentType, nameStart, navigate])


    const { search } = useLocation();
    return (
        <>
            <div>Query search: {search}</div>
            <button onClick={() => setContentType("Characters")}>
                Characters
            </button>
            <button onClick={() => setContentType("Comics")}>
                Comics
            </button>
        </>
    );
};


export default SearchContent