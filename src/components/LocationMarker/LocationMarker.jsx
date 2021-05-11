import { Icon } from '@iconify/react';
import roundCoronavirus from '@iconify-icons/ic/round-coronavirus';
import styles from './LocationMarker.module.scss';
const LocationMarker = ({ onClick }) => {
  return (
    <div>
      <Icon icon={roundCoronavirus} className={styles.marker} onClick={onClick} />
    </div>
  );
};

export default LocationMarker;
