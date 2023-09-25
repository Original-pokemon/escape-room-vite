import { MouseEventHandler } from 'react';

import { generatePath, Link } from 'react-router-dom';

import { AppRoute } from '../../const/app-route';
import { QuestType } from '../../types/quest';

type QuestCardProps = {
  quest: QuestType;
  onClick?: MouseEventHandler<HTMLElement>;
}

export default function QuestCard({ quest, onClick }: QuestCardProps): React.JSX.Element {
  const { id, level, peopleMinMax, previewImg, previewImgWebp, title } = quest;
  const [minPeople, maxPeople] = peopleMinMax;

  return (
    <div className="quest-card" id={id} onClick={onClick}>
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={previewImgWebp} />
          <img src={previewImg} srcSet={previewImg} width="344" height="232" alt={title} />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={generatePath(AppRoute.Quest, { id: quest.id })}>{title}</Link>
        </div>
        <ul className="tags quest-card__tags">
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
      </div>
    </div>
  );
}
