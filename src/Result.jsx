
function Result({resultData= {
    title   : "Your result",
    score   : 76,
    feedbackTitle : "Great",
    percentage : 65,
  },
}){
 return (
    <section className="result">
       <div className="result__content">
        <h1 className="result__title md-text">{resultData.title}</h1>
        <div className="result__score xl-text"> {resultData.score} <span className="result__total-score sm-text "> of 100 </span> </div>
        <div className="result__feedback">
          <h2 className="result__feedback-title lg-text">{resultData.feedbackTitle}</h2>
          <p className="result__feedback-description sm-text">You scored higher than {resultData.percentage}% of the people who have taken these tests.</p>
        </div>
      </div>
    </section>
 )

}

export default Result 