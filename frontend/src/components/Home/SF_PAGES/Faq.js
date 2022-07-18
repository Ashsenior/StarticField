import React from 'react'
import './Faq.css'
import Header from './Header'
export const Faq = () => {
  function showans () {
    var q = document.getElementById('1011');
    q.styles.diplay = 'justify-content';
  };
  return (
    <>
    <Header />
    <div className='bodyone'>
        <div className="content">
        <div className="contents">
            <div className="left">
                <div className="wrap">
                    <div className="search">
                       <input type="text" className="searchTerm" placeholder="What are you looking for?" />
                       <button type="submit" className="searchButton">
                      </button>
                    </div>
                 </div>
                <div className="topics">
                    <div className="topic">Topic 1</div><hr />
                    <div className="topic">Topic 2</div><hr />
                    <div className="topic">Topic 3</div><hr />
                    <div className="topic">Topic 4</div><hr />
                    <div className="topic">Topic 5</div>
                </div>
            </div>
            <div className="right">
                <h1 className='faqheading'>FAQ</h1>
                <div>
                    <div className='questions' id='1000'>
                        <button className='question1' onClick={showans} id='1001'>
                            THIS IS QUESTION 1
                            <div className="answers" id ='1011'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit magnam omnis id sunt cumque harum vitae minima velit at quod?.
                    </div>
                        </button>
                        
                        </div>
                        
                </div>
            </div>
        </div>
    </div>
    
</div>
</>
  )
}
