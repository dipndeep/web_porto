import { ImageResponse } from 'next/og';

// Social preview card (LinkedIn, WhatsApp, X, Slack...), generated at build time.
export const alt = 'Ganendra Pradipa — Data-focused: machine learning, computer vision, data mining';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#FFFFFF',
          color: '#0A0A0A',
          padding: '80px 96px',
        }}
      >
        <div style={{ display: 'flex', fontSize: 26, color: '#6B6B6B', letterSpacing: 1 }}>
          ## portfolio
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 84, fontWeight: 500, letterSpacing: -2, lineHeight: 1.1 }}>
            Ganendra Pradipa
          </div>
          <div style={{ fontSize: 34, color: '#6B6B6B', marginTop: 20 }}>
            Information Systems student · Merauke, South Papua
          </div>
          <div style={{ fontSize: 34, marginTop: 44 }}>
            Data-focused — machine learning, computer vision, data mining.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '2px solid #E4E4E4',
            paddingTop: 28,
            fontSize: 24,
            color: '#6B6B6B',
          }}
        >
          <span>github.com/dipndeep</span>
          <span>ganendraptpratama@gmail.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
