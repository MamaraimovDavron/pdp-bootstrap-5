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

            <div className="pagination">
              <div className="newer">Newer</div>
              <div>
                <a href="!#">1</a>
              </div>
              <div>
                <a href="!#">2</a>
              </div>
              <div>
                <a href="!#">3</a>
              </div>
              <div>
                <a href="!#">...</a>
              </div>
              <div>
                <a href="!#">15</a>
              </div>
              <div id="older">
                <a href="!#">Older</a>
              </div>
            </div>
          </div>
        </div>

        <div className="right-box">
          <div className="search-box">
            <span>Search</span>
            <div className="input">
              <input type="text" placeholder="Enter search term..." />
              <button className="btn btn-primary">Go!</button>
            </div>
          </div>

          <div className="categories">
            <span>Categories</span>
            <div className="programming-languages">
              <div className="box-1">
                <a href="!#">Web Design</a>
                <a href="!#">HTML</a>
                <a href="!#">Freebies</a>
              </div>
              <div className="box-2">
                <a href="!#">Javascript</a>
                <a href="!#">CSS</a>
                <a href="!#">Tutorials</a>
              </div>
            </div>
          </div>

          <div className="side-widget">
            <span>Side Widget</span>
            <p>
              You can put anything you want inside of these side widgets. They
              are easy to use, and feature the Bootstrap 5 card component!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Middle;
