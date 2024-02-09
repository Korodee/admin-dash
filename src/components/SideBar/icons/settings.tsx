import { usePathname } from 'next/navigation';
import React from 'react'

const Settings = () => {
    const pathname = usePathname();

    return (
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.00016 0.833313L15.9168 5.41665V14.5833L8.00016 19.1666L0.0834961 14.5833V5.41665L8.00016 0.833313ZM8.00016 12.5C9.38091 12.5 10.5002 11.3807 10.5002 9.99998C10.5002 8.61923 9.38091 7.49998 8.00016 7.49998C6.61941 7.49998 5.50016 8.61923 5.50016 9.99998C5.50016 11.3807 6.61941 12.5 8.00016 12.5Z" fill={pathname === "/settings" ? "#EA760F" : "white"} fillOpacity={pathname === "settings" ? "1" : "0.5"}/>
        </svg>


    )
}

export default Settings