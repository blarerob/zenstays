import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import {DollarSign, SquarePen, BookImage, WrenchIcon} from 'lucide-react';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Image from 'next/image';

const CustomImageIcon = () => (
    <Image src="/logo.jpeg" alt="About Us" width={24} height={24} />
);

type NavLink = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
    href?: string;
    externalLink?: string;
};

const navLinks: NavLink[] = [
    { icon: DollarSign, label: 'Pricing', href: "/pricing" },
    { icon: SquarePen, label: "Free Consultation", href: "/booknow" },
    { icon: BookImage, label: 'ZENbooks', externalLink: "http://localhost:3001/" },
    { icon: WrenchIcon, label: 'Services', href: "/services" },
    { icon: CustomImageIcon, label: 'About Us', href: "/aboutus" },
];

export default function SideMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={{ position: 'fixed', top: 0, right: 0, zIndex: 1000 }}>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MenuIcon
                    style={{
                        fontSize: '40px',
                        color: 'white',
                        backgroundColor: '#766a55', // bg-custom-color
                        borderRadius: '50%',
                        padding: '8px',
                        cursor: 'pointer',
                    }}
                    className="mr-4 transform transition-transform duration-600 hover:scale-115"
                />
            </IconButton>

            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        style: {
                            height: '23vh',
                            width: '18ch',
                        },
                    },
                }}
            >
                {navLinks.map((link) => (
                    link.externalLink ? (
                        <a
                            key={link.label}
                            href={link.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleClose}
                        >
                            <div className="flex items-center gap-3 ml-2 p-2 hover:bg-gray-100 hover:w-full">
                                <link.icon className="h-5 w-5 text-[#566b30] flex-shrink-0" />
                                <span className="font-normal text-black text-md flex-1">
                                    {link.label}
                                </span>
                            </div>
                        </a>
                    ) : link.href ? (
                        <Link href={link.href} key={link.label} onClick={handleClose}>
                            <div className="flex items-center gap-3 ml-2 p-2 hover:bg-gray-100 hover:w-full">
                                <link.icon className="h-5 w-5 text-[#566b30] flex-shrink-0" />
                                <span className="font-normal text-black text-md flex-1">
                                    {link.label}
                                </span>
                            </div>
                        </Link>
                    ) : null
                ))}
            </Menu>
        </div>
    );
}