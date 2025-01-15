import { icons } from '../data';
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';

const Footer = () => {
  return (
    <footer className='section footer'>
      <PageLinks parentClass='footer-links' itemClass='footer-link' />

      <ul className='footer-icons'>
        {icons.map((icon) => {
          return <SocialLink key={icon.id} {...icon} itemClass='footer-icon' />;
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
