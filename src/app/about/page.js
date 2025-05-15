import React from 'react';

const containerStyle = {
  padding: '50px',
  maxWidth: '900px',
  margin: '40px auto',
  fontFamily: `'Comic Neue', cursive, sans-serif`,
  backgroundColor: 'lightblue',
  borderRadius: '20px',
  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
  color: 'black',
};

const headingStyle = {
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: '25px',
  color: 'darkblue',
  textShadow: '2px 2pxrgb(200, 217, 255)',
};

const paragraphStyle = {
  fontSize: '18px',
  marginBottom: '20px',
  lineHeight: '1.8',
};

const highlightStyle = {
  color: 'darkblue',
  fontWeight: 'bold',
  backgroundColor: '#fcd5ce',
  padding: '2px 6px',
  borderRadius: '5px',
};

function Page() {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}> Welcome to Read Hub!</h1>

      <p style={paragraphStyle}>
        Your go-to platform for <span style={highlightStyle}>discovering</span>, <span style={highlightStyle}>sharing</span>, and 
        <span style={highlightStyle}> engaging</span> with stories that matter.
      </p>

      <p style={paragraphStyle}>
        At Read Hub, we believe <span style={highlightStyle}>everyone has a voice</span> worth hearing. Whether you are a seasoned 
        writer or just getting started, our platform empowers you to publish thoughts, explore diverse perspectives, and build 
        community around ideas.
      </p>

      <p style={paragraphStyle}>
        From quirky blogs to opinion pieces and deep dives, Read Hub brings writers and readers together in one 
        <span style={highlightStyle}> vibrant digital space</span>.
      </p>

      <p style={paragraphStyle}>
        <strong>🎯 Our mission:</strong> To make writing accessible, reading enjoyable, and conversations meaningful.
      </p>

      <p style={paragraphStyle}>
        🚀 Join us in building a hub where <span style={highlightStyle}>curiosity thrives</span> and 
        <span style={highlightStyle}> creativity flows</span>.
      </p>
    </div>
  );
}

export default Page;
