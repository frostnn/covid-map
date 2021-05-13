import { Icon } from '@iconify/react';
import roundCoronavirus from '@iconify-icons/ic/round-coronavirus';
import styles from './LocationMarker.module.scss';
import classNames from 'classnames';

const LocationMarker = ({ cases, onClick }) => {
  return (
    <div>
      <Icon
        icon={roundCoronavirus}
        className={classNames(
          cases > 1000 && cases < 10000 ? styles.middle : '',
          cases > 10000 ? styles.high : '',
          styles.marker,
        )}
        onClick={onClick}
      />
    </div>
  );
};

export default LocationMarker;
