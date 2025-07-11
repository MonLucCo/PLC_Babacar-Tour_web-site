# 🌍 Babacar Tour – Dépôt principal du projet

Ce dépôt regroupe **l’ensemble du projet**, organisé par sous-projets (frontend, backend...), ressources techniques et livraisons successives qui permettent la mise en oeuvre et l'exploitation opérationnelle du site web destiné à valoriser l'activité de **Babacar**.

---

- [🌍 Babacar Tour – Dépôt principal du projet](#-babacar-tour--dépôt-principal-du-projet)
  - [🧭 Présentation et objectifs du projet Babacar Tour](#-présentation-et-objectifs-du-projet-babacar-tour)
  - [🧱 Arborescence du dépôt](#-arborescence-du-dépôt)
  - [📦 Suivi des versions et livraisons](#-suivi-des-versions-et-livraisons)
  - [🧰 Technologies utilisées](#-technologies-utilisées)
  - [🎨 Crédit du template](#-crédit-du-template)
  - [🗂️ Gestion du dépôt](#️-gestion-du-dépôt)
  - [👨‍💻 Responsable projet](#-responsable-projet)
  - [🤝 Participer au projet](#-participer-au-projet)
  - [📄 Licence](#-licence)
  - [📌 Liens utiles](#-liens-utiles)

---

## 🧭 Présentation et objectifs du projet Babacar Tour

**Babacar Tour** est un site vitrine touristique conçu pour accompagner le développement de l’activité de **Babacar**, chauffeur-guide indépendant au Sénégal. Il propose des excursions personnalisées, des circuits culturels et des transferts pour les voyageurs en quête d’authenticité.

L’objectif du projet est de concevoir et mettre en service une plateforme web qui réponde aux besoins suivants :

- Renforcer la **visibilité en ligne** de Babacar en complément de sa présence sur les réseaux sociaux
- Mettre en valeur ses **prestations** : excursions, photos, témoignages, itinéraires
- Faciliter la **prise de contact** : formulaire, WhatsApp, interaction directe
- Offrir une **interface mobile-first** accessible aux clients européens et sénégalais
- Déployer une **architecture technique évolutive**, capable d’intégrer des fonctionnalités futures (commentaires, back-office, multilingue)
- Livrer la solution sur l’hébergeur **Alwaysdata**, selon une démarche **agile orientée release**.

---

## 🧱 Arborescence du dépôt

```bash
babacar-tour/
├── docs/         # Cahiers des charges, schémas, ressources visuelles
├── works/        # Sous-projets techniques (frontend, backend, etc.)
│   ├── frontend/         # Application Angular du site vitrine
│   ├── backend/          # (optionnel) API REST pour admin, commentaires, etc.
│   ├── assets/           # Logos, icônes, bannières, images partagées
│   └── scratchpad/       # 📂 Zone hors-Git pour tests, brouillons, explorations
├── releases/     # Livraisons successives du projet (v0.1 → v2.0)
├── .gitignore
├── LICENCE.txt
├── README.md
```

| Dossier | Lien | Description |
|--------|------|-------------|
| `/docs/` | [📁 docs](docs/) | Cahiers des charges, schémas, ressources visuelles |
| `/works/` | [📁 works](works/) | Sous-projets techniques : frontend, backend, assets |
| `/releases/` | [📁 releases](releases/) | Livraisons successives du projet |
| `/LICENSE.txt` | [📄 LICENCE](LICENSE.txt) | Texte juridique en français (MIT) |
| `/README.md` | – | Présentation principale du projet |

> ✅ Le dossier `scratchpad/` dans `works/` est exclu du suivi Git (`.gitignore`) : il permet d’expérimenter du code, des styles ou des outils sans les versionner.

---

## 📦 Suivi des versions et livraisons

Les livraisons sont planifiées en milestones agiles, avec tracking des issues et organisation par release :

| Version | Objectif | Dossier |
|---------|----------|---------|
| `v0.1`  | Setup initial, intégration du template | `releases/v0.1/` |
| `v1.0`  | Pages statiques, layout, routing | `releases/v1.0/` |
| `v1.1`  | Formulaire fonctionnel | `releases/v1.1/` |
| `v1.2`  | Contenus dynamiques simulés | `releases/v1.2/` |
| `v2.0`  | Back-office et base de données | `releases/v2.0/` |

---

## 🧰 Technologies utilisées

- Angular v19 + Sass
- Bootstrap 5 + Font Awesome
- Alwaysdata (hébergement + base de données)
- GitHub Issues + Milestones + Kanban
- Template Stellar Angular Free Admin Template

---

## 🎨 Crédit du template

Ce projet intègre le template **Stellar Angular Free Admin Template**, développé par [BootstrapDash](https://www.bootstrapdash.com/product/stellar-angular-free), distribué sous licence **MIT**.

Source du dépôt : [GitHub – BootstrapDash/stellar-angular-free-admin-template](https://github.com/BootstrapDash/stellar-angular-free-admin-template)

---

## 🗂️ Gestion du dépôt

| Élément | Description |
|--------|-------------|
| Branches Git | `main`, `MonLucCo/issueXX` |
| Labels GitHub | `PLC_setup`, `PLC_typography`, `PLC_frontend`, etc. |
| Kanban GitHub Project | Organisation agile par colonne et version |
| Linked Issues | Suivi précis par phase fonctionnelle |

---

## 👨‍💻 Responsable projet

**PERARD (MonLucCo/PerLucCo)** – Chef de projet, développeur, designer  
📍 itinérant, France

---

## 🤝 Participer au projet

Ce dépôt est actuellement maintenu en solo pour le projet client.  
Les contributions externes ne sont **pas ouvertes pour le moment**, mais pourront être envisagées dans une version ultérieure.

Si vous souhaitez suggérer une amélioration ou poser une question, vous pouvez créer une `Issue` ou contacter le responsable du projet.

---

## 📄 Licence

Le template technique utilisé pour ce projet est soumis à la licence **MIT**.
Vous pouvez consulter le texte complet (en français) de la licence dans le fichier [`LICENSE`](LICENSE) situé à la racine du dépôt.

Accès à la version anglaise du texte de la licence [`LICENCE_EN`](./docs/LICENCE_EN.txt).

---

## 📌 Liens utiles

- [Page Facebook Babacar Guide](https://www.facebook.com/babacarguideausenegal)
- [GitHub Project Kanban](https://github.com/MonLucCo/PLC_Babacar-Tour_web-site/projects)
- [Cahier des charges – version .docx](docs/CdC-Projet_SiteWeb-Babacar-Tour.docx)
