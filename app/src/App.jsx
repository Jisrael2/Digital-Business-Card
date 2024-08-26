import './App.css'

function App() {

  return (
    <div className= "body--frame">
      <div className= "back-of-card">
      <div className="black--section" ></div>
      <img className="image-logo" src=".\src\assets\images\image-logo.png"/>
      <img className="text--logo" src=".\src\assets\images\text-logo.png"/>
      <img className="golden--shape" src=".\src\assets\images\golden-part.svg" />
      </div>
      <div className="front-of-card">
        <div>
          <h1 className="motto-text" >Be a Hero</h1>
          <span>
            <img className="image-logo-small" src=".\src\assets\images\image-logo.png"/>
            <img className="text-logo-small" src=".\src\assets\images\text-logo.png"/>
          </span>

        </div>
        <img className="black--shape" src=".\src\assets\images\black-shape.svg" />
        <span className="owner-info">
          <big className="black-name"> Jesusetemi</big>
          <big className="yellow-name">                Akanji</big>
          <small className="owner-position"> Developer</small>
        </span>

        <div className="contact-info">
          <span>
            <img className="icon--image" src=".\src\assets\images\phone-icon.svg" />
            <small>    2348076169512</small>
          </span>
          <br/>
          <span>
            <img className="icon--image" src=".\src\assets\images\email-icon.svg" />
            <small>    jesusetemiisrael@gmail.com</small>
          </span>
          <br/>
          <span>
            <img className="icon--image" src=".\src\assets\images\location-icon.svg" />
            <small>    16, Aiyedun, Bariga, Lagos, <span className="text-overflow">  Nigeria.</span> </small>
          </span>
        </div>
      </div>
    </div>
  )
}

export default App
