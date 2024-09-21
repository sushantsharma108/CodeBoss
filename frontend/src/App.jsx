import "./App.css";
import Company from "./sections/CompanySection/Company";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/HeroSection/Hero";
import Navbar from "./sections/Navbar/Navbar";
function App() {
  const companyLinks = [
    { href: "#", text: "About Us" },
    { href: "#", text: "Our Services" },
    { href: "#", text: "Privacy Policy" },
    { href: "#", text: "Affiliate Program" },
  ];
  const helpLinks = [
    { href: "#", text: "FAQ" },
    { href: "#", text: "Payment Options" },
    { href: "#", text: "Pricing & Refund" },
    { href: "#", text: "API Reference" },
    { href: "#", text: "Terms & Conditions" },
  ];
  const coursesLinks = [
    { href: "#", text: "JavaScript" },
    { href: "#", text: "ReactJS" },
    { href: "#", text: "NodeJS" },
    { href: "#", text: "TailwindCSS" },
    { href: "#", text: "NextJS" },
  ];
  const socialLinks = [
    { href: "#", text: "9845142546" },
    { href: "#", text: "8521254793" },
    { href: "#", text: "codeboss@gmail.com" },
    { href: "#", text: "123, GK-1, New Delhi-110041" },
    { href: "#", text: "Community Forums" },
  ];
  const compImages1 = [
    { image: "https://static.wixstatic.com/media/d2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png" },
    { image: "https://cdn-images-1.medium.com/max/1200/1*kg5JVNgH_oJmwCBSA0NAXA.jpeg" },
    { image: "https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png" },
  ];
  const compImages2 = [
    { image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/44/a1aa6de0754300a8bb8a2f2d2ac817/atlassian-logo-gradient-vertical-white.png" },
    { image: "https://pbs.twimg.com/profile_images/1797665112440045568/305XgPDq_400x400.png" },
    { image: "https://play-lh.googleusercontent.com/8F-0kIQuTleN9DD43WlxIz-4mqmPJ3-978fr1vYF0q_QoZRrlaD3znctc4kWguHdhUCU=w600-h300-pc0xffffff-pd" },
    { image: "https://yt3.googleusercontent.com/viNp17XpEF-AwWwOZSj_TvgobO1CGmUUgcTtQoAG40YaYctYMoUqaRup0rTxxxfQvWw3MvhXesw=s900-c-k-c0x00ffffff-no-rj" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-4zctaTsvtXNEBIRs8SbS9kBrb8s_bLEDmg&s" },
  ];
  return (
    <>
      <Navbar />
      <Hero />
      <Company img1={compImages1} img2={compImages2} />
      <Footer company={companyLinks} help={helpLinks} courses={coursesLinks} social={socialLinks} />
    </>
  );
}

export default App;
