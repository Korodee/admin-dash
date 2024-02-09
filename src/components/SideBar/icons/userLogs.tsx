import { usePathname } from 'next/navigation';
import React from 'react'

const UserLogs = () => {
    const pathname = usePathname();

    return (
        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.00008 13.1667C11.0521 13.1667 13.7209 14.4793 15.1727 16.4373L13.6377 17.1634C12.4562 15.7631 10.3729 14.8334 8.00008 14.8334C5.62723 14.8334 3.54393 15.7631 2.36249 17.1634L0.828125 16.4365C2.27997 14.4789 4.94847 13.1667 8.00008 13.1667ZM8.00008 0.666687C10.3012 0.666687 12.1668 2.53217 12.1668 4.83335V7.33335C12.1668 9.63452 10.3012 11.5 8.00008 11.5C5.69889 11.5 3.83342 9.63452 3.83342 7.33335V4.83335C3.83342 2.53217 5.69889 0.666687 8.00008 0.666687Z" fill={pathname === "/users" ? "#EA760F" : "white"} fillOpacity={pathname === "users" ? "1" : "0.5"} />
        </svg>
    )
}

export default UserLogs