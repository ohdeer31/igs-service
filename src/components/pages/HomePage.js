import React from "react";
import pic1 from "../../images/Train-Repair-1.png";

export default function Home() {
  function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }

  return (
    <div>
      <header>
        <h1 className="p-2">This is homepage</h1>
      </header>
      <div>
        <FadeInSection>
          <div className="d-flex justify-content-center mb-3 box">
            <img src={pic1} alt="igs facility" className="p-2"></img>
            <div>
              <h3 className="p-2">Some Title</h3>
              <p className="p-2">Some information about the above title</p>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="d-flex justify-content-center mb-3 box">
            <div>
              <h3 className="p-2">Some Other Title</h3>
              <p className="p-2">Some more information about the above title</p>
            </div>
            <img src={pic1} alt="more igs facility" className="p-2"></img>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
