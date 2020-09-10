import React from 'react'
import { Button } from './Button'

export const CalendarItems = ({ events }) => {
    return (
        <div className="mb-4 bg-white rounded shadow-md">
            <div className="flex items-center justify-between p-6">
                <h2 className="text-2xl text-gray-700">Calendar Items</h2>
                <Button />
            </div>
            <div className="px-6 py-2 bg-gray-200">
                <div className="flex text-lg font-semibold text-gray-600">
                    <h3 className="w-2/3">TITLE</h3>
                    <h3 className="w/1-3">DATE</h3>
                </div>
            </div>
            {events.map(item => (
                <div key={item.id} className="flex px-6 py-4 bg-gray-100 odd:bg-white last:rounded">
                    <a href="/" className="w-2/3">{item.title}</a>
                    <a href="/" className="w-1/3">{item.date}</a>
                </div>
            ))}
        </div>
    )
}
