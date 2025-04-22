import { motion } from 'framer-motion'; // Import Framer Motion
import { useInView } from 'react-intersection-observer'; // Import to track when section is in view

import NAAsset from './../images/notesApp/asset.jpg';
import NAAssetProt from './../images/notesApp/assetPrototype.jpg';
import NAFigma from './../images/notesApp/Figma.jpg';
import NAfigmaPrototype from './../images/notesApp/figmaPrototype.jpg';

const NA = [
    { img: NAAsset, caption: "Shows all the assets involved including bottom/tab navbar, radio buttons, and final note output", alt: "Notes App img" },
    { img: NAAssetProt, caption: "Shows how the app will work when the user clicks on the radio buttons or the menu (3 dots) button for options for what to do with notes.", alt: "Notes App img" },
    { img: NAFigma, caption: "Notes app, no prototyping", alt: "Notes App img" },
    { img: NAfigmaPrototype, caption: "Notes App with prototyping", alt: "Notes App img" }
];

// Same structure for PP and sp as above...
  
function Portfolio() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once when in view
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  return (
    <main ref={ref}>
      <style>{`
        main {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }

        .image-group {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          margin-top: 24px;
        }

        .image-group figure {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0;
        }

        .image-group img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          max-height: 600px;
        }

        .image-group figcaption {
          margin-top: 16px;
          text-align: center;
          max-width: 400px;
          font-size: 1rem;
          line-height: 1.4;
        }
      `}</style>

      <motion.section
        className="portfolio-section"
        initial={{ opacity: 0, y: 100 }} // Initial state off-screen and transparent
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }} // Fade-in and slide up when in view
        transition={{ duration: 1, ease: 'easeOut' }} // Smooth animation
      >
        <h2>Notes App</h2>
        <p>Notes App is an individual project...</p>
        <a href="https://www.figma.com/design/jitpNeTgrMBrJ58aA284e4/Untitled?node-id=0-1&p=f&t=J8Qwi3iUFXIXteh3-0" target="_blank" rel="noopener noreferrer">Figma Website</a>
        <div className="image-group">
          {NA.map((item, index) => (
            <figure key={index}>
              <img src={item.img} alt={item.alt} />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="portfolio-section"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h2>Palate Pals App</h2>
        <p>Palate Pals was a group project...</p>
        <a href="https://www.figma.com/proto/JI5tmqx1QvG9K1tjpR5y9R/PalatePals?node-id=272-427" target="_blank" rel="noopener noreferrer">Figma Website</a>
        <div className="image-group">
          {pp.map((item, index) => (
            <figure key={index}>
              <img src={item.img} alt={item.alt} />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="portfolio-section"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h2>SnakPack Website Project</h2>
        <p>This group project began with thorough planning...</p>
        <a href="https://www.figma.com/design/ProwTb2TuyaDyPEWddXZ0S/Workshop---Design-Phase--Copy-?t=5gDsxCzrfMpJNeBD-0" target="_blank" rel="noopener noreferrer">Figma Website</a>
        <div className="image-group">
          {sp.map((item, index) => (
            <figure key={index}>
              <img src={item.img} alt={item.alt} />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </motion.section>
    </main>
  );
}

export default Portfolio;
