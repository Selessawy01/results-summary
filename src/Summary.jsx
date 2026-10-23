 import summaryData from './data/data.json'
 

import reactionIcon from './assets/images/icon-reaction.svg'
import memoryIcon from './assets/images/icon-memory.svg'
import verbalIcon from './assets/images/icon-verbal.svg'
import visualIcon from './assets/images/icon-visual.svg'

const icons = {
  Reaction: reactionIcon,
  Memory: memoryIcon,
  Verbal: verbalIcon,
  Visual: visualIcon,
}

function Summary(){
    return (
         <section className="summary">
      <h2 className="summary__title md-text">Summary</h2>
      <ul className="summary__content">
        {summaryData.map((item) => 
          <li key = {item.category} 
          className={`summary__item summary__item--${item.category.toLowerCase()}`}
          >
           <div className="summary__label"> 
            <img className='summary__icon'
                 src={icons[item.category]} 
                 alt =""/>
            
            <p className="summary__icon-name sm-text">{item.category}</p>
          </div>
          <p className="summary__score"> {item.score} <span className="summary__total-score"> /100</span></p>
        </li>
        )}
      </ul>
      <button type="button" className="summary__btn">Continue</button>
    </section>  
    )}
 

export default Summary