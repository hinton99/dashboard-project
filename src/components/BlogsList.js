import React from 'react'

export const BlogsList = ({ blogs }) => {
    return (
        <div className="flex flex-col">
            <div className="flex px-6 py-2 text-lg font-semibold text-gray-600 bg-gray-200">
                <h3 className="w-2/3">TITLE</h3>
                <h3 className="w-1/3">DATE</h3>
            </div>
            {blogs.map(blog => (
                <div key={blog.id} className="flex px-6 py-4 bg-gray-100 odd:bg-white last:rounded">
                    <a href="/" className="w-2/3">{blog.title}</a>
                    <a href="/" className="w-1/3">{blog.date}</a>
                </div>
            ))}
        </div>
    )
}
