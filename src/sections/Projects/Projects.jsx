import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
//import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/sairajB/tracklytics"
          h3="TrackLytics"
          p="Price Tracker"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/sairajB/agriAid"
          h3="AgriAid"
          p="Crop Disease Prediction"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/sairajB/wavePlay"
          h3="WavePlay"
          p="Gesture Control"
        />
      </div>
    </section>
  );
}

export default Projects;
