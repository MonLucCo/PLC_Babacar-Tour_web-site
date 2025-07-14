# 🧩 Prototype layout — template Stellar Angular Free (issue #10)

Ce dossier `template-bt-ng` contient une **version nettoyée et adaptée** du template [Stellar Angular Free Admin Template](https://github.com/BootstrapDash/stellar-angular-free-admin-template), destiné à l’intégration progressive dans le projet `bt-ng`.

---

## 📍 Objectif du dossier

- Servir de **testbed** pour les composants visuels et le layout Angular
- Faciliter l’extraction ciblée du design Stellar sans polluer le projet principal
- Permettre une documentation claire et reproductible de l’intégration (issue #10)

---

## 📦 Structure du prototype

| Dossier | Rôle |
|--------|------|
| `layout/` | Structure visuelle globale (`app.component.html`, `navbar`, `footer`) |
| `components/` | Composants visuels extraits (`card`, `section`, etc.) |
| `styles/` | Surcharge Sass (`styles.scss`, `variables.scss`) |
| `assets/` | Images et icônes importées depuis Stellar |
| `README_template.md` | Documentation du processus d’extraction |

---

## 🔁 Source du template

- Template original : **Stellar Angular Free Admin Template**
- URL : [https://github.com/BootstrapDash/stellar-angular-free-admin-template](https://github.com/BootstrapDash/stellar-angular-free-admin-template)
- Licence : MIT
- Méthode d’import :

```bash
  git clone https://github.com/BootstrapDash/stellar-angular-free-admin-template.git
```
