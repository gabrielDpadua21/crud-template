'use client';
import React from 'react';
import Title from "./Title";

interface LayoutProps {
    title: string;
    children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {

    return (
        <div className={`flex flex-col w-2/3 bg-white text-gray-800 rounded-md`}>
            <Title title={props.title}/>
            <div className={`p-6`}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout;