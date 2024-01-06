/*
    [실습과제 1/5]
    https://jsonplaceholder.typicode.com/posts 게시물
    https://jsonplaceholder.typicode.com/comments 댓글
    https://jsonplaceholder.typicode.com/users 작성자
    1. "데이터가져오기" 버튼을 클릭하면 게시물데이터를 가져와 테이블에 표시한다.
       (번호, 작성자명, 제목, 댓글보기버튼)
    2. "댓글보기" 버튼을 클릭하면 클릭된 게시물의 댓글데이터를 가져와 게시물 하단에 표시한다.
*/

let dataLoaded = false;
let loadedCommentArr = [];

$(function () {
    $("#getdata").on("click", () => {
      if (!dataLoaded) {
        dataLoaded = true;
        getUsers();
      }
    });
});

const getUsers = function() {
  $.get("https://jsonplaceholder.typicode.com/users")
    .done(users => setUsersMap(users))
    .fail(() => console.log('getUsers fail!'))
};

const setUsersMap = function(users) {
  const usersMap = new Map();
  users.map(user => usersMap.set(user.id, user.name));
  getPosts(usersMap);
};

const getPosts = function(usersMap) {
  $.get("https://jsonplaceholder.typicode.com/posts")
    .done(posts => mappingPosts(posts, usersMap))
    .fail(() => console.log('getPosts fail!'));
};

const mappingPosts = function(posts, usersMap) {
  posts.map(post => post.userId = usersMap.get(post.userId));
  showPosts(posts);
};

const showPosts = function (posts) {
  posts.forEach(post => {
    const strEle = `
      <tr>
        <td>${post.id}</td>
        <td>${post.userId}</td>
        <td>${post.title}</td>
        <td><input id='btn${post.id}' type='button' value='댓글보기' /></td>
      </tr>
      <tr id='comment${post.id}' style='display: none;'></tr>
    `;
    $("#tbl tbody").append(strEle);    
    $(`#btn${post.id}`).on('click', () => getComments(post.id));
  });
};

const getComments = function(postId) {
  if (loadedCommentArr.indexOf(postId) < 0) {
   $.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .done(comments => showComments(postId, comments))
      .fail(() => console.log('getComments fail!'));
  }
}

const showComments = function(postId, comments) {
  let strEle = '<td>';
  comments.forEach(comment => {
    strEle += `
      <ul style='list-style-type: none;'>
        <li>${comment.id}&nbsp;${comment.name}&nbsp;${comment.email}</li>
        <li>${comment.body}</li>
      </ul>
    `;
  });
  strEle += '</td>';
  $(`#comment${postId}`).append(strEle).css('display', 'block');
    loadedCommentArr.push(postId);
}
