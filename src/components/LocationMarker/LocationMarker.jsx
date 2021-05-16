import { Icon } from '@iconify/react';
import styles from './LocationMarker.module.scss';
import classNames from 'classnames';
import virusIcon from '@iconify-icons/mdi/virus';
const LocationMarker = ({ cases, onClick }) => {
  return (
    <div>
      <Icon
        icon={virusIcon}
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
