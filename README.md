# Pièce Retrouvée 3D — site vitrine

Site statique responsive en HTML, CSS et JavaScript, conçu pour être publié sur GitHub Pages.

## Fichiers
- `index.html` : page vitrine et formulaire de demande d'étude
- `styles.css` : styles responsives
- `script.js` : menu mobile, année automatique et préparation d'un e-mail
- `mentions-legales.html` : modèle à compléter
- `confidentialite.html` : modèle à adapter

## Avant publication — indispensable
1. Choisir et vérifier le nom commercial et le nom de domaine.
2. Dans `script.js`, remplacer `REMPLACER-PAR-VOTRE-EMAIL@exemple.fr` par l'adresse de contact réelle.
3. Compléter `mentions-legales.html` et `confidentialite.html` avec les informations réelles. Ne pas publier les pages légales avec les champs `[À COMPLÉTER]`.
4. Vérifier les promesses, les catégories acceptées, la capacité réelle de fabrication et les conditions d'expédition. Le texte présente un service à l'étude : il ne prétend pas qu'un catalogue existe déjà.
5. Tester le site sur téléphone et ordinateur, les liens, le formulaire, l'accessibilité et les informations légales.
6. Si vous ajoutez plus tard un formulaire avec téléversement de photos, analytics, cookies ou outils tiers, mettre à jour la politique de confidentialité et les paramètres de conformité avant mise en service.

## Fonctionnement du formulaire
Le formulaire utilise `mailto:` : il prépare un message dans l'application e-mail de l'utilisateur. Il ne stocke ni n'envoie les données à un serveur et ne téléverse pas de photos. L'utilisateur peut ajouter les photos lui-même avant d'envoyer le message. Ce mécanisme dépend de la configuration e-mail de l'appareil et n'est pas un formulaire de contact garanti. Pour recevoir des demandes de façon fiable, prévoir ultérieurement un backend ou un service de formulaire adapté, avec information de confidentialité.

## Publication avec GitHub Pages
1. Créez un dépôt GitHub, par exemple `piece-retrouvee-3d`.
2. Ajoutez les fichiers de ce dossier à la racine du dépôt.
3. Dans **Settings → Pages**, sélectionnez la branche `main` et le dossier `/ (root)`, puis enregistrez.
4. Attendez la publication et ouvrez l'URL fournie par GitHub Pages.
5. Si vous utilisez un domaine personnalisé, configurez les DNS selon les instructions de GitHub.

## À savoir
- Les images de la pièce centrale sont des illustrations SVG intégrées. Aucun stock photo externe n'est requis pour les visuels principaux.
- Les polices Google sont chargées depuis Google Fonts ; si vous préférez un site sans requêtes tierces, retirez l'import et utilisez les polices système.
- Le nom « Pièce Retrouvée 3D » est une proposition de marque : vérifiez sa disponibilité et les droits avant de l'utiliser commercialement.
- Faites vérifier les aspects juridiques, fiscaux, produits et sécurité applicables à l'activité réelle.
