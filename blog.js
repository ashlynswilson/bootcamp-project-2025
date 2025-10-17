// Sample blog data
var blogs = [
    {
        image: "malaga.jpg",
        imageAlt: "View of Malaga, Spain",
        title: "My Study Abroad Experience",
        content: "During my time studying in Malaga, Spain, I discovered a whole new perspective on software development. From collaborating with international teams to learning about European tech practices, every day brought new insights. The Spanish approach to work-life balance and team dynamics has completely changed how I think about project management.",
        slug: "study-abroad-experience",
        datePosted: "October 15, 2025",
    },
    {
        image: "malaga.jpg",
        imageAlt: "Sample blog image",
        title: "Learning Web Development",
        content: "My journey into web development has been transformative. Starting with HTML and CSS fundamentals, progressing to JavaScript, and now diving into TypeScript and React, each step has brought new challenges and rewards. The most valuable lesson? Understanding that great websites are built with both technical skill and user empathy.",
        slug: "learning-web-development",
        datePosted: "October 16, 2025",
    },
    {
        image: "malaga.jpg",
        imageAlt: "Hack4Impact team meeting",
        title: "My Experience with Hack4Impact",
        content: "Joining Hack4Impact has been one of the most rewarding decisions of my college career. Working on real projects that make a difference while learning from talented peers has shown me how technology can create positive social impact. From client meetings to coding sessions, every experience has been invaluable.",
        slug: "hack4impact-experience",
        datePosted: "October 14, 2025",
    },
];
function displayBlogs() {
    // Get the blog container
    var blogContainer = document.getElementById("blog-container");
    if (!blogContainer)
        return;
    // Clear any existing content
    blogContainer.innerHTML = "";
    // Iterate over each blog in the blogs array
    blogs.forEach(function (blog) {
        // Step 1: Create a new div element for the blog post container
        var blogPostDiv = document.createElement("div");
        blogPostDiv.className = "blog-post";
        // Create a link wrapper for the entire blog post
        var blogLink = document.createElement("a");
        blogLink.href = "/bootcamp-project-2025/blogs/".concat(blog.slug, ".html");
        blogLink.className = "blog-link";
        // Step 2: Create child elements
        // Create and set up the image
        var image = document.createElement("img");
        image.src = blog.image;
        image.alt = blog.imageAlt;
        image.className = "blog-image";
        // Create title using h1
        var title = document.createElement("h1");
        title.textContent = blog.title;
        title.className = "blog-title";
        // Create date element
        var date = document.createElement("p");
        date.textContent = blog.datePosted;
        date.className = "blog-date";
        // Create description paragraph
        var description = document.createElement("p");
        description.textContent = blog.content;
        description.className = "blog-content";
        // Step 3: Append all elements to the link wrapper
        blogLink.appendChild(image);
        blogLink.appendChild(title);
        blogLink.appendChild(date);
        blogLink.appendChild(description);
        // Append the link wrapper to the blog post div
        blogPostDiv.appendChild(blogLink);
        // Step 4: Append the complete div to the main blog container
        blogContainer.appendChild(blogPostDiv);
    });
}
// Call the function when the page loads
window.addEventListener("DOMContentLoaded", displayBlogs);
