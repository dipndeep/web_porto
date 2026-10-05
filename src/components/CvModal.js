'use client';

import { useEffect } from 'react';
import styles from './CvModal.module.css';

export default function CvModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    // Close on Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Lock body scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Curriculum Vitae Preview"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Bar */}
        <div className={styles.header}>
          <span className={styles.title}>
            <span className={styles.titleFull}>cv_ganendra_pradipa.pdf</span>
            <span className={styles.titleMobile}>cv.pdf</span>
          </span>

          <div className={styles.actions}>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionLink}
              title="Open PDF in a new browser tab"
            >
              <span className={styles.labelFull}>[open in new tab ↗]</span>
              <span className={styles.labelMobile}>[open ↗]</span>
            </a>
            <a
              href="/cv.pdf"
              download="Curriculum_Vitae_Ganendra_Pradipa.pdf"
              className={styles.actionLink}
              title="Download PDF"
            >
              <span className={styles.labelFull}>[download ↓]</span>
              <span className={styles.labelMobile}>[download ↓]</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className={styles.closeBtn}
              aria-label="Close CV dialog"
            >
              [close]
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className={styles.viewerFrame}>
          <iframe
            src="/cv.pdf#toolbar=1&navpanes=0&view=FitH"
            title="Curriculum Vitae - Ganendra Pradipa"
            className={styles.iframe}
          />
        </div>
      </div>
    </div>
  );
}
