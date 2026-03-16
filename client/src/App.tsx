import './App.css'

function App() {
  let name: string = "Luke";
  let age: number = 22;

  let score1: number = 85;
  let score2: number = 90;
  let totalscore: number = score1 + score2;

  let average: number = totalscore / 2;


  return (
    <> {/* FRAGMENT */ }
      <h1>Student Information</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>

      <h2>Scores</h2>
      <p>Score 1: {score1}</p>
      <p>Score 2: {score2}</p>

      <h3>Total Score: {totalscore}</h3>
      <h3>Average Score: {average}</h3>
    </>
  )
}

export default App