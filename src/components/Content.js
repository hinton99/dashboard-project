import React from 'react'
import { NewsItems } from './NewsItems'
import { GalleryItems } from './GalleryItems'
import { WebsiteBlogs } from './WebsiteBlogs'
import { CalendarItems } from './CalendarItems'

export const Content = () => {
    return (
        <div className="pt-16 text-gray-700">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="mx-8 lg:mx-20">
                        <NewsItems />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="mx-8 lg:mx-20">
                        {/* <GalleryItems /> */}
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="mx-8 lg:mx-20">
                        {/* <WebsiteBlogs /> */}
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="mx-8 lg:mx-20">
                        {/* <CalendarItems /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
