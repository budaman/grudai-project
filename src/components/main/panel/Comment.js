import React from "react";
import CommunicationEmail from "material-ui/svg-icons/communication/email";

export default class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <div>
          <CommunicationEmail
            style={{ width: 60, height: 60 }}
            color="#698eab"
          />
        </div>
      </div>
    );
  }
}
