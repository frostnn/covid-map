import './CovidMap.scss';
import Map from '../containers/Map';
import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import getDataApi from '../fetch/fetch';
import { RUSSIA } from '../constants/constants';

const CovidMap = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [infoCovid, setInfoCovid] = useState([]);

  const getResult = async (url) => {
    const data = await getDataApi(url);
    if (data) {
      setInfoCovid(data);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  };
  console.log(infoCovid);
  useEffect(() => {
    getResult(RUSSIA);
  }, []);
  return <React.Fragment>{isLoading ? <Loading /> : <Map infoCovid={infoCovid} />}</React.Fragment>;
};

export default CovidMap;
