import Filters from '../components/filters/filters';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import QuestCard from '../components/quest-card/quest-card';

export default function Main(): React.JSX.Element {
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
