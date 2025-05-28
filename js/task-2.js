`use strict`;
const images = [
  {
    url: "./images/project.jpg",
    alt: "Command project",
  },
  {
    url: "./images/idea.jpg",
    alt: "Idea",
  },
  {
    url: "./images/smartphone.jpg",
    alt: "Phone with notifications",
  },
  {
    url: "./images/conference.jpg",
    alt: "Conference room",
  },
  {
    url: "./images/lounge.jpg",
    alt: "Chilling room",
  },
  {
    url: "./images/workflow.jpg",
    alt: "Wolf of Wall Street",
  }
];

const gallery = document.querySelector(".gallery");
const listItems = images.map(
  ({ url, alt }) => {
    return `
    <li class="list-item">
      <img src="${url}" alt="${alt}" class="images" />
    </li>`
  })
  .join("");
console.log(gallery);
gallery.insertAdjacentHTML("beforeend", listItems);
// gallery.innerHTML = `${listItems}`;

// const gallery = document.querySelector(".gallery");
// const listItems = images.map(item => {
//   const li = document.createElement("li");
//   const img = document.createElement("img");
//   li.classList.add("list-item");
//   img.classList.add("images");
//   img.src = item.url;
//   img.alt = item.alt;
//   li.appendChild(img);
//   return li;
// })
// gallery.append(...listItems);

