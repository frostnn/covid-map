import styles from './LocationInfoBox.module.scss';
import { Icon } from '@iconify/react';
import skullIcon from '@iconify-icons/raphael/skull';
import healthIcon from '@iconify-icons/map/health';
import accountIcon from '@iconify-icons/mdi/account';
import bxTestTube from '@iconify-icons/bx/bx-test-tube';
import updateIcon from '@iconify-icons/dashicons/update';
const LocationInfoBox = ({
  info: {
    country,
    deaths,
    updated,
    recovered,
    todayCases,
    todayDeaths,
    todayRecovered,
    population,
    cases,
    tests,
    countryInfo: { flag },
  },
}) => {
  const updateTime = new Date(updated);
  console.log('rer', updateTime);
  return (
    <div className={styles.info_block}>
      <div className={styles.info_block_header}>
        <h1>{country}</h1>
        <img src={flag} alt={country} />
      </div>
      <div className={styles.info_block_body}>
        <div className={styles.info_block_day}>
          <div className={styles.info_block_day_title}>per Day</div>
          <div className={styles.info_block_day_item}>
            <Icon icon={accountIcon} className={styles.skullIcon_accountIcon} />
            {todayCases.toLocaleString()}
          </div>
          <div className={styles.info_block_day_item}>
            <Icon icon={healthIcon} className={styles.healthIcon_icon} />
            {todayRecovered.toLocaleString()}
          </div>
          <div className={styles.info_block_day_item}>
            <Icon icon={skullIcon} className={styles.skullIcon_icon} />
            {todayDeaths.toLocaleString()}
          </div>
          <div className={styles.info_block_day_item}>
            <Icon icon={updateIcon} className={styles.updateIcon_icon} />
            {updateTime.toLocaleString().slice(0, 10)}
          </div>
        </div>
        <div className={styles.info_block_total}>
          <div className={styles.info_block_total_title}>Total</div>
          <div className={styles.info_block_total_item}>
            <Icon icon={accountIcon} className={styles.skullIcon_accountIcon} />
            {cases.toLocaleString()}
          </div>
          <div className={styles.info_block_total_item}>
            <Icon icon={healthIcon} className={styles.healthIcon_icon} />
            {recovered.toLocaleString()}
          </div>
          <div className={styles.info_block_total_item}>
            <Icon icon={skullIcon} className={styles.skullIcon_icon} /> {deaths.toLocaleString()}
          </div>
          <div className={styles.info_block_total_item}>
            <Icon icon={bxTestTube} className={styles.skullIcon_bxTestTube} />
            {tests.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationInfoBox;
