import React from 'react';
import 'src/app/HomePage.css';

const GIF_URL =
  'https://ansarshome.files.wordpress.com/2021/09/d3464a4351fdf340ccb6bb37c281381a.gif?w=640';

function HomePage() {
  return (
    <div className="home-container">
      <img src={GIF_URL} alt="Ilustracyjny obrazek" className="main-image" />
      <h1>Witaj na Stronie Głównej!</h1>
      <p>
        Witaj w serwisie, gdzie każdy może stworzyć i dzielić się własnym
        blogiem! Eksploruj możliwości tworzenia, dziel się pomysłami i buduj
        społeczność pasjonatów.
      </p>
      <p>Planujemy dodawać nowe funkcje, takie jak:</p>
      <div className="technologies-list">
        <div>Wyszukiwanie i tagowanie postów</div>
        <div>Interaktywne komentarze</div>
        <div>Integracja z mediów społecznościowych</div>
      </div>

      <h2>Ta strona wykorzystuje następujące technologie:</h2>
      <div className="technologies-list">
        <div>HTML</div>
        <div>CSS</div>
        <div>TypeScript</div>
        <div>React.js</div>
        <div>Redux</div>
        <div>Webpack</div>
        <div>ESLint</div>
        <div>Prettier</div>
        <div>Enzyme</div>
        <div>Storybook</div>
        <div>Node.js</div>
        <div>MySQL</div>
        <div>GitHub</div>
        <div>Azure</div>
        <div>Docker</div>
        <div>Kubernetes</div>
      </div>
    </div>
  );
}

export default HomePage;
