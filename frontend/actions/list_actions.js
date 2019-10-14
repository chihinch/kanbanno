import * as ListAPIUtil from '../util/list_api_util';

// List action type constants
export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const RECEIVE_LIST_ERRORS = 'RECEIVE_LIST_ERRORS';
export const CLEAR_LIST_ERRORS = 'CLEAR_LIST_ERRORS';

// List action creators
export const receiveLists = (lists) => {
  return {
    type: RECEIVE_LISTS,
    lists,
  };
};

export const receiveList = ({ list }) => {
  return {
    type: RECEIVE_LIST,
    list,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_LIST_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_LIST_ERRORS
  }
}

// List thunk action creators
export const fetchLists = () => (dispatch) => {
  return ListAPIUtil.fetchLists().then((lists) => {
    dispatch(receiveLists(lists))}, 
    (errors) => {
      dispatch(receiveErrors(errors.responseJSON))
    }
  );
};

export const fetchList = (id) => (dispatch) => {
  return ListAPIUtil.fetchList(id).then((list) => {
    dispatch(receiveList(list))
  },
    (errors) => {
      dispatch(receiveErrors(errors.responseJSON))
    }
  );
};

export const createList = (list) => (dispatch) => {
  return ListAPIUtil.createList(list).then((list) => {
    dispatch(receiveList(list))
  },
    (errors) => {
      dispatch(receiveErrors(errors.responseJSON))
    }
  );
};