import { useEffect, useState } from 'react';
import { useApp } from '../useProviderApp';

export const useFetch = (apiUrl, deps = []) => {
	const [data, setData] = useState();
    const {setLoading, loading} = useApp()
    async function fetchData(){
        setLoading(true)
        fetch(apiUrl)
			.then(res => res.json())
			.then(data => {
                setData(data)
                setLoading(false)
            }).catch(err => {
                setLoading(false)
            })
    }

	useEffect(() => {
        try {
            fetchData()
        } catch (error) {
            setLoading(false)
        }
		
	}, deps);

	return data;
};