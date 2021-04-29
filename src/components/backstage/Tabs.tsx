import * as React from 'react';

import { Tabs as RealTabs } from '@workday/canvas-kit-labs-react/tabs';

type TabProps = {
  items: {
    title: string,
    content: JSX.Element
  }[]
}

export const Tabs: React.FC<TabProps> = ({items}) => {

  return (
    <RealTabs>
      <RealTabs.List>
          {items.map(item => <RealTabs.Item>{item.title}</RealTabs.Item>)}
      </RealTabs.List>

      {items.map((item) => <RealTabs.Panel>{item.content}</RealTabs.Panel>)}

    </RealTabs>
  );
};
