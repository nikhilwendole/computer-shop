<section style="height: 1500px; background: #f4f4f4;">
<h1 style="padding: 20px;">Scroll down to see sticky navbar in action</h1>
</section>



const container = document.querySelector('.product-container');
const cards = document.querySelectorAll('.product-card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    container.classList.add('hover-active');
  });

  card.addEventListener('mouseleave', () => {
    container.classList.remove('hover-active');
  });
});


  function openModal(id) {
    document.getElementById(id).style.display = 'block';
  }

  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
  }

  window.onclick = function (event) {
    document.querySelectorAll(".modal").forEach(modal => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  };


  function openModal(id) {
    document.getElementById(id).style.display = 'block';
  }
  
  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
  }
  
  window.onclick = function(event) {
    document.querySelectorAll(".modal").forEach(modal => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  };

  function openModal(id) {
    document.getElementById(id).style.display = "block";
  }
  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }
  window.onclick = function(event) {
    document.querySelectorAll('.modal').forEach(modal => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  };

  const laptops = [
    {
      name: "HP EliteBook 840",
      price: "₹28,999",
      specs: "Intel Core i5, 8GB RAM, 256GB SSD, 14\" Display"
    },
    {
      name: "Dell Latitude 7490",
      price: "₹31,499",
      specs: "Intel Core i5, 8GB RAM, 512GB SSD, 14\" Display"
    },
    {
      name: "Lenovo ThinkPad X1",
      price: "₹34,999",
      specs: "Intel Core i7, 16GB RAM, 512GB SSD, 14\" FHD Display"
    },
    // Add more up to 20 cards like above
  ];
  
  
  
  function showModal(laptop) {
    document.getElementById("modalTitle").innerText = laptop.name;
    document.getElementById("modalPrice").innerText = laptop.price;
    document.getElementById("modalSpecs").innerText = laptop.specs;
    document.getElementById("productModal").style.display = "block";
  }
  
  document.getElementById("closeModal").onclick = function () {
    document.getElementById("productModal").style.display = "none";
  };
  
  window.onclick = function (event) {
    if (event.target === document.getElementById("productModal")) {
      document.getElementById("productModal").style.display = "none";
    }
  };

  
  function openModal(id) {
    document.getElementById(id).style.display = 'block';
  }

  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
  }

  window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  };

  function openModal(id) {
    document.getElementById(id).style.display = 'flex';
  }

  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
  }

  // Close modal when clicking outside content
  window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }


  // Open modal by ID
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.style.display = 'block';
    }
  }
  
  // Close modal
  function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.style.display = 'none';
    }
  }
  
  // Close modal when clicking outside the content
  window.onclick = function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  };
// Open Modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "block";
    }
  }
  
  // Close all modals
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "none";
    }
  }
  
  // Close when clicking outside the modal content
  window.addEventListener("click", function (event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });

  
  function openModal(id) {
    const modal = document.getElementById("laptopModal");
    modal.style.display = "flex";
  
    // Optional: Custom content logic
    document.getElementById("modalTitle").innerText = id;
    document.getElementById("modalPrice").innerText = "₹ Price goes here";
    document.getElementById("modalDesc").innerText =
      "This is a high-performance refurbished laptop with full warranty and tested quality.";
  }
  
  function closeModal() {
    document.getElementById("laptopModal").style.display = "none";
  }

  

  
  function openModal(name, price) {
    document.getElementById("modalTitle").innerText = name;
    document.getElementById("modalPrice").innerText = price;
    document.getElementById("modal").style.display = "flex";
  }

  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }



  
  const cardTrack = document.getElementById("cardTrack");
  laptops.concat(laptops).forEach(laptop => {
    const card = document.createElement("div");
    card.className = "laptop-card";
    card.onclick = () => openModal(laptop.name, laptop.price);
    card.innerHTML = `
      <img src="assets/1.jpg" alt="Laptop">
      <h3>${laptop.name}</h3>
      <p>${laptop.price}</p>
    `;
    cardTrack.appendChild(card);
  });
  
  function openModal(name, price) {
    document.getElementById("modalTitle").innerText = name;
    document.getElementById("modalPrice").innerText = price;
    document.getElementById("modal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  

  const hpLaptops = [
    { name: "HP EliteBook 840", price: "₹29,999" },
    { name: "HP ProBook 440", price: "₹28,499" },
    { name: "HP Spectre x360", price: "₹42,999" },
    { name: "HP Pavilion 15", price: "₹33,499" },
    { name: "HP Envy 13", price: "₹39,999" },
    { name: "HP ZBook", price: "₹45,499" },
    { name: "HP Chromebook", price: "₹24,999" },
    { name: "HP Omen", price: "₹48,999" },
    { name: "HP Stream", price: "₹19,999" },
    { name: "HP Elite x2", price: "₹36,499" }
  ];
  
  const dellLaptops = [
    { name: "Dell XPS 13", price: "₹52,999" },
    { name: "Dell Inspiron 15", price: "₹34,499" },
    { name: "Dell Latitude 7490", price: "₹30,999" },
    { name: "Dell Vostro 3501", price: "₹29,999" },
    { name: "Dell G5 15", price: "₹46,999" },
    { name: "Dell Precision 5540", price: "₹59,499" },
    { name: "Dell Alienware m15", price: "₹68,999" },
    { name: "Dell Chromebook 11", price: "₹22,499" },
    { name: "Dell Studio 1558", price: "₹24,999" },
    { name: "Dell XPS 17", price: "₹64,999" }
  ];
  
  const lenovoLaptops = [
    { name: "Lenovo ThinkPad X1", price: "₹44,999" },
    { name: "Lenovo IdeaPad 3", price: "₹29,999" },
    { name: "Lenovo Yoga Slim 7", price: "₹48,499" },
    { name: "Lenovo Legion 5", price: "₹53,999" },
    { name: "Lenovo Flex 5", price: "₹37,999" },
    { name: "Lenovo Chromebook Duet", price: "₹21,999" },
    { name: "Lenovo V15", price: "₹27,999" },
    { name: "Lenovo ThinkBook 14", price: "₹31,999" },
    { name: "Lenovo Yoga 9i", price: "₹62,499" },
    { name: "Lenovo 100e", price: "₹18,999" }
  ];
  
  // Reuse function for rendering
  function renderCards(trackId, laptops) {
    const track = document.getElementById(trackId);
    laptops.concat(laptops).forEach(laptop => {
      const card = document.createElement("div");
      card.className = "laptop-card";
      card.onclick = () => openModal(laptop.name, laptop.price);
      card.innerHTML = `
        <img src="assets/1.jpg" alt="Laptop">
        <h3>${laptop.name}</h3>
        <p>${laptop.price}</p>
      `;
      track.appendChild(card);
    });
  }
  
  // Render all sections
  renderCards("hpTrack", hpLaptops);
  renderCards("dellTrack", dellLaptops);
  renderCards("lenovoTrack", lenovoLaptops);
  
  // Modal functions
  function openModal(name, price) {
    document.getElementById("modalTitle").innerText = name;
    document.getElementById("modalPrice").innerText = price;
    document.getElementById("modal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }

  
  function openModal(name, price) {
    document.getElementById("modalTitle").innerText = name;
    document.getElementById("modalPrice").innerText = price;
    document.getElementById("modal").style.display = "flex";
  }

  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }


  const laptopBrands = {
    hpTrack: [
      { name: "HP EliteBook 840", price: "₹29,999" },
      { name: "HP ProBook 440", price: "₹28,499" },
      { name: "HP Spectre x360", price: "₹42,999" },
      { name: "HP Pavilion 15", price: "₹33,499" },
      { name: "HP Envy 13", price: "₹39,999" },
      { name: "HP ZBook", price: "₹45,499" },
      { name: "HP Chromebook", price: "₹24,999" },
      { name: "HP Omen", price: "₹48,999" },
      { name: "HP Stream", price: "₹19,999" },
      { name: "HP Elite x2", price: "₹36,499" }
    ],
    dellTrack: [
      { name: "Dell XPS 13", price: "₹32,999" },
      { name: "Dell Inspiron 15", price: "₹30,499" },
      { name: "Dell Latitude 7410", price: "₹38,999" },
      { name: "Dell Vostro 3400", price: "₹27,999" },
      { name: "Dell G5 15", price: "₹44,499" },
      { name: "Dell Alienware m15", price: "₹54,999" },
      { name: "Dell Chromebook 11", price: "₹21,999" },
      { name: "Dell Precision 3550", price: "₹47,499" },
      { name: "Dell Inspiron 13", price: "₹35,999" },
      { name: "Dell Latitude 5520", price: "₹39,499" }
    ],
    lenovoTrack: [
      { name: "Lenovo ThinkPad X1", price: "₹33,499" },
      { name: "Lenovo IdeaPad Slim 3", price: "₹28,999" },
      { name: "Lenovo Yoga 7i", price: "₹41,999" },
      { name: "Lenovo Legion 5", price: "₹48,499" },
      { name: "Lenovo ThinkBook 14", price: "₹36,999" },
      { name: "Lenovo Flex 5", price: "₹30,499" },
      { name: "Lenovo Chromebook Duet", price: "₹23,999" },
      { name: "Lenovo V15", price: "₹25,499" },
      { name: "Lenovo IdeaPad Gaming 3", price: "₹43,499" },
      { name: "Lenovo ThinkPad E14", price: "₹37,999" }
    ]
  };

  for (const [trackId, laptops] of Object.entries(laptopBrands)) {
    const marquee = document.getElementById(trackId);
    const cardTrack = document.createElement("div");
    cardTrack.className = "card-track";

    laptops.concat(laptops).forEach(laptop => {
      const card = document.createElement("div");
      card.className = "laptop-card";
      card.onclick = () => openModal(laptop.name, laptop.price);
      card.innerHTML = `
        <img src="assets/1.jpg" alt="Laptop">
        <h3>${laptop.name}</h3>
        <p>${laptop.price}</p>
      `;
      cardTrack.appendChild(card);
    });

    marquee.appendChild(cardTrack);
  }

  function openModal(name, price) {
    document.getElementById("modalTitle").innerText = name;
    document.getElementById("modalPrice").innerText = price;
    document.getElementById("modal").style.display = "flex";
  }

  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }


  