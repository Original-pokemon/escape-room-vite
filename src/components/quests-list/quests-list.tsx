import { useAppDispatch } from '../../hooks';
import { fetchQuestInfoAction } from '../../store/api-actions';
import { QuestType } from '../../types/quest';
import QuestCard from '../quest-card/quest-card';

type QuestsListProps = {
  quests: QuestType[];
}

export default function QuestsList({ quests }: QuestsListProps): React.JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="cards-grid">
      {
        quests.map((quest) => (
          <QuestCard
            quest={quest}
            key={quest.id}
            onClick={() => {
              dispatch(fetchQuestInfoAction(quest.id));
            }}
          />
        ))
      }
    </div>
  );
}
