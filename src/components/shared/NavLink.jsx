'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({href, children}) => {
    const currentPath = usePathname();
    const isActive = currentPath === href;
    return (
        <div>
            <Link href={href} className={`${isActive && "text-[#5751E1]"}`}>
                {children}
            </Link>
        </div>
    );
};

export default NavLink;