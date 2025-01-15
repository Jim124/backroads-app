import logo from '../images/logo.svg';
import { links, icons } from '../data';
const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className='nav-links' id='nav-links'>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className='nav-link'>
                  {link.text}
                </a>
              </li>
            );
          })}

          {/* <li>
            <a href='#about' className='nav-link'>
              {' '}
              about{' '}
            </a>
          </li>

          <li>
            <a href='#services' className='nav-link'>
              {' '}
              services{' '}
            </a>
          </li>

          <li>
            <a href='#tours' className='nav-link'>
              {' '}
              tours
            </a>
          </li> */}
        </ul>

        <ul className='nav-icons'>
          {icons.map((icon) => {
            const { id, href, text } = icon;
            return (
              <li key={id}>
                <a
                  href={href}
                  target='_blank'
                  className='nav-icon'
                  rel='noreferrer'
                >
                  <i className={text}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
