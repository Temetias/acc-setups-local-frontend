import React from "react";
import { NonEmptyArray } from "../../types";

type TabsProps = {
  children?: never;
  content: NonEmptyArray<[string, JSX.Element]>;
};

const Tabs: React.FC<TabsProps> = ({ content }) => {
  const [activeTab, setActiveTab] = React.useState<TabsProps["content"][0][0]>(
    content[0][0]
  );
  return (
    <div>
      <nav>
        {content.map(([title]) => (
          <a key={title} onClick={() => setActiveTab(title)}>
            {title}
          </a>
        ))}
      </nav>
      <section>{content.find(([title]) => activeTab === title)![1]}</section>
    </div>
  );
};

export default Tabs;
