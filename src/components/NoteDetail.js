import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SubmitComment from "./SubmitComment";
import _ from "lodash";
import Comment from "./Comment";

class NoteDetail extends Component {
  renderComments() {
    const { note } = this.props;
    return _.map(note.comments, (comment, key) => {
      return (
        <Comment key={key} id={key}>
          {comment.commentBody}
        </Comment>
      );
    });
  }

  render() {
    const { note } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div>
            <h4>{note.title}</h4>
            <p>{note.body}</p>
            <SubmitComment id={this.props.match.params.id} />
            {this.renderComments()}
            <br />
            <Link to="/note"> &#171; Back</Link>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    note: state.notes[ownProps.match.params.id],
    uid: state.user.uid
  };
}

export default connect(mapStateToProps)(NoteDetail);
