import Header from '../../components/header/Header';
import ContentSection from '../../components/ContentSection/ContentSection';
import WatchList from '../../components/WatchList/WatchList'
import isSignedIn from '../../utils/utils';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Home = () => {
  const navigate = useNavigate();

  const checkIfSignedIn = async () => {

    if (!isSignedIn()) {
      navigate('/login');
      console.log('not logged in')
    }
    else {
      console.log('logged in')
    }
  }

  useEffect(() => {
    checkIfSignedIn()
  }, [])

  return (
    <div className="home-page">
      <WatchList />
      <Header />
      <ContentSection />
    </div>
  )
}