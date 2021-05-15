import './CovidMap.scss';
import Map from '../containers/Map';
import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import getDataApi from '../fetch/fetch';
import { COUNTRY, WORLD } from '../constants/constants';

const CovidMap = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [infoCovid, setInfoCovid] = useState([]);
  const [infoCovidWorld, setInfoCovidWorld] = useState([]);
  const [search, setSearch] = useState('');
  const getResult = async (url) => {
    const data = await getDataApi(url);
    if (data) {
      setInfoCovid(data);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  };
  const getResultWorld = async (url) => {
    const data = await getDataApi(url);
    if (data) {
      setInfoCovidWorld(data);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  };
  console.log(infoCovid);
  useEffect(() => {
    getResult(COUNTRY);
    getResultWorld(WORLD);
  }, []);
  return (
    <React.Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <Map
          infoCovid={infoCovid}
          search={search}
          setSearch={setSearch}
          infoCovidWorld={infoCovidWorld}
        />
      )}
    </React.Fragment>
  );
};

export default CovidMap;
