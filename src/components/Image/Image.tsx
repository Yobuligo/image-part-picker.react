import image from "../../assets/person.png";
import { repeat } from "../../utils/repeat";
import { Column } from "../column/Column";
import { IImageProps } from "./IImageProps";
import styles from "./Image.module.css";

export const Image: React.FC<IImageProps> = (props) => {
  const items = () =>
    repeat(props.config.size.y, (index) => (
      <Column key={index} config={props.config} y={index} />
    ));

  return (
    <div className={styles.image}>
      <img src={image} alt="Person" />
      <div className={styles.imageComponent}>{items()}</div>
    </div>
  );
};
