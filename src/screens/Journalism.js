import React from "react";

export default function Journalism() {
  return (
    <div className="container">
      <div className="text_container">
        <p className="text_periyar">
          Journalism is the production and distribution of reports on the
          interaction of events, facts, ideas, and people that are the "news of
          the day" and that informs society to at least some degree. ...
          Journalistic media include: print, television, radio, Internet, and,
          in the past, newsreels
        </p>
      </div>
      <img
        className="img_periyar"
        style={{ alignSelf: "flex-start" }}
        src={require("../images/journalism.png")}
      />
    </div>
  );
}
