import {
  HTTP
} from '../utils/http.js';

class LikeModel extends HTTP {
  like(likeOrCancel, artId, type) {
    console.log('like request success');
  }
}

export {
  LikeModel,
};
