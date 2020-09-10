import React from 'react';
import { Link } from 'react-router-dom';


export const NewsList = ({ news }) => {
    return (
        <div className="flex flex-col">
            <div className="flex px-6 py-2 text-lg font-semibold text-gray-600 bg-gray-200">
                <h3 className="w-2/3">TITLE</h3>
                <h3 className="w-1/3">DATE</h3>
            </div>
            {news.map(item => (
                <div key={item.id} className="flex px-6 py-4 bg-gray-100 odd:bg-white last:rounded">
                    <Link to="/news/item" as={`/news/${item.id}`} className="w-2/3">{item.title}</Link>
                    <Link to="/news/item" as={`/news/${item.id}`} className="w-1/3">{item.date}</Link>
                </div>
            ))}
        </div>
    )
}
