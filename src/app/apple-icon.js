import { ImageResponse } from 'next/og';

// iOS home-screen icon (PNG required). Same ">_" mark as icon.svg.
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0A0A0A',
        }}
      >
        <svg width="120" height="120" viewBox="0 0 32 32">
          <polyline
            points="9,10 15,16 9,22"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="square"
          />
          <line x1="17" y1="22" x2="24" y2="22" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="square" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
