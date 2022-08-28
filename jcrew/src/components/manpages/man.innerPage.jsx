import "./manpage.css";
import "../homecomponent/home.css";
import ".//man.innerPage.css";
import mandata from '../database/mandb.json'
import { useEffect, useState } from "react";
import { Footer } from "../footer/footer";

export const ManInnerPage = () => {
    const[thedata, setData] = useState([]);
    const[order, setorder] = useState(true);
    useEffect(()=>{
        setData(mandata.data);
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
      <div className="links">Home /Man /AllCLothing</div>
      <div className="maninnerCon1">
        <img src="https://www.jcrew.com/brand_creative/2022/202208-Aug/m_sweats/v2/2022aug_0726_m_sweats_img0.jpg" />
        <div className="centered light">
          <p>Introducing</p>
          <h1 className="light">Heritage 14 oz. fleece</h1>
          <article>
            A design-team favorite, our new hard-wearing, heavier-weight fleece
            is cut on the cross grain with a classic varsity look and feel.
          </article>
        </div>
      </div>
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
      <div className="para">
        <article>
          J.Crew's got products like men's sweatshirts & sweatpants for any day,
          anywhere, anytime. Shop til you smile at J.Crew. Check out our filters
          for additional options like brand, color, material, and much more.
          Make it special. We have many colors to choose from, so go and get
          those sweatshirts & sweatpants you've always wanted. Shop J.Crew.com
          for best-selling, of-the-moment men's sweatshirts & sweatpants you'll
          love right now and for years to come. Curious about J.Crew Credit Card
          rewards? Learn more and earn more at j.crew.com. Gain access to a few
          of our favorite things: free alterations, birthday surprises, and
          exclusive offers. Get double points for every dollar spent at J.Crew.
          Plus, free shipping!
        </article>
      </div>
      <div className="sshop">
        <p>Shop Stories and more</p>
      </div>
      <div className="manContainer2">
        <div>
          <img src="https://www.jcrew.com/brand_creative/2022/202209-Sep/flyout/2022sep_0823_flyout_m_img0.jpg" />
          <p>Introducing heritage oz fleece</p>
        </div>
        <div>
          <img src="https://www.jcrew.com/brand_creative/2022/202209-Sep/flyout/2022sep_0823_flyout_m_img1.jpg" />
          <p>The september collection</p>
        </div>
        <div>
          <img src="https://www.jcrew.com/brand_creative/2022/202209-Sep/flyout/2022sep_0823_flyout_m_img2.jpg" />
          <p>The evolution of suiting</p>
        </div>
        <div>
          <img src="https://www.jcrew.com/brand_creative/2022/202209-Sep/flyout/2022sep_0823_flyout_m_img3.jpg" />
          <p>The Denim days</p>
        </div>
      </div>
      <Footer />
    </>
  );
};
