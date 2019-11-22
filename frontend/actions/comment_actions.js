import * as CommentAPIUtil from '../util/comment_api_util';

// Comment action type constants
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const CLEAR_COMMENTS = 'CLEAR_COMMENTS';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const CLEAR_COMMENT_ERRORS = 'CLEAR_COMMENT_ERRORS';


// Comment action creators
export const receiveComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments,
  };
};

export const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment,
  };
};

export const removeComment = (comment) => {
  return {
    type: REMOVE_COMMENT,
    comment,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_COMMENT_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_COMMENT_ERRORS
  };
};

export const clearComments = () => {
  return {
    type: CLEAR_COMMENTS
  };
};

// Comment thunk action creators
export const fetchComments = () => (dispatch) => {
  return CommentAPIUtil.fetchComments().then((comments) => {
    dispatch(receiveComments(comments))
  },
    (errors) => {
      dispatch(receiveErrors(errors.responseJSON))
    }
  );
};

export const fetchComment = (id) => (dispatch) => {
  return CommentAPIUtil.fetchComment(id).then((comment) => {
    dispatch(receiveComment(comment))
  },
    (errors) => {
      dispatch(receiveErrors(errors.responseJSON))
    }
  );
};

export const createComment = (comment) => (dispatch) => {
  return CommentAPIUtil.createComment(comment).then((comment) => {
    return dispatch(receiveComment(comment))
  },
    (errors) => {
      dispatch(receiveErrors(errors.responseJSON))
    }
  );
};

export const updateComment = (comment) => (dispatch) => {
  return CommentAPIUtil.updateComment(comment).then((comment) => {
    dispatch(receiveComment(comment))
  },
    (errors) => {
      dispatch(receiveErrors(errors.responseJSON))
    }
  );
};

export const deleteComment = (id) => (dispatch) => {
  return CommentAPIUtil.deleteComment(id).then((comment) => {
    dispatch(removeComment(comment))
  },
    (errors) => {
      dispatch(receiveErrors(errors.responseJSON))
    }
  );
}