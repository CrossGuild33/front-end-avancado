import {useEffect, useState} from 'react';

export const useFetch = (url) => {

const [callFetch, setCallFetch] = useState(false);
const [error, setError] = useState(false);
const [loading, setLoading] = useState(false);
const [itemId, setItemId] = useState(null);
const [data, setData] = useState(null);
const [method, setMethod] = useState(null);
const [config, setConfig] = useState(null);


const httpConfig = (data, method) => {

    if (method === "POST") {
        setConfig({
            method,
            headers:{
            "Content-Type":"application/json"
            },
            body:JSON.stringify(data),
        });
        setMethod(method);

    } else if(method === "DELETE") {
        setConfig({
            method,
            headers:{
            "Content-Type":"application/json"
            },
        });
        setMethod(method);
    }
    setItemId(data);
}


useEffect(() => {

    setLoading(true);
    const fetchData = async() => {
      try{  const res = await fetch(url);

        const json = await res.json();

        setError(null);

        setData(json);
        
        setLoading(false);
     }catch (error) {
        setError('Item não encontrado!');
        setLoading(false);
    }    
    }
    fetchData();
    
},[url, callFetch]);

useEffect(() => {
    const httpRequest = async() => {

        let json
        if(method === "POST"){
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);
        json = await res.json();

    
    } else if(method === "DELETE") {
        
        let deleteUrl = `${url}/${itemId}`

        const res = await fetch(deleteUrl, config);
        json = await res.json();
    }
     setCallFetch(json);
  }
    httpRequest();
},[method, config, itemId, url])

return {data, httpConfig, loading, error};
};

