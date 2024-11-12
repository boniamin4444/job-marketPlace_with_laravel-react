document.getElementById('generalPostBtn').onclick = function() {
    document.querySelectorAll('.post').forEach(post => {
        if (post.classList.contains('general-post')) {
            post.classList.remove('d-none');
        } else {
            post.classList.add('d-none');
        }
    });
};

document.getElementById('marketPostBtn').onclick = function() {
    document.querySelectorAll('.post').forEach(post => {
        if (post.classList.contains('market-post')) {
            post.classList.remove('d-none');
        } else {
            post.classList.add('d-none');
        }
    });
};

document.getElementById('postForm').onsubmit = function(e) {
    e.preventDefault();
    const title = document.getElementById('postTitle').value;
    const description = document.getElementById('postDescription').value;

    // Example of how to create a new general post
    const newPost = document.createElement('div');
    newPost.className = 'post general-post';
    newPost.innerHTML = `
        <h5>${title}</h5>
        <p>${description}</p>
        <div class="post-actions">
            <button class="btn btn-success">Like</button>
            <button class="btn btn-info">Message</button>
            <button class="btn btn-warning">Call</button>
        </div>
        <div class="emoji-reactions">
            <span>👍</span>
            <span>❤️</span>
            <span>😂</span>
        </div>
    `;
    document.getElementById('postContainer').appendChild(newPost);

    // Clear the form
    document.getElementById('postForm').reset();
};
