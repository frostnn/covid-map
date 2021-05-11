import styles from './Logo.module.scss';
import { Icon } from '@iconify/react';
import virusIcon from '@iconify-icons/mdi/virus';
const Logo = () => {
  return (
    <div className={styles.logo_block}>
      <span className={styles.logo_block_title}>Covid</span>
      <Icon icon={virusIcon} className={styles.logo_block_icon} />
      <span className={styles.logo_block_title_map}>MAP</span>
    </div>
  );
};

export default Logo;
