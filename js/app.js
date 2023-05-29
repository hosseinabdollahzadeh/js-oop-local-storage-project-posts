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

    showAlert(message, className) {

        // Create div
        const div = document.createElement('div');

        // Add classes
        div.className = `alert alert-${className}`;

        // Add text
        div.appendChild(document.createTextNode(message));

        // Get parent
        const col = document.querySelector('.col-sm-8');

        // Get form
        const form = document.querySelector('#post-form');

        // Insert alert
        col.insertBefore(div, form);

        // Timeout after 3 seconds
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('body').value = '';
    }

    deletePost(target) {
        target.parentElement.parentElement.remove();
    }
}

// Event listener for add post
document.getElementById('post-form').addEventListener('submit', function (e) {

    // Get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const body = document.getElementById('body').value;

    // Instantiate UI
    const ui = new UI();

    // Validate
    if (title === '' || author === '' || body === '') {
        // Error alert
        ui.showAlert('تمام فیلدها الزامی هستند', 'danger');
    } else {
        // Instantiate Post
        const post = new Post(title, author, body);

        // Add post to list
        ui.addPostToList(post);

        ui.showAlert('پست اضافه شد', 'success');

        // Clear fields
        ui.clearFields();
    }

    e.preventDefault();
});

// Event listener for delete
document.getElementById('post-list').addEventListener('click', function (e) {

    // Instantiate UI
    const ui = new UI();

    if (e.target.classList.contains('delete')) {

        // Delete post
        ui.deletePost(e.target);

        // Show message
        ui.showAlert('پست حذف شد', 'success');
    }
    e.preventDefault();
});