import { FC } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../../types/Tab';

interface Props {
  tabs: Tab[];
  selectedTabById: string | undefined;
}

export const Tabs: FC<Props> = (props) => {
  const { tabs, selectedTabById = 0 } = props;

  const selectedTab = tabs.find(tab => tab.id === selectedTabById);
  const isTabSelected = (tab: Tab) => tab.id === selectedTabById;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={cn({ 'is-active': isTabSelected(tab) })}
            >
              <Link to={`../${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
