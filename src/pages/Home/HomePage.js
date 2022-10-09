import Header from '../../components/header/Header';
import ContentSection from '../../components/ContentSection/ContentSection';
import {isSignedIn} from '../../utils/utils';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const HomePage = () => {
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
  })

  return (
    <div className="home-page">
      <Header />
      <ContentSection />
    </div>
  )
}
