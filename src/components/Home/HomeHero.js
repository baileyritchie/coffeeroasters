import React from 'react';
import {Link} from 'react-router-dom'
import './HomeHero.css';
export default function HomeHero() {
  return (
    <div className="hero">
        <div className="hero-container">
          <h1 className="hero-headline">Great coffee made simple.</h1>
          <p className="hero-subheader">Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
          <Link to="/createplan">
            <button className="home-hero-button">Create Plan</button>
          </Link>
        </div>
    </div>
  )
}
