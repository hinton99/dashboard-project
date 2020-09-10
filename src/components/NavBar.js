import React from 'react';
import { NavLink } from 'react-router-dom';


export const NavBar = () => {
    return (
        <aside className="w-64 p-4 bg-blue-600">
            <h1 className="text-3xl text-white"><span className="font-bold">School</span> Spider</h1>
            <h3 className="-mt-1 text-white">Website Administrator</h3>
            <div className="flex flex-col">
                <NavLink className="w-full p-2 mt-20 mb-16 font-semibold text-white rounded-md hover:bg-blue-700" to="/">Home</NavLink>

                <h3 className="mb-4 text-lg font-semibold text-black opacity-50">WEBSITE AREA</h3>

                <NavLink className="w-full p-2 font-semibold text-white rounded-md hover:bg-blue-700" to="/news">News</NavLink>
                <NavLink className="w-full p-2 font-semibold text-white rounded-md hover:bg-blue-700" to="/gallery">Galleries</NavLink>
                <NavLink className="w-full p-2 font-semibold text-white rounded-md hover:bg-blue-700" to="/events">Events</NavLink>
                <NavLink className="w-full p-2 font-semibold text-white rounded-md hover:bg-blue-700" to="/blogs">Blogs</NavLink>
            </div>
        </aside>
    )
}
