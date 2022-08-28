import "./home.css";
import { AiOutlineTwitter, AiFillInstagram,AiOutlineCopyrightCircle} from "react-icons/ai";
import { MdCall, MdEmail } from "react-icons/md";
import {BsPinterest, BsFacebook, BsYoutube, BsLinkedin} from 'react-icons/bs';
import { Footer } from "../footer/footer";
import { Outlet } from "react-router-dom";


const Home = () => {
  return (
    <>
      <div className="main-container">
        <div className="container">
          <img src="https://www.jcrew.com/brand_creative/homepage2022/09-Sep2/v2/2022sep_0823_hp_w_img0em.jpg" />
          <div className="centered">
            <p>Introducing</p>
            <h1 className="white">Italian</h1>
            <p>City Wood</p>
            <article className="text">
              OUR SOFT YET STRUCTURED, TAKE ON SUITING IN A LUKE FABRIC FROM
              PRATO ITALY
            </article>
            <a className="shop">Shop new suiting</a>
          </div>
        </div>
        <div>
          <img src="https://www.jcrew.com/brand_creative/homepage2022/09-Sep2/v2/2022sep_0823_hp_w_img0dm.jpg" />
        </div>
      </div>
      <div className="container-2">
        <div className="container">
          <img src="https://www.jcrew.com/brand_creative/homepage2022/09-Sep2/2022sep_0823_hp_w_img1.jpg" />
          <div className="centered">
            <h1>New Fall Arrivals</h1>
            <p className="black">For your work/life style</p>
            <a className="shop black">shop now</a>
          </div>
        </div>
        <div className="container">
          <img src="https://www.jcrew.com/brand_creative/2022/202209-Sep/most-wanted/2022sep_0813_w_mostwanted_img0m.jpg" />
          <div className="centered">
            <h1>Meet Louisa</h1>
            <h1>Our latest lady jacket</h1>
            <a className="shop black">shop classic layers</a>
          </div>
        </div>
        <div className="container">
          <img src="https://www.jcrew.com/brand_creative/homepage2022/09-Sep2/2022sep_0823_hp_w_img3.jpg" />
          <div className="centered">
            <h1>Fresh cashmere colors</h1>
            <a className="shop black">elevate your everyday</a>
          </div>
        </div>
        <div className="container">
          <img src="https://www.jcrew.com/brand_creative/homepage2022/09-Sep2/2022sep_0823_hp_w_img4.jpg" />
          <div className="centered">
            <h1 className="white">Lightweight, luxe</h1>
            <h1 className="white">merino wool</h1>
            <a className="shop">shop sweaters</a>
          </div>
        </div>
        <div className="container">
          <img src="https://www.jcrew.com/brand_creative/homepage2022/09-Sep2/2022sep_0823_hp_w_img5.jpg" />
          <div className="centered">
            <p className="black">Pant spotlight</p>
            <h1>The Kate STRAIGHT-LEG</h1>
            <p className="black">now in four-season stretch</p>
            <a className="shop black">shop sizes 00-24</a>
          </div>
        </div>
        <div className="container">
          <img src="https://www.jcrew.com/brand_creative/homepage2022/09-Sep2/2022sep_0823_hp_w_img6.jpg" />
          <div className="centered">
            <h1>Introducing the Anya scrunchie ballet</h1>
            <a className="shop black">shop shoes</a>
          </div>
        </div>
      </div>
      <div className="container-3">
        <img src="https://www.jcrew.com/brand_creative/homepage2022/09-Sep/2022sep_0816_hp_w_lkbk_img0b.jpg" />
        <div className="right">
          <h1>A SEASON</h1>
          <h1>OF LOOKS</h1>
          <a className="shop">Discover fall 2022</a>
        </div>
      </div>
      <div className="container-4">
        <div>
          <h1>Shop New Arrivals</h1>
        </div>
        <button className="btn">Shop Women</button>
        <button className="btn">Shop Men</button>
        <button className="btn">Shop Girls</button>
        <button className="btn">Shop Boys</button>
      </div>
      <div className="container-5">
        <div className="community">
          <div>
            <img src="https://www.jcrew.com/brand_creative/2022/202204-Apr/logo_jcrew_collective_20220315_blk.png?imformat=generic" />
            <p>Meet our creative community. </p>
          </div>
        </div>
        <div className="con1">
          <div>
            <img src="https://www.jcrew.com/brand_creative/homepage2022/09-Sep/2022sep_0816_hp_w_img7.jpg" />
          </div>
          <div>
            <img src="https://www.jcrew.com/brand_creative/homepage2022/09-Sep/2022sep_0816_hp_w_img8.jpg" />
          </div>
        </div>
        <div className="container-6">
          <div>
            <p>Flora & fauna</p>
            <p>A Print Remix with Marjon Carlos</p>
            <p className="shop">Shop her story</p>
          </div>
          <div>
            <p>Polished meets playful</p>

            <p>The Work Remix with Lucy Williams</p>

            <a className="shop">Shop her story</a>
          </div>
        </div>
        <div className="more">
          <h1>More Stories</h1>
        </div>
        <div className="container-7">
          <div>
            <img src="https://www.jcrew.com/brand_creative/homepage2022/09-Sep/2022sep_0816_hp_w_img9new.jpg" />
            <p>The edit: fall florals</p>
            <a className="shop">shop the print story </a>
          </div>
          <div>
            <img src="https://www.jcrew.com/brand_creative/homepage2022/09-Sep/2022sep_0816_hp_w_img10.jpg" />
            <p>Most wanted: the Louisa tweed lady jacket</p>
            <a className="shop">Get a closer look</a>
          </div>
          <div>
            <img src="https://www.jcrew.com/brand_creative/homepage2022/09-Sep/2022sep_0816_hp_w_img11.jpg" />

            <p>Creative Spirit Series: Eveliina Vintage X J.Crew</p>
            <a className="shop">Shop the collab</a>
          </div>
          <div>
            <img src="https://www.jcrew.com/brand_creative/homepage2022/08-Aug2/2022aug_0802_hp_w_img14.jpg" />

            <p> Design Try-ons: the August Collection</p>
            <a>Shop the video</a>
          </div>
          <div>
            <img src="https://www.jcrew.com/brand_creative/homepage2022/08-Aug/2022aug_0726_hp_w_img13.jpg" />

            <p>The edit: flora & fauna</p>
            <a className="shop">Shop the roundup</a>
          </div>
          <div>
            <img src="https://www.jcrew.com/brand_creative/homepage2022/08-Aug/2022aug_0726_hp_w_img14.jpg" />

            <p>Creative Spirits Series: Monrowe™ X J.Crew</p>
            <a className="shop">Meet founder Dani Evans</a>
          </div>
        </div>
      </div>
      <div className="container-8">
        <p>More you need to see</p>
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
     <Footer/>
     <Outlet/>
    </>
  );
};
export default Home;
