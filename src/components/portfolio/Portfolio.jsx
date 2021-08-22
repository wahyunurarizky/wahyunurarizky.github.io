import { useEffect, useState } from 'react';
import './portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import {
  myProjectPort,
  teamProjectPort,
  certification,
  otherPortfolio,
} from '../../data';

const Portfolio = () => {
  const [selected, setSelected] = useState('myproject');
  const [data, setData] = useState([]);

  const list = [
    {
      id: 'myproject',
      title: 'My Projects',
    },
    {
      id: 'teamproject',
      title: 'Team Projects',
    },
    {
      id: 'cetification',
      title: 'Certification',
    },
    {
      id: 'other',
      title: 'Others',
    },
  ];

  // jika terjadi perubahan pada state (mungkin)
  useEffect(() => {
    switch (selected) {
      case 'myproject':
        setData(myProjectPort);
        break;
      case 'teamproject':
        setData(teamProjectPort);
        break;
      case 'cetification':
        setData(certification);
        break;
      case 'other':
        setData(otherPortfolio);
        break;
      default:
        setData(myProjectPort);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title} </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
