import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from 'react';
import Alert from '../../components/Alert';
import LocationInfoBox from '../../components/LocationInfoBox';
import LocationMarker from '../../components/LocationMarker';
import Logo from '../../components/Logo';
import { token } from '../../token/token';
import styles from './Map.module.scss';
const Map = ({ center, zoom, infoCovid }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [alertVisibility, setAlertVisibility] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAlertVisibility(false);
    }, 25000);
  }, []);
  return (
    <div className={styles.map_wrapper}>
      <Logo />
      <GoogleMapReact bootstrapURLKeys={{ key: token }} defaultCenter={center} defaultZoom={zoom}>
        {infoCovid.map((items) => (
          <LocationMarker
            lat={items.countryInfo.lat}
            lng={items.countryInfo.long}
            key={items.country}
            {...items}
            onClick={() => setLocationInfo(items)}
          />
        ))}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
      {alertVisibility && <Alert />}
    </div>
  );
};
Map.defaultProps = {
  center: {
    lat: 61.52,
    lng: 105.32,
  },
  zoom: 3,
};
export default Map;
