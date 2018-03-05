
let randomColor = () => {
  let colors = ['#81F7F3', '#64FE2E', '#FE2E2E', '#CC2EFA'];
  // colors.map();
  // console.log(Math.round(Math.random() * colors.length));
  let position = Math.round(Math.random() * colors.length);
  return colors[position];
};

let randomText = ()=>{
  let text = ['Que tengas paz', 'Hoy será un excelente día', 'Felicidad siempre!'];
  // console.log(Math.round(Math.random() * colors.length));
  let position = Math.round(Math.random() * colors.length);
  return text[position];
}

// class Header extends React.Component {
//   render() {
//     return (
//       <h1 style={headerStyle}>grace-hopper</h1>
//     );
//   }
// }
// ReactDOM.render(<Header />, document.querySelector('header'));

// })();

(()=>{
  class Box extends React.Component {
    render() {
      const boxStyle = {height: '20em'};
      return (
        <div className="color-box" style={randomColor}>
          <p style={randomText}></p>
        </div>
      );
    }
  }
  ReactDOM.render(<Box/>, document.getElementById('box'));
})();
