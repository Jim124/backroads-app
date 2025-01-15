const SocialLink = ({ href, text, itemClass }) => {
  return (
    <li>
      <a href={href} target='_blank' className={itemClass} rel='noreferrer'>
        <i className={text}></i>
      </a>
    </li>
  );
};
export default SocialLink;
