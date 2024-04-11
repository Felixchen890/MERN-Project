import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './Home.css';

function Home() {
  return (
      <div>
        <div className="first-layer">
          <h1>my banner</h1>
          <p>my text</p>
        </div>
        <br />
        <div className="second-layer">
          <div className="second-layer-left-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXYujgMGETU_Jl-MhilQOyEkIBaoRZbfZRtObwOFsM5w&s" alt="Image" />
          </div>
          <div className="second-layer-right-item">
            <h1>my title right</h1>
            <p>my text right</p>
          </div>
        </div>
        <div className = "third-layer">
        <table>
          <tbody>
            <tr>
              <td>Cell 1</td>
              <td>Cell 2</td>
              <td>Cell 3</td>
              <td>Cell 4</td>
            </tr>
            <tr>
              <td>Cell 5</td>
              <td>Cell 6</td>
              <td>Cell 7</td>
              <td>Cell 8</td>
            </tr>
            <tr>
              <td>Cell 9</td>
              <td>Cell 10</td>
              <td>Cell 11</td>
              <td>Cell 12</td>
            </tr>
          </tbody>
        </table>
        </div>

        <Footer />

      </div>
  );
}

export default Home;
