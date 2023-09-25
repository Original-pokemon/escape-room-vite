import { useEffect } from 'react';

import { generatePath, Link, useParams } from 'react-router-dom';
import SkewLoader from 'react-spinners/SkewLoader';

import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import { AppRoute } from '../const/app-route';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  fetchBookingInfoAction,
  fetchQuestInfoAction,
} from '../store/api-actions';

export default function Quest(): React.JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const questInfo = useAppSelector((state) => state.questInfo);
  const isDataLoading = useAppSelector((state) => state.isQuestDataLoading);


  useEffect(() => {
    if (id && !isDataLoading && !questInfo) {
      // console.log('id :>> ', id);
      dispatch(fetchQuestInfoAction(id));
    }
  });

  if (isDataLoading || !questInfo || !id) {
    return <SkewLoader size="60px" color="#f2890f" cssOverride={{ display: 'block', margin: 'auto' }} />;
  }

  const { level, peopleMinMax, title, type, description, coverImgWebp, coverImg } = questInfo;
  const [minPeople, maxPeople] = peopleMinMax;

  return (
    <div className="wrapper">
      <Header />

      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={coverImgWebp} />
            <img src={coverImg} srcSet={coverImg} width="1366" height="768" alt="" />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">{title}</h1>
            <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{type}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width="11" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-person"></use>
                </svg>{minPeople}&ndash;{maxPeople}&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width="14" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-level"></use>
                </svg>{level}
              </li>
            </ul>
            <p className="quest-page__description">{description}</p>
            <Link className="btn btn--accent btn--cta quest-page__btn" to={generatePath(AppRoute.Booking, { id: id })} onClick={() => {
              dispatch(fetchBookingInfoAction(id));
            }}
            >Забронировать
            </Link>
          </div>
        </div>
      </main >

      <Footer />
    </div>
  );
}
