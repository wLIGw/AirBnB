import styles from './style.module.scss';

const Link = ({ text, style, icon, iconPosition = 'left' }) => {
  return (
    <a
      href="#!"
      className={`${styles.link} ${style === 'light' ? styles.linkLight : ''} ${
        iconPosition === 'right' ? styles.iconRight : ''
      }`}
    >
      {icon && iconPosition === 'left' && <img src={icon} alt="" />}
      {text}
      {icon && iconPosition === 'right' && <img src={icon} alt="" />}
    </a>
  );
};

export default Link;