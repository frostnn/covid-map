import styles from './LocationInfoBox.module.scss';
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
  return (
    <div className={styles.info_block}>
      <img src={flag} />
      <h1>
        {country} - {deaths}
      </h1>
      <div>{population}</div>
      <div>total:{cases}</div>
      <div>deaths:{deaths}</div>
    </div>
  );
};

export default LocationInfoBox;
