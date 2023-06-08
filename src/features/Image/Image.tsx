import image from "../../assets/person.png";
import { repeat } from "../../utils/repeat";
import { style } from "../../utils/style";
import { Column } from "../column/Column";
import { IImageProps } from "./IImageProps";
import styles from "./Image.module.css";

export const Image: React.FC<IImageProps> = (props) => {
  const items = () =>
    repeat(props.config.gridSize.height, (index) => (
      <Column key={index} config={props.config} y={index} />
    ));

  return (
    <div className={styles.image}>
      <img src={image} alt="Person" />
      <div
        className={style(
          styles.imageComponent,
          props.config.designMode && styles.imageComponentBorder
        )}
      >
        {items()}
      </div>
    </div>
  );
};
