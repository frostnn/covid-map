import styles from './Search.module.scss';
import { Icon } from '@iconify/react';
import searchIcon from '@iconify-icons/fa-solid/search';
import { useState } from 'react';

const Search = ({ setSearch, listSearchCountry, search }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handlerItemCountry = (e) => {
    setSearch(e.target.textContent);
    setIsOpen(false);
  };
  const handlerSearchValue = (e) => {
    setSearch(e.target.value);
    setIsOpen(true);
  };
  return (
    <div className={styles.search_block}>
      <div>
        <Icon icon={searchIcon} className={styles.icon_search} />
      </div>
      <div className={styles.search_block_wrapper}>
        <input type="text" placeholder="Search..." onChange={handlerSearchValue} value={search} />
      </div>
      <div className={styles.search_block_list_coutry}>
        <ul>
          {search &&
            isOpen &&
            listSearchCountry.map((items) => <li onClick={handlerItemCountry}>{items.country}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Search;
