import React from "react";

const BgOverlay = () => {
  return (
    <div className="header-overlay">
      <picture>
        <source
          srcSet="/assets/desktop/bg-pattern-header.svg"
          media="(min-width: 650px)"
        />
        <source
          srcSet="/assets/tablet/bg-pattern-header.svg"
          media="(min-width: 350px)"
        />
        {/* <source
          srcset="/assets/mobile/bg-pattern-header.svg"
          media="(min-width: 350px)"
        /> */}
        <img src="/assets/mobile/bg-pattern-header.svg" alt="MDN" />
      </picture>
    </div>
  );
};

export default BgOverlay;
