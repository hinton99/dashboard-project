import React from 'react'
import { ChevronDownIcon, BellIcon } from './icons'

export const TopBar = () => {
    return (
        <div className="flex flex-row justify-end w-full p-4 bg-white border-b-2 shadow-sm">
            <button className="flex pr-6 text-gray-600 focus:outline-none hover:text-gray-500"><BellIcon className="w-4 h-4" /></button>
            <button className="flex items-center text-gray-700 focus:outline-none">Tom Hinton <ChevronDownIcon className="w-8 h-8 px-2 text-gray-600" /></button>
        </div>
    )
}
