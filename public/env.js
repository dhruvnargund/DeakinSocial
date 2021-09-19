const mainWrapper = document.getElementById(`mainWrapper`);
const loading = document.getElementsByClassName(`loader`);
const url = "https://jsonplaceholder.typicode.com/photos"

let limit = 10;
let page = 1;

async function getPosts() {

    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit${limit}&_page=${page}`);

    const data = await response.json();
    return data;
}


async function showPosts() {
    const posts = await getPosts();
    posts.forEach(posts => {
        const postElement = document.createElement(`div`);
        postElement.classList.add(`post`);
        postElement.innerHTML = `<div class="imgPost">
        <img src="${posts.thumbnailUrl}" class="card-img-top" alt="post">
    </div>
    <div class="card-body postInfo">
        <p class="card-text postBody">${posts.title}</p>
        <h5 class="card-title postTag">#tags</h5>
        <a href="#" class="link-secondary postUsername">@username</a>
        <p class="text-end mb-0 pb-0 link-secondary postDate">date here</p>
    </div>`

        mainWrapper.appendChild(postElement);
    });
}


// Tried to add Animation didn't work as expected :'(
// function showLoading() {
//     loading.classList.add('show');

//     setTimeout(() => {
//         loading.classList.remove('show');
//         setTimeout(() => {
//             page++;
//             showPosts();
//         }, 3000)
//     }, 1000);
// }

showPosts();

window.addEventListener('scroll', () => {

    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        page++;
        showPosts();

    }
});