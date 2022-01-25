import React, { useContext } from "react";
import CommentContext from "../context";
import { Form } from "../style/components/form.style";

const FormComponent = ({ isReply, handleSubmit }) => {
  const { newComment, handleChange, currentUser, currentUserImage } =
    useContext(CommentContext);

  return (
    <Form.Wrapper>
      <Form.FormEl onSubmit={handleSubmit}>
        <Form.Text
          value={newComment}
          onChange={handleChange}
          rows={4}
          placeholder="Add a comment..."
        />
        <Form.Image src={currentUserImage.webp} alt={currentUser} />
        <Form.Button type="submit">{isReply ? "Reply" : "Send"}</Form.Button>
      </Form.FormEl>
    </Form.Wrapper>
  );
};

export default FormComponent;
