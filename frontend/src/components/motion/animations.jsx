import { motion as Motion } from 'framer-motion';

// Fade In & Up
export const FadeInUp = ({ children, delay = 0, y = 20 }) => (
  <Motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    {children}
  </Motion.div>
);

// Component version for wrapping any children with page transition
export const FadePage = ({ children, delay = 0 }) => (
  <Motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.4, ease: "easeInOut", delay }}
  >
    {children}
  </Motion.div>
);

// Fade In & Down
export const FadeInDown = ({ children, delay = 0, y = 20 }) => (
  <Motion.div
    initial={{ opacity: 0, y: -y }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    {children}
  </Motion.div>
);

// Fade In & Left
export const FadeInLeft = ({ children, delay = 0, x = 20 }) => (
  <Motion.div
    initial={{ opacity: 0, x: -x }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    {children}
  </Motion.div>
);

// Fade In & Right
export const FadeInRight = ({ children, delay = 0, x = 20 }) => (
  <Motion.div
    initial={{ opacity: 0, x }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    {children}
  </Motion.div>
);

// Zoom In
export const ZoomIn = ({ children, delay = 0, scaleStart = 0.8 }) => (
  <Motion.div
    initial={{ opacity: 0, scale: scaleStart }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    {children}
  </Motion.div>
);
