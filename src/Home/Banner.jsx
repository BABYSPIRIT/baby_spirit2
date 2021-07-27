import React from "react";
import PropTypes from "prop-types";
import QueueAnim from "rc-queue-anim";
import { Button } from "antd";
import BannerImage from "./BannerImage";
import BabySpiritLogo from "./static/BabySpirit_Logo.jpg";

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };
  static defaultProps = {
    className: "home-banner",
  };
  render() {
    const { className } = this.props;
    return (
      <div className={`home-layout-wrapper ${className}`}>
        <div className="home-layout">
          <QueueAnim
            className={`${className}-content-wrapper`}
            delay={200}
            ease="easeOutQuart"
          >
            <h1 key="h2">HOLD BabySpirit, EARN Spirit!</h1>
            <p key="p">
              The highest rewards distribution token on Fantom network.
            </p>
            <span key="button">
              <Button
                onClick={() => {
                  window.location.href =
                    "https://swap.spiritswap.finance/#/swap?outputCurrency=0x44070cD841411f873B23d8F56EFfeBBA5C2592BF";
                }}
              >
                Buy on Spiritswap!
              </Button>
            </span>
          </QueueAnim>
          <div className={`${className}-image-wrapper`}>
            <img
              style={{ height: "500px", width: "400px" }}
              src={BabySpiritLogo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
