/*
Note below is same as:

export default function(store) {
  return function(next) {
    return function(action) {

    }
  }
}
*/

export default socket => store => next => action => {
  console.log('in middleware', action);
  if (action.meta && action.meta.remote) {
    socket.emit('action', action);
  }
  return next(action);
}