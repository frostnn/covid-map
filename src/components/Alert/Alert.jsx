import styles from './Alert.module.scss';
import { Icon } from '@iconify/react';
import alertTriangle from '@iconify-icons/feather/alert-triangle';

const Alert = () => {
  return (
    <div className={styles.alert_block}>
      <div className={styles.alert_block_icon}>
        <Icon icon={alertTriangle} className={styles.updateIcon_icon} />
      </div>
      <div className={styles.alert_block_text}>
        This information may be inaccurate and may differ from official statistics. Please do not
        refer to this project as official COVID-19 statistics.
      </div>
    </div>
  );
};

export default Alert;
