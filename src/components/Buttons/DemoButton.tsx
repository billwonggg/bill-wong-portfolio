interface DemoButtonProps {
  url: string;
}

const DemoButton = ({ url }: DemoButtonProps) => {
  return <a href={url}>Link to Website</a>;
};

export default DemoButton;
