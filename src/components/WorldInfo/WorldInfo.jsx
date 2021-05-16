import styles from './WorldInfo.module.scss';
import { Icon } from '@iconify/react';
import skullIcon from '@iconify-icons/raphael/skull';
import healthIcon from '@iconify-icons/map/health';
import accountIcon from '@iconify-icons/mdi/account';

const WorldInfo = ({ infoCovidWorld: { TotalConfirmed, TotalDeaths, TotalRecovered } }) => {
  return (
    <div className={styles.world_block}>
      <div className={styles.world_block_title}>World</div>
      <div>
        <div className={styles.world_block_total_item}>
          <Icon icon={accountIcon} className={styles.skullIcon_accountIcon} />
          {TotalConfirmed.toLocaleString()}
        </div>
        <div className={styles.world_block_total_item}>
          <Icon icon={healthIcon} className={styles.healthIcon_icon} />
          {TotalRecovered.toLocaleString()}
        </div>
        <div className={styles.world_block_total_item}>
          <Icon icon={skullIcon} className={styles.skullIcon_icon} /> {TotalDeaths.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default WorldInfo;
