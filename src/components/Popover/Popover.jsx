import { useState } from 'react';
import styles from './Popover.module.scss';

const Popover = ({ text, children }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={styles.popover_block}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}>
      <div>{children}</div>
      {active && <div className={styles.popover_block_content}>{text}</div>}
    </div>
  );
};

export default Popover;
