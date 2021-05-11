import styles from './Loading.module.scss';
import loading from '../../assets/img/loading.svg';
const Loading = () => {
  return (
    <div className={styles.loading_block}>
      <img src={loading} alt="" />
    </div>
  );
};

export default Loading;
