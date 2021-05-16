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
          <div className={styles.top_block_tabs_item_title}>Cases</div>
          <div>
            <Icon icon={accountIcon} className={styles.skullIcon_icon} />
          </div>
        </div>
        <div
          className={classNames(styles.top_block_tabs_item, active === 2 && styles.tab_active)}
          onClick={() => toggleTab(2)}>
          <div className={styles.top_block_tabs_item_title}>Deaths</div>
          <div>
            <Icon icon={skullIcon} className={styles.skullIcon_icon} />
          </div>
        </div>
        <div
          className={classNames(styles.top_block_tabs_item, active === 3 && styles.tab_active)}
          onClick={() => toggleTab(3)}>
          <div className={styles.top_block_tabs_item_title}>Recovered</div>
          <div>
            <Icon icon={healthIcon} className={styles.skullIcon_icon} />
          </div>
        </div>
      </div>

      <div
        className={classNames(
          styles.top_block_tabs_content,
          active === 1 && styles.tab_content_active,
        )}>
        {infoCovid
          .sort((a, b) => (a.cases > b.cases ? -1 : 1))
          .map((items, i) =>
            i <= 9 ? (
              <div>
                {items.country} - {items.cases}
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
          .map((items, i) =>
            i <= 9 ? (
              <div>
                {items.country} - {items.deaths}
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
          .map((items, i) =>
            i <= 9 ? (
              <div>
                {items.country} - {items.recovered}
              </div>
            ) : null,
          )}
      </div>
    </div>
  );
};

export default Top;
