class Post {
    constructor(title, author, body) {
        this.title = title;
        this.author = author;
        this.body = body;
    }
}

class UI {

    addPostToList(post) {
        // Get list post
        const list = document.getElementById('post-list');

        // Create tr element
        const row = document.createElement('tr');

        // Insert cols
        row.innerHTML = `
        <th>${post.title}</th>
        <td>${post.author}</td>
        <td>${post.body}</td>
        <td><i class="fas fa-times text-danger delete"></i></td>
        `;

        list.appendChild(row);
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('body').value = '';
    }
}

// Event listener for add post
document.getElementById('post-form').addEventListener('submit', function (e) {

    // Get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const body = document.getElementById('body').value;

    // Instantiate Post
    const post = new Post(title, author, body);

    // Instantiate UI
    const ui = new UI();

    // Add post to list
    ui.addPostToList(post);

    // Clear fields
    ui.clearFields();

    e.preventDefault();
});