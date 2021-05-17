import styles from './Top.module.scss';
import { Icon } from '@iconify/react';
import skullIcon from '@iconify-icons/raphael/skull';
import healthIcon from '@iconify-icons/map/health';
import accountIcon from '@iconify-icons/mdi/account';
import { useState } from 'react';
import classNames from 'classnames';

const Top = ({ infoCovid }) => {
  const [active, setActive] = useState(1);
  const toggleTab = (index) => {
    setActive(index);
  };
  return (
    <div className={styles.top_block}>
      <div className={styles.top_block_title}>Top - 10 country COVID-19</div>
      <div className={styles.top_block_tabs}>
        <div
          className={classNames(styles.top_block_tabs_item, active === 1 && styles.tab_active)}
          onClick={() => toggleTab(1)}>
          <div>
            <Icon icon={accountIcon} className={styles.skullIcon_icon} />
          </div>
          <div className={styles.top_block_tabs_item_title}>Cases</div>
        </div>
        <div
          className={classNames(styles.top_block_tabs_item, active === 2 && styles.tab_active)}
          onClick={() => toggleTab(2)}>
          <div>
            <Icon icon={skullIcon} className={styles.deaths_icon} />
          </div>
          <div className={styles.top_block_tabs_item_title}>Deaths</div>
        </div>
        <div
          className={classNames(styles.top_block_tabs_item, active === 3 && styles.tab_active)}
          onClick={() => toggleTab(3)}>
          <div>
            <Icon icon={healthIcon} className={styles.recovered_icon} />
          </div>
          <div className={styles.top_block_tabs_item_title}>Recovered</div>
        </div>
      </div>

      <div
        className={classNames(
          styles.top_block_tabs_content,
          active === 1 && styles.tab_content_active,
        )}>
        {infoCovid
          .sort((a, b) => (a.cases > b.cases ? -1 : 1))
          .map(({ country, cases, countryInfo: { _id, flag } }, i) =>
            i <= 9 ? (
              <div key={_id}>
                <img src={flag} alt="" /> {country} - {cases.toLocaleString()}
              </div>
            ) : null,
          )}
      </div>

      <div
        className={classNames(
          styles.top_block_tabs_content,
          active === 2 && styles.tab_content_active,
        )}>
        {infoCovid
          .sort((a, b) => (a.deaths > b.deaths ? -1 : 1))
          .map(({ country, deaths, countryInfo: { _id, flag } }, i) =>
            i <= 9 ? (
              <div key={_id}>
                <img src={flag} alt="" /> {country} - {deaths.toLocaleString()}
              </div>
            ) : null,
          )}
      </div>

      <div
        className={classNames(
          styles.top_block_tabs_content,
          active === 3 && styles.tab_content_active,
        )}>
        {infoCovid
          .sort((a, b) => (a.recovered > b.recovered ? -1 : 1))
          .map(({ country, recovered, countryInfo: { _id, flag } }, i) =>
            i <= 9 ? (
              <div key={_id}>
                <img src={flag} alt="" /> {country} - {recovered.toLocaleString()}
              </div>
            ) : null,
          )}
      </div>
    </div>
  );
};

export default Top;
