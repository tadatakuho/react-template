import logo from './logo.svg';
import useTime from 'src/hooks/useTime';
import styles from './App.module.scss';

function App() {
  const [time] = useTime();
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>{time?.toLocaleString()}</p>
        <a
          className={styles['App-link']}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
