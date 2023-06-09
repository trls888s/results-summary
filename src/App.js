import './App.css';
const myData = require('./data.json');

function Info({id}) {
  //console.log({myData[id].icon});
  return (
    <>
    <div className='infologo'><img src={myData[id].icon} alt="FEM Icon" /> {myData[id].category} </div><div className='infoscore'>{myData[id].score} / 100</div>
    </>
  );
}

function TotalScore() {
  let scoreA = 0;
  for (let i = 0; i < myData.length; i++) {
    scoreA += myData[i].score;
  };
  let totalScore = scoreA/myData.length;
  console.log(totalScore);
  return (
    <>
    {totalScore}
    </>
    );
}


function App() {
  return (
    <div className="container">
    <div className="App">
    
    <div className='total_score'>
      <div className='ts_div scorenum'>Your Result</div>
    <div className="scorecircle"><p><div className='scorenum'><TotalScore /></div></p>
    <p>of 100</p></div>
    <div className='ts_div'>Your Result is better than 65% of People conducting the test here!</div>
    
    
    
    </div>
    
    <div className='output'>
      <div className="summary">Summary</div>
    <div className='info reaction'><Info id='0' /></div>
    <div className='info memory'><Info id='1' /></div>
    <div className='info verbal'><Info id='2' /></div>
    <div className='info visual'><Info id='3' /></div>
    <div className='continue'>Continue</div>
    </div>
    </div>
    </div>
  );
}

export default App;
