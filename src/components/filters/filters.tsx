import { DifficultyLevel, Theme } from '../../const/filter';

export default function Filters(): React.JSX.Element {
  return (
    <form className="filter" action="#" method="get">
      <fieldset className="filter__section">
        <legend className="visually-hidden">Тематика</legend>
        <ul className="filter__list">
          <li className="filter__item">
            <input type="radio" name="type" id={Theme.AllQuests} checked />
            <label className="filter__label" htmlFor={Theme.AllQuests}>
              <svg className="filter__icon" width="26" height="30" aria-hidden="true">
                <use href="#icon-all-quests"></use>
              </svg>
              <span className="filter__label-text">Все квесты</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="type" id={Theme.Adventure} />
            <label className="filter__label" htmlFor={Theme.Adventure}>
              <svg className="filter__icon" width="36" height="30" aria-hidden="true">
                <use xlinkHref="#icon-adventure"></use>
              </svg><span className="filter__label-text">Приключения</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="type" id={Theme.Horror} />
            <label className="filter__label" htmlFor={Theme.Horror}>
              <svg className="filter__icon" width="30" height="30" aria-hidden="true">
                <use xlinkHref="#icon-horror"></use>
              </svg><span className="filter__label-text">Ужасы</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="type" id={Theme.Mystery} />
            <label className="filter__label" htmlFor={Theme.Mystery}>
              <svg className="filter__icon" width="30" height="30" aria-hidden="true">
                <use xlinkHref="#icon-mystic"></use>
              </svg><span className="filter__label-text">Мистика</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="type" id={Theme.Detective} />
            <label className="filter__label" htmlFor={Theme.Detective}>
              <svg className="filter__icon" width="40" height="30" aria-hidden="true">
                <use xlinkHref="#icon-detective"></use>
              </svg><span className="filter__label-text">Детектив</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="type" id={Theme.SciFi} />
            <label className="filter__label" htmlFor={Theme.SciFi}>
              <svg className="filter__icon" width="28" height="30" aria-hidden="true">
                <use xlinkHref="#icon-sci-fi"></use>
              </svg><span className="filter__label-text">Sci-fi</span>
            </label>
          </li>
        </ul>
      </fieldset>
      <fieldset className="filter__section">
        <legend className="visually-hidden">Сложность</legend>
        <ul className="filter__list">
          <li className="filter__item">
            <input type="radio" name="level" id={DifficultyLevel.Any} checked />
            <label className="filter__label" htmlFor={DifficultyLevel.Any}>
              <span className="filter__label-text">Любой</span>
            </label>
          </li>
          <li className="filter__item" >
            <input type="radio" name="level" id={DifficultyLevel.Easy} />
            <label className="filter__label" htmlFor={DifficultyLevel.Easy}>
              <span className="filter__label-text">Лёгкий</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="level" id={DifficultyLevel.Middle} />
            <label className="filter__label" htmlFor={DifficultyLevel.Middle}>
              <span className="filter__label-text">Средний</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="level" id={DifficultyLevel.Hard} />
            <label className="filter__label" htmlFor={DifficultyLevel.Hard}>
              <span className="filter__label-text">Сложный</span>
            </label>
          </li>
        </ul>
      </fieldset>
    </form>
  );
}
