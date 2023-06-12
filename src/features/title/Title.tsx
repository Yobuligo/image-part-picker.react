import { ITitleProps } from "./ITitleProps";

export const Title: React.FC<ITitleProps> = (props) => {
  return <h2>{props.title}</h2>;
};
