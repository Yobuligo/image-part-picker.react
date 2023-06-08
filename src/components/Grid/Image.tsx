import image from "../../assets/person.png";
import { ISize } from "../../types/ISize";
import { repeat } from "../../utils/repeat";
import { Column } from "../column/Column";
import styles from "./Image.module.css";

export const Image: React.FC<{ size: ISize }> = (props) => {
  const items = () =>
    repeat(props.size.y, (index) => (
      <Column key={index} size={props.size} y={index} />
    ));

  return (
    <div className={styles.image}>
      <img src={image} alt="Person" />
      <div className={styles.imageComponent}>{items()}</div>
    </div>
  );
};
