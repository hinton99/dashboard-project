import React, { useState, useEffect } from 'react'
import { EventsList } from '../../components/EventsList';

export const Events = () => {

    const [hasError, setErrors] = useState(false);
    const [eventsData, setEventsData] = useState([]);
    const [loading, setIsLoading] = useState(false)


    async function fetchData() {

        const res = await fetch("https://api.schoolspider.dev/v1/schools/1/events");
        res.json()
            .then(res => {
                setEventsData(res.data)
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
                <h1 className="p-6 text-2xl">Events</h1>
                {eventsData && (
                    <EventsList events={eventsData} />
                )}
            </div>
        </div>
    )
}
