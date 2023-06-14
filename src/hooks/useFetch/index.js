import { useEffect, useState } from 'react';

export const useFetch = (apiUrl, deps = []) => {
	const [data, setData] = useState();

    async function fetchData(){
        fetch(apiUrl)
			.then(res => res.json())
			.then(data => setData(data));
    }

	useEffect(() => {
        try {
            fetchData()
        } catch (error) {
            console.log(error)
        }
		
	}, deps);

	return data;
};