import '../homecomponent/home.css'
import '../manpages/manpage.css'
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import { MdCall, MdEmail } from "react-icons/md";
import { BsPinterest, BsFacebook, BsYoutube, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const Woman = () => {
  return (
    <>
      <div className="manPage que">
        <p>Have a Question? we can Help.</p>
      </div>
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
      <div className="manPage">
        <Link to='womanpage'><p>Shop Stories & More</p></Link>
      </div>
      <div className="manContainer2">
        <div>
          <img src="https://www.jcrew.com/brand_creative/2022/202209-Sep/flyout/v2/2022sep_0823_flyout_w_img0.jpg" />
          <p>Introducing Italian city Wool</p>
        </div>
        <div>
          <img src="https://www.jcrew.com/brand_creative/2022/202209-Sep/flyout/v2/2022sep_0823_flyout_w_img1.jpg" />
          <p>New fall Arrivals</p>
        </div>
        <div>
          <img src="https://www.jcrew.com/brand_creative/2022/202209-Sep/flyout/v2/2022sep_0823_flyout_w_img2.jpg" />
          <p>Fresh cashmere shades</p>
        </div>
        <div>
          <img src="https://www.jcrew.com/brand_creative/2022/202209-Sep/flyout/v2/2022sep_0823_flyout_w_img3.jpg" />
          <p>Light weight, luxe merino Wool</p>
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
      <div className="container-10">
        <div>
          <AiOutlineTwitter /> @jcrew help
        </div>
        <div>
          <MdCall /> 1409765
        </div>
        <div>
          <MdEmail /> Email us{" "}
        </div>
      </div>
      <div className="container-11">
        <div className="main1">
          <div className="main-2">
            <div className="head1">
              <p className="dark">Help</p>
              <p>Customer Service</p>
              <p>Track Order</p>
              <p>Returns & Exchanges</p>
              <p>Shipping</p>
              <p>International Orders</p>
              <p>Contact Us</p>
            </div>
            <div>
              <p className="dark">Quick Links</p>
              <p>Find a Store</p>
              <p>Size Charts</p>
              <p>Offers & Promotions</p>
              <p>My Favorites</p>
            </div>
            <div>
              <p className="dark">About J.Crew</p>
              <p>Our Story</p>
              <p>Careers</p>
              <p>Social Responsibility</p>
              <p>California Transparency Act/Modern Slavery Act</p>
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
              <p>California Do Not Sell My Personal Information</p>
              <p>Diversity, Equity and Inclusion at J.Crew Group</p>
            </div>
          </div>
          <div className="like">
            <p className="dark">Like Being First?</p>
            <p className="miss">
              Get can't-miss style news, before everybody else.
            </p>
            <input className="ftr-input" placeholder="Enter your email" />
            <button className="ftr-btn">Signup</button>
          </div>
        </div>
        <div className="container-12">
          <AiFillInstagram />
          <BsFacebook />
          <AiOutlineTwitter />
          <BsLinkedin />
          <BsPinterest />
          <BsYoutube />
        </div>
        <div className="if">
          <p>India</p>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQEAAADECAMAAACoYGR8AAAA0lBMVEX////4ok0inkgdnUXh4e34pFM+plv4oUn5sG9Cp10tMIb09fX4+Pj7/Pz4nkP4nT740a395NELmj2hz6zK49AeIoHm5vAlKIMjJ4IpLIQaHoCmp8gXG38AAHsxNIna2ur98+r73cNvcai7vNYLEXzy8vhSVJiWl76Jire0tdKbnMBGSJQACXy328H96934u4L4wI35zKL4q2FlZ6NAQ5HHyN1hY6J9frBDRpLNzuKLjLZRU5mCg7NaXJ0woVHC38ji8eZftHdyvIZTr2yMx5zX7N0mwex9AAAD+UlEQVR4nO3aa1PaQBiG4cWA0SBRozmCAiESjmLLQRFB0fr//1J3OVaGsa3zorvmuT9pnXG7l9mQbMIYQgghhBBCCCGEEEIIIYQQQgghhBBCCP1b1yedAwW6KZd2M//ygW7qKmQep26u6edf6ph6SplM/Qc1wGnG/OpZ/V9m54gWIKXQATDPPMgRApQyygFwghtCgY5iS2CeWSYDOFUSIKX/JFsHHQXXgIjsICh99Uw+mt4hElB0EfAyJRqBsrICOtGl4YmyAsenEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAgEhAzyiaSSRwlM1Svpz4adH9v/lvon1D9ZPKQgAC8guk87VudRzGlaud/HrZBY7yvVbgub7r2oVWt08/gOwC+SDwjVVuNCqSDyG1gNMszObv80PAn391USMeQ2qBfuSKSdt2bxCGY8O2BULQJD4dSCxQvxDzD6r5ojOrH1/aYikYtATyCvQFgH1XcZz0IseJxWHgX5ISSCuQjsQhf7ue/8ygeOcZhlclHEdegR7/awfxm/kLgnSVExRiwoFkFYgDvgQeNgFEguYiTTeSpAJXfA241W0AzrDAf9QlG0lWgZif9e3+NoG0U+M/a9EdBHIK5FzfcMM1gPgwXBsInXuqoSQV6PMj3assJ+0U4/A2v/5QvPUM36MaSlIBvgj8yxVAJbJdr9AsLr+v84MgIrtBkFNg4Br+YCkwjGa3BN7qxFjkAkGdaiw5Bfgnnldz1gf9rGi5LBzDN+wG1VhSCogTod1Yzre5uD9e/wsHojsVyingvy9w9+0FsAq2nwlHSToTvv00rBeS92mIK6L3r4rFFgHddqGcAuz+b3dGdHvGkgq8d3ccJOLueL5DUttGwC8GKG+OpRXIia0ge8su2Tgpu2SsKHZK7YeNndLhKDk7pazSEgSjP3fL0w3XTc5uOWP1lng44I3rqycmPfG4wL10SIeRWIBVZk8NXdtodsNw0PMT99SMsfTyyanLm3/VeiAeQ24BxvL2xtPzIfkQkguwq0YzshdvUERJfIOClxNv0YzHYVxP5ls0i3K7e1VREYEdBgFSgYS/VXs22Ve0yTmRgKUpmkUmsKdoEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhQCbSVFdBeaQQeVRXQJk80Ak/aV0/lg2lTGgDGpooSWG0qAUWXgbZP9wrcVEkCukOAnwkmCq4D65kOgLFzTTkC64X2NdDHPcUIrGmWFIAvhBdLIQNN+0U8f1H70FLk5VJLeya6GNzs9Wx6KH8vz+2n3cwfIYQQQgghhBBCCCGEEEIIfed+A1di7LmHTr7dAAAAAElFTkSuQmCC" />
        </div>
        <div className="logo2">
          <p className="cursive">MadeWell</p>
          <p>J.CREW</p>
        </div>
        <div className="copyright">
          <p>
            {" "}
            <AiOutlineCopyrightCircle /> 2022 J.crew
          </p>
        </div>
      </div>
      

    </>
  );
};
