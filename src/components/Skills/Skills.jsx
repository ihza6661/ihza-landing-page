import styles from "./SkillsStyles.module.scss";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Technical Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Laravel" />
        {/* <SkillList src={checkMarkIcon} skill="Tailwind CSS" /> */}
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Sql" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python" />
      </div>
    </section>
  );
}

export default Skills;
