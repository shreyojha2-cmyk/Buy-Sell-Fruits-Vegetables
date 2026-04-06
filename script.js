const btn = document.getElementById("btn");
const count = document.getElementById("count");
btn.addEventListener("click", function() {
    if (count.classList.contains("hidden")) {
        count.classList.remove("hidden");
        btn.textContent = "Hide";
    } else {
        count.classList.add("hidden");
        btn.textContent = "Show";
    }
});

function searchItem() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let items = document.querySelectorAll("#list li");

  items.forEach(function(item) {
    let text = item.textContent.toLowerCase();
    if (text.includes(input)) {
      item.style.display = "list-item";
    } else {
      item.style.display = "none";
    }
  })
};

