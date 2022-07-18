import React, { useEffect } from 'react';
import './About.css';
import Header from './Header';
import logo from './Asset 1.svg';
import { Link } from 'react-router-dom';

export const About = () => {
  function scrollerone(){
    console.log('scrolled !');
  };
    const handleScroll = event =>{
      console.log('window.innerHeight',window.innerHeight);
      console.log('window.scrollY',window.scrollY);
    };
    useEffect (() => {
      let c = 0;
      const handleScroll =event =>{
      console.log('window.innerHeight',window.innerHeight);
      console.log('window.scrollY',window.scrollY);
      let a = window.innerHeight;
      let b = window.scrollY;
      c = (b-a)*100/a;
      console.log('percentage scrolled',c);
      var z = document.getElementById('0000');
      if(c===-100){
        z.style.display='none';
      }
      else {
        z.style.display='block';
        console.log('function is triggering')
      }

    }
    window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  return (
    <div className='hello' onScroll={scrollerone}> 
    <div className='headersetone' id='0000'>
        <Header />
    </div>
    <div className='headercontentone'>
      <div className='hedrsideImg'>
          <img src={logo} alt="pic"/>
      </div>
      <div className='btncontent'>
      <Link to="/" className="btnHome">Home</Link>
      <Link to="/news" className="btnnews">News</Link>
      <Link to="/about" className="btnabout">About</Link>
      </div>
    </div> 
      <h1 className='aboutintro'>About us</h1>
    <div className='abovephoto'>
      <div className='para'>Startic Field - A vector field that exerts a strong force on charged college-based startups which pulls them towards becoming sustainable businesses. </div >
      <br />
      <div className='para'>Well, that was our definition in physics terms. In simple words, Startic Field is a company which aims to endow student entrepreneurs with the power of community, knowledge, capital and mentorship. It is also a forum where we bring together working professionals as contributors who have a passion to startup, years of experience and small amounts of capital but do not have the bandwidth to work on the ground.
      </div > 
    </div>
    <div className='photo'>
      <h1 className='photocontent'>Our Intellectual Mentor</h1>
    </div>
    <div className='belowphoto'>
      <h1 className='enterpreneur'>Why Join Startic Field?</h1>
      <div className='underphotoone'>
        <h1 className='abcd'>For students</h1>
        <div className='para'>We work with college based student run startups at the earliest stage imaginable. Even if you do not have customers, product, a prototype or even a team, we can work with you. If you have an idea and have the passion and commitment to build on it, we are game! We help you in the below ways:
        </div ><br /><div className='para'>
        <p className='highliter'>Develop your Idea:</p > We will sit with you and strategize on all aspects of your idea and build a profitable and out of the box strategy to reach your first customers.
        </div > <br /><div className='para'>
        <p className='highliter'>Connect with potential clients and partners:</p > Over the years we have built a solid network in key sectors which we will utilze to get you those initial leads.
        </div > <br /><div className='para'>
        <p className='highliter'>Build your team:</p > We have a 2000 strong community which we can leverage to find the perfect teammates for you. We also are onboarding contributors. These are experienced working professionals who can join your team and take your idea to a whole new level.
        </div > <br /><div className='para'>
        <p className='highliter'>Funding:</p > Finally we also provide the initial fuel to your idea in the form of small amounts of capital which can either come from us or from contributors whom we will connect you with.
        </div >
      </div>
      <div className='underphototwo'>
        <h1 className='abc'>For contributers</h1>
        <div className='para'>India has become the country with the 2nd highest number of Unicorns after USA. However, if you compare the populations of the 2 countries, you will quickly realize that the devil is in the details. With a Population of 335 million (1/4th of India), USA has 4 times the number of unicorns india has. This means that we have just utilized 6% of our startup potential. This is because India is full of people with aspirations but stuck in a 9-5 job in some multinational.
        </div ><br /><div className='para'>
        If you are one of them and are reading this page, it means that you have a spark of entrepreneurship somewhere. Maybe an idea which is stuck in your head from your college days. Due to financial cumpulsions, you took up a job, but that passion refused to die. Somewhere in the back of your head it still lives and comes up when you see shows like Shark Tank. But what can you do? You have the experience, you have the connects, you even have some money to spare. But after a hard day's work and a family to look after, you hardly find time or energy to work on the ground.
        </div ><br /><div className='para'>
        Enter Startic Field. Join the network and connect with student entrepreneurs whose ideas match or are close to ones you have. These bright eyed students are a reflection of yourself in your heydays. They have passion, energy and all the time in the world to get to the ground and work. But they need something which you have. Your experience, connections and maybe seed capital which will help them to zoom ahead.
        </div ><br /><div className='para'>
        You can work with these student startups and take a share in their equity. We are not an investment platform, where rich "uncles" can invest and calculate the RoI. You have to join a startup team and work with them to make the startup a success. It might not even involve any monetary investment from your side. And even if it does, it will be small amounts which you might have otherwise spent in going on a vacation or buying an expensive phone.
        </div ><br /><div className='para'>
        So join the bandwagon. You are building history here!</div >
      </div>
    </div>
    </div>
  );
}