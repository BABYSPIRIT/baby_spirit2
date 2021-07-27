import React from "react";
import { Button } from "antd";

export default function Header(props) {
  return (
    <header {...props}>
      <div className="header-content">
        <h1>
          <a href="https://babyspirit.co" target="_blank"></a>
          <span>BabySpirit</span>
        </h1>
        <Button
          onClick={() => {
            window.location.href = "https://babyspirit.co";
          }}
          style={{ marginTop: "-20px" }}
        >
          Dashboard
        </Button>
      </div>
    </header>
  );
}
