import React from 'react';
 import { Cards, Chart, CountryPicker } from './Components'
import styles from './App.module.css';
import { fetchData } from './api';


class App extends React.Component {
  state = {
    data: {},
  }
  
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })
  }

  render() {
  return (
    <div className={styles.container}>
        <Cards/>
        <CountryPicker/>
        <Chart/>
    </div>
  )
  }
}

export default App;
