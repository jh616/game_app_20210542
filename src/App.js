function Game({name, picture}) {
  return (
    <div>
  <h2>I like {name}</h2>
  <img src={picture} />
    </div>
  );
}

const gameILike = [
  {
    name: 'Leagueoflegends',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F21777C3D5938CED035&f=1&nofb=1'
  },
  {
    name: 'Overwatch',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2642203F579EA95427&f=1&nofb=1'
  },
  {
    name: 'FINAL FANTASY XIV',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthelifestream.net%2Fwp-content%2Fuploads%2F2009%2F06%2Flogo_ffxiv-1023x593.jpg&f=1&nofb=1'
  },
  {
    name: 'Cyphers',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpub.cyphers.co.kr%2Fimages2%2Fart%2F2015%2F06%2F29%2F1435543844727.jpg&f=1&nofb=1'
  },
  {
    name: 'Stardew Valley',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2658964858A97DE93F&f=1&nofb=1'
  }
];

function App() {
  return (
  <div>
    {gameILike.map(app => <Game key={app.name} name={app.name} picture={app.image} />)}
  </div>
  );
}

export default App;
