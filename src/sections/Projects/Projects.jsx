import styles from './ProjectsStyles.module.css';
import tracklytics from '../../assets/tracklytics.png'
import waveplay from '../../assets/waveplay.png'
import agriaid from '../../assets/agriaid.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={tracklytics}
          link="https://github.com/sairajB/tracklytics"
          h3="TrackLytics"
          p="Amazon Price Tracker"
        />
        <ProjectCard
          src={agriaid}
          link="https://github.com/sairajB/agriAid"
          h3="AgriAid"
          p="Crop Disease Prediction"
        />
        <ProjectCard
          src={waveplay}
          link="https://github.com/sairajB/wavePlay"
          h3="WavePlay"
          p="Hand Gesture Control"
        />
      </div>
    </section>
  );
}

export default Projects;
