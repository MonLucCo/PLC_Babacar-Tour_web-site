# 📘 Frontend Angular – Babacar Tour

## 🎯 Objectif

Ce dossier contient l’application frontend du site vitrine Babacar Tour, développée avec Angular 19. Il constitue le socle visuel, typographique et structurel du projet.

---

## 📦 Setup du projet

### Partie 1 — Initialisation Angular

- Création via Angular CLI :

  ```bash
  ng new bt-ng --style=scss --routing --no-standalone
  ```

- Version installée : `Angular 19.2.15`
- Dossier racine : `works/frontend/bt-ng`
- Serveur local activé :

  ```bash
  cd bt-ng
  ng serve
  ```

---

### Partie 2 — Intégration de Bootstrap 5

- Installation via npm :

  ```bash
  npm install bootstrap@5.3.7
  ```

- Chemin CSS intégré dans `angular.json` :

  ```json
  "styles": [
    "src/styles.scss",
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
  ]
  ```

- Test visuel : affichage des composants (`btn-primary`, `alert-success`) confirmé
- Ajout également dans la section `"test"` de `angular.json` pour future compatibilité

---

### Partie 3 — Intégration de Font Awesome

- Installation via npm :

  ```bash
  npm install @fortawesome/fontawesome-free
  ```

- Chemin CSS ajouté dans `angular.json` :

  ```json
  "node_modules/@fortawesome/fontawesome-free/css/all.min.css"
  ```

- Icônes disponibles : exemple affiché `<i class="fas fa-check-circle"></i>`
- Ajout dans les blocs `build` et `test` pour surcharge Sass future

---

### Partie 4 — Intégration des polices Google Fonts

- Polices choisies :
  - **Playfair Display** → titres
  - **Lato** → corps du texte
- Import centralisé dans `styles.scss` :

  ```scss
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Playfair+Display:wght@700&display=swap');

  body {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #333;
  }

  h1, h2, h3 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
  }
  ```

- Test typographique réalisé dans `app.component.html` avec rendu validé

---

## 📂 Organisation future

Le projet frontend sera enrichi avec :

- 🔜 [Issue #10] Intégration du template Stellar Angular
- 🔜 [Issue #11] Surcharge Sass (palette + variables)
- 📦 Dossier `assets/` → contenus image + fontes futures

---

## 🧪 Validation

Chaque partie (#9/1 → #9/4) a été :

- Testée visuellement
- Validée via `ng serve`
- Documentée dans les commits GitHub
- Rassemblée dans un Pull Request en brouillon pour suivi technique

---

## 📝 Auteur

Projet initié et maintenu par **MonLucCo/PerLucCo**  
Version en cours : `v0.1 – Site vitrine – fonctionnalité minimale`
