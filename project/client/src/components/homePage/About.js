//photos import
import about from "../../styles/img/about.jpg";
import team from "../../styles/img/team.jpg";
//components import
import Layout from "./Layout";
//array import
import { cards } from "../../util";

function About() {
  return (
    <div className="aboutSection">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          d="M0,32L40,48C80,64,160,96,240,101.3C320,107,400,85,480,80C560,75,640,85,720,85.3C800,85,880,75,960,58.7C1040,43,1120,21,1200,26.7C1280,32,1360,64,1400,80L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <Layout
        className="aboutLayout"
        title="About us"
        text="Hello, if it's your first time in our page and you still don't know who we are, 
        we are ready to introduce ourselves!! 
        We prepare delicious recipes and all ingredient in exact amount, and it's definitely a
        convenient way to make meals without planning and going to the supermarket. Our delivery
        will be bring our boxes straight to your door and our clear instructions for cooking will
        help you to fill like a big chef on your own kitchen. And for sure,the results will be 
        impressive and you will definitely enjoy the process!!"
        img={about}
      />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#939597"
          d="M0,64L80,85.3C160,107,320,149,480,138.7C640,128,800,64,960,58.7C1120,53,1280,107,1360,133.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <div className="infoSection">
        <h2>How it's working?</h2>
        <div className="cardsSection">
          {cards.map((card) => {
            return (
              <div className="cardDescription" key={card.title}>
                <img src={card.icon} alt="Ups.." />
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f5df4d"
          d="M0,192L21.8,176C43.6,160,87,128,131,112C174.5,96,218,96,262,112C305.5,128,349,160,393,149.3C436.4,139,480,85,524,85.3C567.3,85,611,139,655,133.3C698.2,128,742,64,785,53.3C829.1,43,873,85,916,128C960,171,1004,213,1047,213.3C1090.9,213,1135,171,1178,165.3C1221.8,160,1265,192,1309,202.7C1352.7,213,1396,203,1418,197.3L1440,192L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
        ></path>
      </svg>
      <div className="teamLayout">
        <Layout
          title="Our team"
          text="Our team is working around the clock to get our service right for you.
          Our team of professionals chefs is delivering high quality culinary experiences 
          for each and every client.  We pride ourselves on having a service mentality, 
          and will always go the extra mile to ensure client satisfaction.  
          Our Chefs have a lot of knowledge and enthusiasm for cooking, and each brings 
          their own flavor and talents to the new recipes and the best combinations of 
          ingredients."
          img={team}
        />
      </div>
    </div>
  );
}

export default About;
