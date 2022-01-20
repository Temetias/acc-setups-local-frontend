type TitledBoxProps = {
  title: string;
  children: JSX.Element;
};

const TitledBox: React.FC<TitledBoxProps> = ({ children, title }) => (
  <div>
    <div>{title}</div>
    <div>{children}</div>
  </div>
);

export default TitledBox;
