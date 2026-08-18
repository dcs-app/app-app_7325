import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaUtensils, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const navItems = [
  { href: '/', label: 'Home', icon: <FaHome size={20} /> },
  { href: '/menu', label: 'Menu', icon: <FaUtensils size={20} /> },
  { href: '/contact', label: 'Contact', icon: <FaPhone size={20} /> },
  { href: '/location', label: 'Location', icon: <FaMapMarkerAlt size={20} /> },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden bottom-nav">
      <ul className="flex justify-around items-center h-14">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`flex flex-col items-center text-sm ${
                pathname === item.href ? 'text-color-accent' : 'text-gray-600'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}