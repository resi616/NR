const editionButtons = document.querySelectorAll(".select-edition");
const stepEdition = document.querySelector(".step-edition");
const stepPlatform = document.querySelector(".step-platform");
const stepStore = document.querySelector(".step-store");

const selectedText = document.getElementById("selected-edition");
const selectedPlatformText = document.getElementById("selected-platform");

const step1Link = document.getElementById("step1");
const step2Link = document.getElementById("step2");

const storeContainer = document.getElementById("store-buttons");

let selectedEdition = "";
let selectedPlatform = "";

const storeLinks = {
  "Standard Edition": {
    PlayStation: {
      "PlayStation Store":
        "https://store.playstation.com/product/UP0700-PPSA25380_00-ERSL000000000000",
      GameStop:
        "https://www.gamestop.com/video-games/playstation-5/products/elden-ring-nightreign---playstation-5/422040.html",
      "Bandai Store":
        "https://store.bandainamcoent.com/elden-ring-nightreign-standard-edition/?utm_source=referral&utm_medium=msite&utm_id=er-nightreign-se",
    },
    Xbox: {
      "Microsoft Store":
        "https://www.xbox.com/en-US/games/store/elden-ring-nightreign/9PJ22QNVCZ3G",
      GameStop: "https://www.gamestop.com/standard-xbox",
    },
    Steam: {
      Steam:
        "https://store.steampowered.com/app/2622380/ELDEN_RING_NIGHTREIGN/?utm_source=bnea-corp-site&utm_medium=standard-edition&utm_campaign=gpp-ernr",
    },
  },
  "Deluxe Edition": {
    PlayStation: {
      "PlayStation Store": "https://store.playstation.com/deluxe",
      GameStop: "https://www.gamestop.com/deluxe-ps",
      "Bandai Store": "https://store.bandai-namco.com/deluxe-ps",
    },
    Xbox: {
      "Microsoft Store": "https://www.microsoft.com/deluxe-xbox",
      GameStop: "https://www.gamestop.com/deluxe-xbox",
    },
    Steam: {
      Steam:
        "https://store.steampowered.com/app/2622380/ELDEN_RING_NIGHTREIGN/?utm_source=bnea-corp-site&utm_medium=standard-edition&utm_campaign=gpp-ernr",
    },
  },
  "Collector's Edition": {
    PlayStation: {
      "PlayStation Store": "https://store.playstation.com/collectors",
      GameStop: "https://www.gamestop.com/collectors-ps",
      "Bandai Store": "https://store.bandai-namco.com/collectors-ps",
    },
    Xbox: {
      "Microsoft Store": "https://www.microsoft.com/collectors-xbox",
      GameStop: "https://www.gamestop.com/collectors-xbox",
    },
    Steam: {
      Steam:
        "https://store.steampowered.com/app/2622380/ELDEN_RING_NIGHTREIGN/?utm_source=bnea-corp-site&utm_medium=standard-edition&utm_campaign=gpp-ernr",
    },
  },
};

// Step link navigasi
step1Link.addEventListener("click", () => {
  stepEdition.style.display = "block";
  stepPlatform.style.display = "none";
  stepStore.style.display = "none";
  storeContainer.innerHTML = "";
});

step2Link.addEventListener("click", () => {
  stepEdition.style.display = "none";
  stepPlatform.style.display = "block";
  stepStore.style.display = "none";
  storeContainer.innerHTML = "";
});

// Pilih Edition → lanjut ke Platform
editionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedEdition = button.parentElement.getAttribute("data-edition");
    selectedText.innerHTML = `Selected: Elden Ring Nightreign <strong>${selectedEdition}</strong>`;
    stepEdition.style.display = "none";
    stepPlatform.style.display = "block";
  });
});

// Pilih Platform → lanjut ke Store
const platformButtons = document.querySelectorAll(".platform-container button");
platformButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const rawPlatform = button.innerText.trim();
    selectedPlatformText.innerHTML = `Selected Platform: <strong>${rawPlatform}</strong>`;

    // Normalisasi nama platform agar cocok dengan storeLinks
    if (rawPlatform.toLowerCase().includes("playstation")) {
      selectedPlatform = "PlayStation";
    } else if (rawPlatform.toLowerCase().includes("xbox")) {
      selectedPlatform = "Xbox";
    } else if (rawPlatform.toLowerCase().includes("steam")) {
      selectedPlatform = "Steam";
    }

    stepPlatform.style.display = "none";
    stepStore.style.display = "block";

    // Bersihkan dan buat ulang tombol store
    storeContainer.innerHTML = "";

    const stores = Object.keys(
      storeLinks[selectedEdition]?.[selectedPlatform] || {}
    );
    stores.forEach((storeName) => {
      const link = storeLinks[selectedEdition][selectedPlatform][storeName];
      const a = document.createElement("a");
      a.href = link;
      a.target = "_blank";
      a.innerText = storeName;
      a.classList.add("store-button");
      storeContainer.appendChild(a);
    });
  });
});

// trailer

const YOUTUBE_VIDEO_ID = "Ot6j_qqYQaM"; // Contoh ID video

const videoContainer = document.getElementById("videoContainer");
const playButton = document.getElementById("playButton");
const closeButton = document.getElementById("closeButton");
const youtubeEmbed = document.getElementById("youtubeEmbed");
const iframe = youtubeEmbed.querySelector("iframe");

// Function to play video
function playVideo() {
  // Set YouTube embed URL with autoplay
  iframe.src = `https://www.youtube.com/embed/Ot6j_qqYQaM?si=jhIgGZLU17hgGVrc`;

  // Show YouTube embed
  videoContainer.classList.add("playing");
}

// Function to close video
function closeVideo() {
  // Hide YouTube embed
  videoContainer.classList.remove("playing");

  // Stop video by removing src
  iframe.src = "https://www.youtube.com/embed/Ot6j_qqYQaM?si=jhIgGZLU17hgGVrc";
}

// Event listeners
playButton.addEventListener("click", playVideo);
videoCover.addEventListener("click", playVideo);
closeButton.addEventListener("click", closeVideo);

// Close on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && videoContainer.classList.contains("playing")) {
    closeVideo();
  }
});
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
  document.body.style.overflow = "auto";
}

// Close modal when clicking outside
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
    document.body.style.overflow = "auto";
  }
};

// Close modal with Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
      if (modal.style.display === "block") {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
  }
});

// Add hover sound effect (optional)
document.querySelectorAll(".video-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    // You can add sound effect here if needed
    this.style.transform = "translateY(-8px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});
