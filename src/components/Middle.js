import React, { Component } from "react";
import "./style.css";

class Middle extends Component {
  render() {
    return (
      <div className="middle">
        <div className="left-box">
          <div className="top-box">
            <span className="box-850">850 x 350</span>
            <div className="texts">
              <h5> January 1, 2023</h5>
              <h2>Featured Post Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
                laboriosam. Dicta expedita corporis animi vero voluptate
                voluptatibus possimus, veniam magni quis
              </p>
              <a href="!#">Read More &rarr;</a>
            </div>
          </div>

          <div className="bottom-box">
            <div className="row">
              <div className="col">
                <span className="box-700">700 x 350</span>
                <div className="text-inside">
                  <h5>January 1, 2023</h5>
                  <h2>Post Title</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis aliquid atque, nulla.
                  </p>
                  <a href="!#">Read More &rarr;</a>
                </div>
              </div>

              <div className="col">
                <span className="box-700">700 x 350</span>
                <div className="text-inside">
                  <h5>January 1, 2023</h5>
                  <h2>Post Title</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis aliquid atque, nulla.
                  </p>
                  <a href="!#">Read More &rarr;</a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <span className="box-700">700 x 350</span>
                <div className="text-inside">
                  <h5>January 1, 2023</h5>
                  <h2>Post Title</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis aliquid atque, nulla.
                  </p>
                  <a href="!#">Read More &rarr;</a>
                </div>
              </div>

              <div className="col">
                <span className="box-700">700 x 350</span>
                <div className="text-inside">
                  <h5>January 1, 2023</h5>
                  <h2>Post Title</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis aliquid atque, nulla.
                  </p>
                  <a href="!#">Read More &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-box"></div>
      </div>
    );
  }
}

export default Middle;
