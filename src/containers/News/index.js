import React, { useState, useEffect } from 'react'
import { NewsList } from '../../components/NewsList';

export const News = () => {

    const [hasError, setErrors] = useState(false);
    const [newsData, setNewsData] = useState([]);
    const [loading, setIsLoading] = useState(false)


    async function fetchData() {

        const res = await fetch("https://api.schoolspider.dev/v1/schools/1/news");
        res.json()
            .then(res => {
                setNewsData(res.data)
                setIsLoading(false)
            })
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        setIsLoading(true)
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="invisible">Loading...</div>
        )
    }

    if (hasError) {
        return (
            <div>error</div>
        )
    }

    return (
        <div className="py-16 mx-16 text-gray-700">
            <div className="bg-white rounded shadow-md">
                <h1 className="p-6 text-2xl">News</h1>
                {newsData && (
                    <NewsList news={newsData} />
                )}
            </div>
        </div>
    )
}
