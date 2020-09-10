import React, { useState, useEffect } from 'react'
import { BlogsList } from '../../components/BlogsList';

export const Blogs = () => {

    const [hasError, setErrors] = useState(false);
    const [blogsData, setBlogsData] = useState([]);
    const [loading, setIsLoading] = useState(false)


    async function fetchData() {

        const res = await fetch("https://api.schoolspider.dev/v1/schools/1/blogs");
        res.json()
            .then(res => {
                setBlogsData(res.data)
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
                <h1 className="p-6 text-2xl">Blogs</h1>
                {blogsData && (
                    <BlogsList blogs={blogsData} />
                )}
            </div>
        </div>
    )
}
