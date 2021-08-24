import React from "react";
import faker from "faker";
import PropTypes from "prop-types";
import Comment from "./Comment";

import { connect } from "react-redux";
import { useEffect } from "react";
import { getComments } from "../actions/comment";

const Comments = ({ getComments, comment: { comments, loading } }) => {
  useEffect(() => {
    getComments();
  }, [getComments]);
  // var comments = [
  //   {
  //     image:
  //       "https://res.cloudinary.com/dkbror80w/image/upload/v1629697987/img/1521523824236_hxwpex.jpg",
  //     name: "iyad a.",
  //     title: "SE at Ureed",
  //     date: "10/10/2010",
  //     comment: "Bullshit, what you are saying doesn't make sense at all",
  //   },
  //   {
  //     image:
  //       "https://res.cloudinary.com/dkbror80w/image/upload/v1629699273/img/most-beautiful-actress-Odette-Annable-fillgapnews-1_wprnjk.jpg",
  //     name: "Odette Annable",
  //     title: "Actress at TV",
  //     date: "10/2/2020",
  //     comment: "How come?",
  //   },
  //   {
  //     title: "faker at fake",
  //     date: "10/2/2029",
  //     comment: "fake comment",
  //   },
  // ];

  return comments.map((comment) => <Comment comment={comment} />);
};

Comments.propTypes = {
  getComments: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  comment: state.comment,
});

export default connect(mapStateToProps, { getComments })(Comments);
