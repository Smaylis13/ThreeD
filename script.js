(() => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation");
  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }));
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // IMPORTANT: replace this address before publishing.
  const CONTACT_EMAIL = "liam.sy.pro@gmail.com";
  const form = document.getElementById("request-form");
  const status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      if (CONTACT_EMAIL.includes("REMPLACER-PAR-VOTRE-EMAIL")) {
        status.textContent = "Le site n'est pas encore configuré : remplacez l'adresse e-mail dans script.js avant de publier le formulaire.";
        status.classList.add("is-error");
        return;
      }

      const data = new FormData(form);
      const subject = `Demande d'étude de pièce — ${data.get("category")}`;
      const body = [
        `Nom : ${data.get("name")}`,
        `E-mail : ${data.get("email")}`,
        `Équipement : ${data.get("category")}`,
        "",
        "Description de la pièce :",
        data.get("details"),
        "",
        `Lien vers des photos (si fourni) : ${data.get("photos") || "Non fourni"}`,
        "",
        "Envoyé depuis le site Pièce Retrouvée 3D."
      ].join("\n");

      const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      status.textContent = "Votre application e-mail va s'ouvrir avec le message préparé. Ajoutez vos photos en pièce jointe avant l'envoi.";
      window.location.href = mailto;
    });
  }
})();
