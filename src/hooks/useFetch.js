import {useState,useEffect} from 'react'
const useFetch = (url) => {
    
    const [isLoading,setLoading] = useState(true);
    const [hasError, setError] = useState(false);
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => {
            const dataToReturn = res.json()
            setLoading(false);
            return dataToReturn;
        })
        .catch(err => setError(err))
        .then(parsedData => setData(parsedData))
    },[url])

    return [data,isLoading,hasError]
}


export default useFetch;