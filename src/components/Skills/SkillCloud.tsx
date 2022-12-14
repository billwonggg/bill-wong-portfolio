import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import MySkills from "../../content/MySkills";
import styles from "./SkillCloud.module.scss";

const SkillCloud = () => {
  return (
    <div className={styles.cloudContainer}>
      <Cloud
        options={{
          dragControl: true,
          fadeIn: 1500,
          noSelect: true,
          maxSpeed: 0.008,
          minSpeed: 0.005,
          zoomMin: 1,
          zoomMax: 1,
          initial: [0.4, 0.4],
        }}
      >
        {MySkills.map((icon) =>
          renderSimpleIcon({
            icon,
            size: 80,
            minContrastRatio: 0,
          })
        )}
      </Cloud>
    </div>
  );
};

export default SkillCloud;
