// components/Popover.tsx
import { ReactNode, useState, useEffect } from "react";

interface PopoverProps {
    children: ReactNode;
    content: ReactNode;
}

const Popover: React.FC<PopoverProps> = ({ children, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                (isOpen && !event.target) ||
                !(event.target as HTMLElement).closest(".popover-content")
            ) {
                closePopover();
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [isOpen]);

    const openPopover = () => {
        setIsOpen(true);
    };

    const closePopover = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block">
            <div className="cursor-pointer" onClick={openPopover}>
                {children}
            </div>
            {isOpen && (
                <div
                    className={`absolute top-full left-0 z-10 bg-white shadow-md rounded-md ${
                        isOpen ? "opacity-100" : "opacity-0"
                    } transform translate-y-[-10px] transition-opacity duration-300 ease-in-out`}
                >
                    <div className="p-4">{content}</div>
                </div>
            )}
        </div>
    );
};

export default Popover;
