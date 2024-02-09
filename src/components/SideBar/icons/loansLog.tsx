import { usePathname } from 'next/navigation';
import React from 'react'

const LoansLogs = () => {
    const pathname = usePathname();

    return (
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.50423 0.335754H16.5042C16.9645 0.335754 17.3376 0.708846 17.3376 1.16909V12.8357C17.3376 13.296 16.9645 13.6691 16.5042 13.6691H1.50423C1.044 13.6691 0.670898 13.296 0.670898 12.8357V1.16909C0.670898 0.708846 1.044 0.335754 1.50423 0.335754ZM4.41714 1.99998H2.33381V4.08331C3.4844 4.08331 4.41714 3.15057 4.41714 1.99998ZM13.5838 1.99998C13.5838 3.15057 14.5166 4.08331 15.6672 4.08331V1.99998H13.5838ZM2.33381 9.91665V12H4.41714C4.41714 10.8494 3.4844 9.91665 2.33381 9.91665ZM13.5838 12H15.6672V9.91665C14.5166 9.91665 13.5838 10.8494 13.5838 12ZM9.0005 10.3333C10.8414 10.3333 12.3338 8.8409 12.3338 6.99998C12.3338 5.15903 10.8414 3.66665 9.0005 3.66665C7.15952 3.66665 5.66714 5.15903 5.66714 6.99998C5.66714 8.8409 7.15952 10.3333 9.0005 10.3333Z" fill={pathname === "/loans" ? "#EA760F" : "white"} fillOpacity={pathname === "loans" ? "1" : "0.5"} />
        </svg>

    )
}

export default LoansLogs