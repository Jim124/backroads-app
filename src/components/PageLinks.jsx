import { links } from '../data';
import PageLink from './PageLink';
const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {links.map((link) => {
        return <PageLink key={link.id} {...link} itemClass={itemClass} />;
      })}
    </ul>
  );
};
export default PageLinks;
