import { Link } from 'react-router-dom';

const Navbar = () => {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Table', path: '/table' },
    { name: 'Form', path: '/formik' },
    { name: 'Multi Step Form', path: '/multi-step' },
    { name: 'Login', path: '/login' },
    { name: 'Register', path: '/register' },
  ];

  return (
    <nav className="navbar" style={{ backgroundColor: 'blue', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', fontFamily: 'sans-serif' }}>
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" style={{ width: '150px', height: 'auto' }} />
      </div>
      <ul className="navbar-menu" style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0 }}>
        {menuItems && menuItems.map((item, index) => (
          <li key={index} style={{ marginLeft: '20px' }}>
            <Link to={item && item.path} style={{ color: 'white', textDecoration: 'none' }}>{item && item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
