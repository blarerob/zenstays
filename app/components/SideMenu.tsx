import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { DollarSign, SquarePen, CalendarCheck, HeartPulse, Phone, PersonStanding, Settings } from 'lucide-react';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';

const CustomImageIcon = () => (
    <Image src="/logo.jpeg" alt="About Us" width={24} height={24} />
);

const navLinks = [
 { icon: DollarSign, label: 'Pricing', href: "/properties" },
 { icon: SquarePen, label: "Applications", href: "/applications" },
 { icon: CalendarCheck, label: 'Book Direct', href: "/settings" },
 { icon: HeartPulse, label: "Favorites", href: "/favorites" },
 { icon: Phone, label: 'Contact Us', href: "/applications" },
{ icon: Settings, label: "Settings", href: "/settings" },
 { icon: CustomImageIcon, label: 'About Us', href: "/residences" },
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
       backgroundColor: 'rgb(34, 197, 94)', // bg-green-500
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
              height: '35vh',
              width: '18ch',
            },
          },
        }}
      >
        {navLinks.map((link) => (
         <Link key={link.label} href={link.href} onClick={handleClose}>
             <div className="flex items-center hover:bg-gray-100 hover:w-full  gap-3 ml-2">
                 <link.icon
                     className="h-5 w-5 text-green-600"
                 />
                 <span
                 className="font-normal text-black text-md hover:bg-gray-100 hover:w-full flex justify-between items-center mt-1 p-2"
                 >
                        {link.label}
                      </span>
             </div>
         </Link>
        ))}
      </Menu>
    </div>
  );
}
