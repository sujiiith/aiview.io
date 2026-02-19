const listings = [
  {
    id: 1,
    title: "Modern Family Home",
    price: 799000,
    address: "123 Main St",
    city: "Hamilton",
    beds: 3,
    baths: 2,
    area: 1800,
    image: "images/house-1.jpg",
  },
  {
    id: 2,
    title: "Downtown Condo with View",
    price: 629000,
    address: "45 King St E",
    city: "Hamilton",
    beds: 2,
    baths: 2,
    area: 950,
    image: "images/condo-1.jpg",
  },
];

function renderListings() {
  const container = document.querySelector(".listing-grid");
  if (!container) return;

  container.innerHTML = "";

  listings.forEach((p) => {
    const card = document.createElement("article");
    card.className = "listing-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.title}">
      <div class="listing-info">
        <h3>${p.title}</h3>
        <p class="price">$${p.price.toLocaleString()}</p>
        <p class="location">${p.address}, ${p.city}</p>
        <p class="location">${p.beds} bd · ${p.baths} ba · ${p.area} ft²</p>
        <a href="#" class="btn-outline">View details</a>
      </div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderListings);
