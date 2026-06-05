'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device supports touch/coarse pointers rather than precise mice
    const checkTouchDevice = () => {
      if (typeof window === 'undefined') return true;
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };

    const isTouch = checkTouchDevice();
    
    // Defer state updates to avoid synchronous setState inside useEffect warning
    const initTimeout = setTimeout(() => {
      if (isTouch) {
        setIsTouchDevice(true);
      } else {
        setIsVisible(true);
        document.body.classList.add('custom-cursor-active');
      }
    }, 50);

    if (isTouch) {
      return () => clearTimeout(initTimeout);
    }

    const coords = { x: 0, y: 0 };
    const ringCoords = { x: 0, y: 0 };
    let animationFrameId;

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
      
      // Position the small center dot instantly on the cursor coordinates
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${coords.x}px, ${coords.y}px, 0)`;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      // Temporary fallback: Hide custom cursor on text entry fields to let the native text caret show
      const isInput = 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.tagName === 'SELECT' || 
        target.isContentEditable;
      
      if (isInput) {
        if (dotRef.current) dotRef.current.style.opacity = '0';
        if (ringRef.current) ringRef.current.style.opacity = '0';
        return;
      } else {
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }

      // Check if cursor is hovering over links, buttons, or custom interactive elements
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.classList.contains('btn') ||
        target.closest('.card') ||
        target.style.cursor === 'pointer';

      setIsHovered(isInteractive);
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    // Linear Interpolation (lerp) loop to animate the outer ring smoothly following the dot
    const animateRing = () => {
      const ease = 0.15; // Ease speed: lower value = smoother, lazier ring follow
      ringCoords.x += (coords.x - ringCoords.x) * ease;
      ringCoords.y += (coords.y - ringCoords.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringCoords.x}px, ${ringCoords.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animateRing);
    };

    animateRing();

    return () => {
      clearTimeout(initTimeout);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      cancelAnimationFrame(animationFrameId);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`${styles.cursorDot} ${isHovered ? styles.hovered : ''}`}
      />
      <div
        ref={ringRef}
        className={`${styles.cursorRing} ${isHovered ? styles.hovered : ''}`}
      />
    </>
  );
}
