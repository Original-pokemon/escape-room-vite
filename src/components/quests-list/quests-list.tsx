import { QuestType } from '../../types/quest';
import QuestCard from '../quest-card/quest-card';

type QuestsListProps = {
  quests: QuestType[];
}

export default function QuestsList({ quests }: QuestsListProps): React.JSX.Element {
  return (
    <div className="cards-grid">
      {
        quests.map((quest) => (
          <QuestCard
            quest={quest}
            key={quest.id}
          />
        ))
      }
    </div>
  );
}
