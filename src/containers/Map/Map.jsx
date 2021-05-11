import GoogleMapReact from 'google-map-react';
import { useState } from 'react';
import LocationInfoBox from '../../components/LocationInfoBox';
import LocationMarker from '../../components/LocationMarker';
import Logo from '../../components/Logo';
import { token } from '../../token/token';
import styles from './Map.module.scss';
const Map = ({ center, zoom, infoCovid }) => {
  const [locationInfo, setLocationInfo] = useState(null);

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
