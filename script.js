let likes = document.getElementsByClassName('like');
let likeClick = 0;
for( let like of likes ){
    // console.log(like)
    like.addEventListener('click', function(e){
        likeClick++ ;
        document.getElementById('like_counter').innerText = likeClick;
    })
}
