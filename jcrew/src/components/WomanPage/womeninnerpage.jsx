
import "../manpages/manpage.css";
import "../homecomponent/home.css";
import '../manpages/man.innerPage.css'
import womandata from '../database/womandb.json'
import { useEffect, useState } from "react";
import { Footer } from "../footer/footer";


export const WoMenInnerPage = () => {
    const[thedata, setData] = useState([]);
    const[order, setorder] = useState(true);
    useEffect(()=>{
        setData(womandata.data);
    },[]);
   

    const HandleAll = ()=>{
        if(order === false){
    
          var d = thedata.sort((a,b)=> (b.price - a.price));
        }else{
          var d = thedata.sort((a,b)=> (a.price - b.price));
        }
         setData([...d]);
         setorder(!order)
      }
    
  return (
    <>
      <div className="manPage que">
        <p>Have a Question? we can Help.</p>
      </div>
      <div className="links">Home /Woman /AllCLothing</div>
      <h1>All new tredns for woman</h1>
      <div className="sort">
        <button>Hide Filters</button>
        <button onClick={()=>HandleAll()}>
        {order === true  ? "High price" : "Low price"}
        </button>
      </div>
      <div className="bigcontainer">
        <div className="div1">
          <p className="dark">Categories</p>
          <input type="checkbox" /> Double knit(9)
          <br></br>
          <input type="checkbox" /> French Terry(1)
          <br></br>
          <input type="checkbox" /> Pull Overs(9)
          <br></br>
          <input type="checkbox" /> Hoodies(4)
          <br></br>
        </div>
        <div className="div2">
            {
                thedata.map((da)=>{
                    return (
                        <div key={da.id} className="mapped-mandata">
                        <img src={da.img} alt="img"/>
                            <p>{da.title}</p>
                            <p>{`Rupees ${da.price}`}</p>
                            <button >Add to cart</button>
                        </div>
                    )
                })
            
            }
        </div>
      </div>
      <div className="container-9">
        <div>
          <img src="https://www.jcrew.com/s7-img-facade/BK961_GR7805_m?wid=416" />
          <p className="shop">Shop Women's Dresses & Jumpsuits</p>
        </div>
        <div>
          <img src="https://www.jcrew.com/s7-img-facade/BL084_PT0317_m?wid=416" />
          <p className="shop">Shop Women's Shirts & Tops</p>
        </div>
        <div>
          <img src="https://www.jcrew.com/s7-img-facade/BJ571_NA6157_m?wid=416" />
          <p className="shop">Shop Women's Sweaters</p>
        </div>
        <div>
          <img src="https://www.jcrew.com/s7-img-facade/BJ987_BL7755_m?wid=416" />
          <p className="shop">Shop Women's Blazers</p>
        </div>
        <div>
          <img src="https://www.jcrew.com/s7-img-facade/BK251_BK0001_m?wid=416" />
          <p className="shop">Shop Women's Pants</p>
        </div>
        <div>
          <img src="https://www.jcrew.com/s7-img-facade/BK656_DM6650_m?wid=416" />
          <p className="shop">Shop Women's Denim</p>
        </div>
      </div>
      <div className="para">
          <article>
            At J.Crew, we make timeless men’s clothing that lasts a lifetime,
            paired with of the-moment styles season after season, decade after
            decade. Need an example? Here are just a few… Our everyday cashmere
            sweaters are kind of a big deal, not only because they’re crazy
            soft, but because they’re also crazy affordable. Throw on a crewneck
            or V-neck with a pair of our bestselling (and best-fitting) men’s
            jeans, which—if you haven’t heard—we’re also known for. In slim,
            skinny, straight and athletic fits, we really do have denim for
            days. And while we love jeans as much as the next guy, we know every
            so often (aka, at the office) you might need to switch it up.
            Luckily, as our collection of men's pants and chinos (aka khakis)
            proves, the right pair can be every bit as cool as your basic blues.
            Is your workplace a bit more business casual? Our array of blazers
            for men and men’s suits have something for every guy to wear for
            pretty much every occasion, whether it’s a work thing, an after-work
            thing or
            your-best-friend’s-getting-married-and-you-want-a-suit-that’ll-last-forever
            thing. The common thread, so to speak? Quality. We’re so obsessed
            with quality, in fact, that we took it upon ourselves to walk a mile
            in your shoes (okay, not literally). That’s why all our men’s shoes
            are designed to feel, fit and look like they’re crafted just for
            you. Dress shoes, sneakers, snow boots and flip flops: name the
            season and we’ve got a shoe for that. So come on, get your kicks…
          </article>
        </div>
      <Footer />
    </>
  );
};

//All fixed