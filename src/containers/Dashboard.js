import React, { useState, useEffect } from 'react'
import { NewsItems } from '../components/NewsItems'
import { GalleryItems } from '../components/GalleryItems'
import { WebsiteBlogs } from '../components/WebsiteBlogs'
import { CalendarItems } from '../components/CalendarItems'

export const Dashboard = () => {

    const [hasError, setErrors] = useState(false);
    const [homepageData, setHomepageData] = useState({});
    const [loading, setIsLoading] = useState(false)


    async function fetchData() {

        const res = await fetch("https://api.schoolspider.dev/v1/schools/1/dashboard");
        res.json()
            .then(res => {
                setHomepageData(res.data)
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
        <>
            <div className="pt-16 text-gray-700">
                <div className="flex flex-wrap">
                    <div className="w-full xl:w-1/2">
                        <div className="mx-8 xl:mx-20">
                            {homepageData.news && (
                                <NewsItems news={homepageData.news} />
                            )}
                        </div>
                    </div>
                    <div className="w-full xl:w-1/2">
                        <div className="mx-8 xl:mx-20">
                            {homepageData.galleries && (
                                <GalleryItems galleries={homepageData.galleries} />
                            )}
                        </div>
                    </div>
                    <div className="w-full xl:w-1/2">
                        <div className="mx-8 xl:mx-20">
                            {homepageData.blogs && (
                                <WebsiteBlogs blogs={homepageData.blogs} />
                            )}
                        </div>
                    </div>
                    <div className="w-full xl:w-1/2">
                        <div className="mx-8 xl:mx-20">
                            {homepageData.events && (
                                <CalendarItems events={homepageData.events} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
