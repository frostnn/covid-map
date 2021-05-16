import styles from './Popover.module.scss';

const Popover = ({ text }) => {
  return <div className={styles.logo_block}>{text}</div>;
};

export default Popover;
