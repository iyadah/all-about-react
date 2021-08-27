import React from "react";

import PropTypes from "prop-types";
import Comment from "./Comment";
import Pusher from "pusher-js";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { getComments } from "../actions/comment";

const Comments = ({ getComments, comment: { comments, loading } }) => {
  const [channelContent, setChannelContent] = useState("channel content");

  useEffect(() => {
    const pusher = new Pusher("50620317c3650858972b", {
      cluster: "ap2",
      encrypted: true,
    });
    const channel = pusher.subscribe("tests");
    channel.bind("comment", (data) => {
      setChannelContent(data.comment);
    });
    getComments();
  }, [getComments]);
  return (
    <div>
      <h1>{channelContent}</h1>
      {comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
};

Comments.propTypes = {
  getComments: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  comment: state.comment,
});

export default connect(mapStateToProps, { getComments })(Comments);
