import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const FROM_LEFT = 'fromLeft'
const FROM_RIGHT = 'fromRight'

const BasicExample = () => (
  <Router>
    <Route
      render={({ location }) => (
        <div style={styles.fill}>
          <div style={styles.content}>
            <CSSTransitionGroup
              transitionName={(location.state && location.state.direction) || FROM_RIGHT}
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
            >
              <Route location={location} key={`${location.key}-home`} exact path="/" component={Home} />
              <Route
                location={location}
                key={`${location.key}-about-stuff`}
                path="/about-stuff"
                component={AboutStuff}
              />
              <Route location={location} key={`${location.key}-about`} path="/about" component={About} />
            </CSSTransitionGroup>
          </div>
        </div>
      )}
    />
  </Router>
)

const Home = () => (
  <div
    style={{
      ...styles.fill,
      ...styles.hsl,
      backgroundColor: 'red',
      color: 'white',
    }}
  >
    <h2>Home</h2>
    <Link to={{ pathname: '/about', state: { direction: FROM_RIGHT } }}>About</Link>
  </div>
)

const About = () => (
  <div
    style={{
      ...styles.fill,
      ...styles.hsl,
      backgroundColor: 'blue',
      color: 'white',
    }}
  >
    <h2>About</h2>
    <div>
      <Link to={{ pathname: '/', state: { direction: FROM_LEFT } }}>Back to home</Link>
    </div>
    <div>
      <Link to={'/about-stuff'}>About stuff</Link>
    </div>
  </div>
)

const AboutStuff = () => (
  <div
    style={{
      ...styles.fill,
      ...styles.hsl,
      backgroundColor: 'green',
      color: 'white',
    }}
  >
    <h2>About stuff</h2>
    <Link to={{ pathname: '/about', state: { direction: FROM_LEFT } }}>Back to about</Link>
  </div>
)

export default BasicExample

const styles = {}

styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
}

styles.content = {
  ...styles.fill,
  top: '40px',
  textAlign: 'center',
}

styles.nav = {
  padding: 0,
  margin: 0,
  position: 'absolute',
  top: 0,
  height: '40px',
  width: '100%',
  display: 'flex',
}

styles.navItem = {
  textAlign: 'center',
  flex: 1,
  listStyleType: 'none',
  padding: '10px',
}

styles.hsl = {
  ...styles.fill,
  paddingTop: '20px',
  fontSize: '30px',
}
