import React from "react";
import "./editpost.css";
function Editpost() {
  return (
    <div>
      <div class="container">
        <div class="wrapper">
          <section class="post">
            <header>CodeWithNepal</header>
            <form action="#">
              <div class="content">
                <img src="cwn.png" alt="logo" />
                <div class="details">
                  <p>CodeWithNepal</p>
                  <div class="privacy">
                    <i class="fas fa-user-friends"></i>
                    <span>Friends</span>
                    <i class="fas fa-caret-down"></i>
                  </div>
                </div>
              </div>
              <textarea
                placeholder="What's on your mind, CodeWithNepal?"
                spellcheck="false"
                required
              ></textarea>
              <div class="theme-emoji">
                <img src="icons/theme.svg" alt="theme" />
                <img src="icons/smile.svg" alt="smile" />
              </div>
              <div class="options">
                <p>Add to Your Post</p>
                <ul class="list">
                  <li>
                    {/* <img src="icons/gallery.svg" alt="gallery" /> */}
                    <span class="material-icons">videocam</span>
                  </li>
                  <li>
                    {/* <img src="icons/tag.svg" alt="gallery" /> */}
                    <span class="material-icons">videocam</span>
                  </li>
                  <li>
                    {/* <img src="icons/emoji.svg" alt="gallery" /> */}
                    <span class="material-icons">videocam</span>
                  </li>
                  <li>
                    {/* <img src="icons/mic.svg" alt="gallery" /> */}
                    <span class="material-icons">videocam</span>
                  </li>
                  <li>
                    {/* <img src="icons/more.svg" alt="gallery" /> */}
                    <span class="material-icons">videocam</span>
                  </li>
                </ul>
              </div>
              <button>Post</button>
            </form>
          </section>
          <section class="audience">
            <header>
              <div class="arrow-back">
                <i class="fas fa-arrow-left"></i>
              </div>
              <p>Select Audience</p>
            </header>
            <div class="content">
              <p>Who can see your post?</p>
              <span>
                Your post will show up in News Feed, on your profile and in
                search results.
              </span>
            </div>
            <ul class="list">
              <li>
                <div class="column">
                  <div class="icon">
                    <i class="fas fa-globe-asia"></i>
                  </div>
                  <div class="details">
                    <p>Public</p>
                    <span>Anyone on or off Facebook</span>
                  </div>
                </div>
                <div class="radio"></div>
              </li>
              <li class="active">
                <div class="column">
                  <div class="icon">
                    <i class="fas fa-user-friends"></i>
                  </div>
                  <div class="details">
                    <p>Friends</p>
                    <span>Your friends on Facebook</span>
                  </div>
                </div>
                <div class="radio"></div>
              </li>
              <li>
                <div class="column">
                  <div class="icon">
                    <i class="fas fa-user"></i>
                  </div>
                  <div class="details">
                    <p>Specific</p>
                    <span>Only show to some friends</span>
                  </div>
                </div>
                <div class="radio"></div>
              </li>
              <li>
                <div class="column">
                  <div class="icon">
                    <i class="fas fa-lock"></i>
                  </div>
                  <div class="details">
                    <p>Only me</p>
                    <span>Only you can see your post</span>
                  </div>
                </div>
                <div class="radio"></div>
              </li>
              <li>
                <div class="column">
                  <div class="icon">
                    <i class="fas fa-cog"></i>
                  </div>
                  <div class="details">
                    <p>Custom</p>
                    <span>Include and exclude friends</span>
                  </div>
                </div>
                <div class="radio"></div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Editpost;
