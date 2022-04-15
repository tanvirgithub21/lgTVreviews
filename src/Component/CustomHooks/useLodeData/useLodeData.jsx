import { useEffect, useState } from "react";

const useLodeData = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/tanvirgithub21/ass-9-data/gh-pages/MOCK_DATA.json")
        .then(Response => Response.json())
        .then(data => setUsers(data))
    },[])

    return [users, setUsers]
};

export default useLodeData;