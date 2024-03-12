import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const navigation = [
  { name: 'Home', href: '/', current: true, icon: <HomeIcon /> },
  { name: 'Produtos', href: '/products', current: false, icon: <ShoppingBagIcon /> },
  { name: 'Comprar', href: '/buy', current: false, icon: <ShoppingCartIcon /> },
  { name: 'Listas', href: '/lists', current: false, icon: <FormatListBulletedIcon /> },
  { name: 'Ajustes', href: '/settings', current: false, icon: <SettingsIcon /> },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (

    <nav className="navbar bg-gray-700">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center ">
          <div className="flex justify-between w-full">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                icon={item.icon}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium flex flex-col items-center'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                <div className="mb-1">{item.icon}</div>
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      
    </nav>

    
  );
}
