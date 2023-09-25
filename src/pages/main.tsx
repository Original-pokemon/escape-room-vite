import { useEffect } from 'react';

import Filters from '../components/filters/filters';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchQuestsAction } from '../store/api-actions';

export default function Main(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const quests = useAppSelector((state) => state.quests) || [];

  useEffect(() => {
    dispatch(fetchQuestsAction);
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
          </div>
          <div className="page-content__item">
            <Filters />
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <div className="cards-grid">
            <QuestCard />
          </div>
        </div>
      </main>
      <Footer />
    </div >
  );
}
