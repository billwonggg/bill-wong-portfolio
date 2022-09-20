import cp from "../assets/images/cp.png";

const MyAbout = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        I'm Bill, a second year Software Engineering student at UNSW. I have been programming since
        high school and I love it!
      </p>
      <p>
        I enjoy spending my spare time learning new technologies and developing new skills. I always
        try and apply the knowledge I learned to real life projects, just like the one you are
        looking at right now! 😄
      </p>
      <br />
      <br />
      <h2>My Hobbies</h2>
      <img src={cp} alt="competitive programming" />
      <p>
        I like to compete in programming competitions, such as the ICPC and Google Kick Start. I
        competed in the 2021 ICPC South Pacific Division and achieved the second place.
      </p>
    </div>
  );
};

export default MyAbout;
