import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div id="container">
        <div>
          <h1>Matt Lepley</h1>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Brand</a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                  <li><a href="#">Link</a></li>
                  <li><a href="#">Link</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <section className="carousel">
          <h2 className="opener">Hello, I&#39;m a <span className="role">great personality</span>.</h2>
        </section>
        <section className="callout">
          <h2>And I do creative stuff.</h2>
        </section>
        <section className="skill video">
          <h3>Video</h3>
          <p>Video text and stuff will go here and be awesome.</p>
        </section>
        <section className="skill web">
          <h3>Web</h3>
          <p>Web text and stuff will go here and be awesome.</p>
        </section>
        <section className="carousel">
          <h2>What do you charge to do a website?</h2>
        </section>
        <div className="contact row">
          <div className="col-xs-12 col-sm-6 col-md-6">
            <p>Wondering what I charge to make a thing?</p>
            <p>Just shoot me an email or DM on social media.</p>
            <p>Or use the contact form!</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6">
            <p>Contact form placeholder.</p>
          </div>
        </div>
        <section className="footer">
          <div className="affiliation">
            <a href="http://www.sevenluckyseven.com" target="_blank">Affiliated with Seven Lucky Seven</a>
            <p>Kansas City-based creative media production</p>
          </div>
          <nav>
            <ul className="nav">
              <li><a href="#">Home</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </section>
      </div>
    );
  }
}
