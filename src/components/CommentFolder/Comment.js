import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router";
import axios from "axios";
import { API_URL } from "../../config";

function Comment({ user }) {
  const params = useParams();
  console.log(params);
  const userId = user._id;
  const [commentState, setCommentState] = useState("");
  const [commentList, setCommentList] = useState("");

  const handleComment = async (event) => {
    event.preventDefault();
    const newComment = {
      owner: userId,
      plantId: params.plantId,
      comment: commentState,
    };
    let response = await axios.post(`${API_URL}/comment/create`, newComment, {
      withCredentials: true,
    });
    setCommentList(response.data)
    console.log(response.data);
  };

  const handleChange = (event) => {
    let value = event.target.value;
    setCommentState(value);
    console.log(commentState);
  };

  return (
    <div>
      <Form onSubmit={handleComment}>
        <input type="text" name="comment" onChange={handleChange} />
        <button>Send Comment</button>
      </Form>
    </div>
  );
}

export default Comment;
