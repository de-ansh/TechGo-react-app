import React from 'react'
import "../styles/home.scss"
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.png'
import{AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiOutlineInstagram}from "react-icons/ai"

const Home = () =>{
  return (
<>
<div className="home" id="home">

  <main>
    <h1>TechGO.</h1>
    <p>solution to your problem</p>
  </main>
</div>

<div className='home2'id="about">
 <img src={img2} className="img2"  alt="blockchain-img" />
 <div>
  <p>
    we are the only solution to your tech problems you face 
    everyday. we are leading tech company whose aim is to secure from the security threat.
  </p>
 </div>
  
</div>

<div className="home3" id="team">
  
<div>
  <h1>Who we are?</h1>

  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed suscipit consequuntur tempore repudiandae obcaecati nulla facere, recusandae perspiciatis ex aut hic modi,
     voluptatibus soluta error sunt cum deleniti ad! Fuga.
     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae dolores vitae architecto possimus nemo quidem, omnis recusandae, aut quasi exercitationem deserunt
     perspiciatis reprehenderit fugiat corporis ex velit magni est assumenda.
  </p>
</div>
<div className="user">
  <img src={img3} className="img3" alt="user-png" />
  <h2>Elon Musk</h2>
  <p>CEO of TechGo.</p>
  </div>




</div>


<div className="home4" id ="brand">
    <div>

    <h1>Brands</h1>
    <article>
      <div style={{
        animationDelay:"0.3s"
      }}>
        <AiFillGoogleCircle/>
        <p>Google</p>

      </div>

      <div style={{
        animationDelay:"0.5s"
      }}>
        <AiFillAmazonCircle/>
        <p>Amazon</p>

      </div>

      <div style={{
        animationDelay:"0.7s"
      }}>
        <AiOutlineInstagram/>
        <p>Instagram</p>

      </div>

      <div style={{
        animationDelay:"0.1s"
      }}>
        <AiFillYoutube/>
        <p>Youtube</p>

      </div>
    </article>
    <div className='divcolor'></div>

    </div>
   

</div>
</>
);
}
export default Home