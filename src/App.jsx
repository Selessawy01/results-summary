
import Result from './Result'
import Summary from './Summary'

const resultData = {
  title: "My Result",
  score: 76,
  feedbackTitle: "Great",
  percentage: 65,
};

function App() {
 
 return (
   <main>
   <div className="results">
     <Result resultData={resultData} />
     <Summary />
  </div>
  </main>
 )
}
export default App
