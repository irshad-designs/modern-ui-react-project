import google from "../../assets/google.png";
import dropbox from "../../assets/dropbox.png";
import slack from "../../assets/slack.png";
import shopify from "../../assets/shopify.png";
import atlassian from "../../assets/atlassian.png";

import "./brand.css";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="google-img" />
      </div>
      <div>
        <img src={slack} alt="slack-img" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian-img" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox-img" />
      </div>
      <div>
        <img src={shopify} alt="shopify-img" />
      </div>
    </div>
  );
};

export default Brand;
