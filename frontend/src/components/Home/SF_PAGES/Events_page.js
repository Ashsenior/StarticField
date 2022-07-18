import React from 'react'
import './Events_page.css'
import logo from './Asset 1.svg'
import { useEffect } from 'react'
import Header from './Header';
import { Link } from 'react-router-dom';

export const EventsPage = () => {
  var ht = window.innerHeight;
  function scroller(){
    console.log('scroll haas been trigerred')
  }
  useEffect(() => {
    let c = 0;
    const handleScroll =event =>{
      console.log('window.innerHeight',window.innerHeight);
      console.log('window.scrollY',window.scrollY);
      let a = window.innerHeight;
      let b = window.scrollY;
      c = (b-a)*100/a;
      console.log('percentage scrolled',c);
      var d = document.getElementById('001');
      var e = document.getElementById('002');
      var f = document.getElementById('003');
      var g = document.getElementById('004');
      d.style.backgroundColor ='transparent';
      e.style.backgroundColor ='transparent';
      f.style.backgroundColor ='transparent';
      g.style.backgroundColor ='transparent';
        
      d.style.left ='0%';
      e.style.left ='0%';
      f.style.left ='0%';
      g.style.left ='0%';
      if (c<-49){
        console.log("c is in Live.");
        d.style.backgroundColor ='rgb(51, 51, 201)';
        d.style.borderTopRightRadius='40px';
        d.style.borderBottomRightRadius='40px';
        d.style.width='100%';
        d.style.left='-10%';
        d.style.position='absolute';
       
    
        console.log('background for vertical navbar is updated.')
      } else if (c<51){        
        e.style.backgroundColor ='rgb(51, 51, 201)';
        e.style.borderTopRightRadius='40px';
        e.style.borderBottomRightRadius='40px';
        e.style.width='100%';
        e.style.left='-10%';
        e.style.position='absolute';
        
        console.log("c is in Featured");
      }else if (c<151){
        f.style.backgroundColor ='rgb(51, 51, 201)';
        f.style.borderTopRightRadius='40px';
        f.style.borderBottomRightRadius='40px';
        f.style.width='110%';
        f.style.left='-1%';
        f.style.position='absolute';
        
        console.log("c is in Upcomming");
      }else {
        g.style.backgroundColor ='rgb(51, 51, 201)';
        g.style.borderTopRightRadius='40px';
        g.style.borderBottomRightRadius='40px';
        g.style.width='100%';
        g.style.left='-10%';
        g.style.position='absolute';
        
        console.log("c is in Past");
      }

      var z = document.getElementById('000');
      if(c===-100){
        z.style.display='none';
      }
      else {
        z.style.display='block';
        console.log('function is triggering')
      }

    };
    window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll',handleScroll);
      };
    }, []);
    
  return (
    <div className='hi' onScroll={scroller}>
      <div className='headerset' id='000'>
          <Header />
      </div>
      <div className='headercontent'>
        <div className='headersideImg'>
            <img src={logo} alt="pic"/>
        </div>
        <div className='btncontent'>
        <Link to="/" className="btnHome">Home</Link>
        <Link to="/news" className="btnnews">News</Link>
        <Link to="/about" className="btnabout">About</Link>
        </div>
        
      </div>
      
      <div className='sideCenter'>
        <div className='sideImg'>
            <img src={logo} alt="pic" className="pic" />
        </div>
        <div className='sideContent'>
        <h1 className='eventtagcenter'>LIVE NAME</h1> 
        <b className='hostname'> ABC</b>
        <div className='datetag'>Date:- 22/05/2022</div>
        <button input type="button" name="button" value="register">REGISTER</button>
      </div>
      </div>
     
      <div className='sideOne'>
        <div className='sideImg'>
          <img src={logo} alt="pic" className="pic" />
        </div>
        <div className='sideContent'>
        <h2 className='eventtagone'>EVENT NAME</h2> <b className='hostnameone'> HOST NAME</b>
        <div className='datetagone'>Date:- 22/05/2022</div>
        <button input type="button" name="button" value="register">REGISTER</button>
      </div>
      </div>
      <div className='sideTwo'>
      <div className='sideImg'>
          <img src={logo} alt="pic" className="pic" />
        </div>
        <div className='sideContent'>
        <h1 className='eventtag'>EVENT NAME</h1> <b className='hostname'> HOST NAME</b>
        <div className='datetag'>Date:- 22/05/2022</div>
        <button input type="button" name="button" value="register">REGISTER</button>
      </div>
      </div>
      <div className='sideThree'>
      <div className='sideImg'>
          <img src={logo} alt="pic" className="pic" />
        </div>
        <div className='sideContent'>
        <h2 className='eventtagone'>EVENT NAME</h2> <b className='hostnameone'> HOST NAME</b>
        <div className='datetagone'>Date:- 22/05/2022</div>
        <button input type="button" name="button" value="register">REGISTER</button>
      </div>
      </div>

     
      <div className='sideOneSecond'>
        <div className='sideImg'>
          <img src={logo} alt="pic" className="pic" />
        </div>
        <div className='sideContent'>
        <h2 className='eventtagone'>EVENT NAME</h2> <b className='hostnameone'> HOST NAME</b>
        <div className='datetagone'>Date:- 22/05/2022</div>
        <button input type="button" name="button" value="register">REGISTER</button>
      </div>
      </div>
      <div className='sideTwoSecond'>
      <div className='sideImg'>
          <img src={logo} alt="pic" className="pic" />
        </div>
        <div className='sideContent'>
        <h1 className='eventtag'>EVENT NAME</h1> <b className='hostname'> HOST NAME</b>
        <div className='datetag'>Date:- 22/05/2022</div>
        <button input type="button" name="button" value="register">REGISTER</button>
      </div>
      </div>
      <div className='sideThreeSecond'>
      <div className='sideImg'>
          <img src={logo} alt="pic" className="pic" />
        </div>
        <div className='sideContent'>
        <h2 className='eventtagone'>EVENT NAME</h2> <b className='hostnameone'> HOST NAME</b>
        <div className='datetagone'>Date:- 22/05/2022</div>
        <button input type="button" name="button" value="register">REGISTER</button>
      </div>
      </div>


      <div className='sideOneThird'>
        <div className='sideImg'>
          <img src={logo} alt="pic" className="pic" />
        </div>
        <div className='sideContent'>
        <h2 className='eventtagone'>EVENT NAME</h2> <b className='hostnameone'> HOST NAME</b>
        <div className='datetagone'>Date:- 22/05/2022</div>
        <button input type="button" name="button" value="register">REGISTER</button>
      </div>
      </div>
      <div className='sideTwoThird'>
      <div className='sideImg'>
          <img src={logo} alt="pic" className="pic" />
        </div>
        <div className='sideContent'>
        <h1 className='eventtag'>EVENT NAME</h1> <b className='hostname'> HOST NAME</b>
        <div className='datetag'>Date:- 22/05/2022</div>
        <button input type="button" name="button" value="register">REGISTER</button>
      </div>
      </div>
      <div className='sideThreeThird'>
      <div className='sideImg'>
          <img src={logo} alt="pic" className="pic" />
        </div>
        <div className='sideContent'>
        <h2 className='eventtagone'>EVENT NAME</h2> <b className='hostnameone'> HOST NAME</b>
        <div className='datetagone'>Date:- 22/05/2022</div>
        <button input type="button" name="button" value="register">REGISTER</button>
      </div>
      </div>
      
      <div className='verticalNavBar'>
          <a href='#live' className='aOwnLive' id='001' onClick={() =>{window.scrollTo(50,0)}}>LIVE</a><br />
          <a href='#featured' className='aOwnFeatured' id='002' onClick={() =>{window.scrollTo(50,ht)}}>FEATURED</a><br />
          <a href='#upcomming' className='aOwnUpcomming' id='003' onClick={() =>{window.scrollTo(50,ht*2)}}>UPCOMMING</a><br/>
          <a href='#past'className='aOwnPast' id='004' onClick={() =>{window.scrollTo(50,ht*3)}}>PAST</a>
      </div>
    </div>
  );
}
