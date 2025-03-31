import { Link } from 'react-router-dom';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { useAppContext } from './ReactContext';

const Header = () => {
  const { cart } = useAppContext();

  return (
    <nav>
      <div className="logo">
        <Link to="/">LOGO</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="icons">
        <IconButton component={Link} to="/search">
          <SearchIcon />
        </IconButton>
        <IconButton component={Link} to="/cart">
          <Badge badgeContent={cart.length} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <IconButton component={Link} to="/profile">
          <PersonIcon />
        </IconButton>
      </div>
    </nav>
  );
};

export default Header;
