import React from "react";
import { Slide } from "react-slideshow-image";

export default class Main extends React.Component {
  render() {
    const properties = {
      duration: 3000,
      autoplay: true,
      transitionDuration: 2000,
      arrows: false,
      infinite: true,
      easing: "ease",
    };
    const slideImages = [
      "https://www.bungie.net/7/ca/destiny/products/beyondlight/media_wallpaper_5.png",
      "https://www.bungie.net/7/ca/destiny/products/beyondlight/media_wallpaper_6.png",
      "https://www.bungie.net/7/ca/destiny/products/beyondlight/media_wallpaper_1.png",
    ];
    return (
      <div className="slide-container">
        <Slide ref={this.slideRef} {...properties}>
          {slideImages.map((each, index) => (
            <div key={index} className="each-slide">
              <img className="lazy" src={each} alt="sample" />
            </div>
          ))}
        </Slide>
      </div>
    );
  }
}
