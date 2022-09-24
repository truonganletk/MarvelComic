import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import {
    // useLocation,
    useNavigate, createSearchParams
} from "react-router-dom";
import ListC from '../ListC/ListC';


const SearchContent = () => {
    const [limit] = useState(20);
    const [contentType, setContentType] = useState("Characters");
    const [nameStart, setNameStart] = useState("");
    const [loadList, setLoadList] = useState(false);

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
        if (nameStart !== "") {
            setLoadList(false);
            setLoadList(true);
        }
        navigateHandler();
    }, [limit, contentType, nameStart, navigate])

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setNameStart(e.target.value);
        }
    }
    // const { search } = useLocation();
    return (
        <div className='search-content'>
            {/* <div>Query search: {search}</div> */}
            <div className='search-block'>
                <div className='search-icon'><FontAwesomeIcon icon={faSearchengin} /></div>
                <input type={"text"} placeholder="SEARCH" className="search-input" onKeyPress={(e) => { handleKeyPress(e) }} />
            </div>
            <ul>
                <li className={`search-btn ${contentType === "Characters" ? "active" : ""}`} onClick={() => setContentType("Characters")}>
                    Characters
                </li>
                <li className={`search-btn ${contentType === "Comics" ? "active" : ""}`} onClick={() => setContentType("Comics")}>
                    Comics
                </li>
            </ul>
            {
                loadList ? <ListC nameStartWith={nameStart} /> : <></>
            }
        </div>
    );
};


export default SearchContent