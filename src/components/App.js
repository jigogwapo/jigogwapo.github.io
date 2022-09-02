import React from 'react';

const App = () => {
  return (
    <div
      className="ui center aligned container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <div style={{ minWidth: '500px' }}>
        <h1 className="ui top attached block header">JESREAL ARCILLAS</h1>
        <div className="ui left aligned attached segment">
          <h3 className="ui header">Projects:</h3>
          <a
            className="ui link"
            href="https://jigogwapo.github.io/youtube-search-app/"
          >
            Youtube Search App
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
