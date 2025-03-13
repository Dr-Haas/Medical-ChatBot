Voici un **README.md** sans aucune clé OpenAI réelle (uniquement des variables et placeholders), afin d’éviter tout blocage par GitHub pour présence de secrets :

---

# Medical-ChatBot

> **Un mini-projet React pour améliorer des lettres d’adressage médicales avec l’API OpenAI (ChatGPT).**

## Sommaire

- [Aperçu du projet](#aperçu-du-projet)
- [Fonctionnalités](#fonctionnalités)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [Structure du projet](#structure-du-projet)
- [Améliorations possibles](#améliorations-possibles)
- [Contribuer](#contribuer)
- [Licence](#licence)

---

## Aperçu du projet

Medical-ChatBot est une application qui permet à un professionnel de santé (ou à toute personne) de copier-coller une lettre d’adressage médicale et de la faire améliorer par ChatGPT, au niveau de l’orthographe et du style, tout en préservant le contenu médical.

L’application est développée avec **React** et utilise l’**API OpenAI** (modèles GPT-3.5-turbo, GPT-4, etc.) pour traiter les requêtes et générer le texte amélioré.

---

## Fonctionnalités

- **Saisie de la lettre** à améliorer via un champ `<textarea>`.
- **Envoi de la requête** à l’API OpenAI pour une reformulation / correction.
- **Affichage** de la lettre améliorée.
- **Gestion des erreurs** : (clé manquante, quota dépassé, etc.).

---

## Prérequis

1. **Node.js** (version 14 ou supérieure recommandée)
2. **NPM** ou **Yarn** (pour gérer les dépendances)
3. **Compte OpenAI** actif avec une clé d’API et un quota disponible

---

## Installation

1. **Cloner** ce dépôt :

   ```bash
   git clone git@github.com:Dr-Haas/Medical-ChatBot.git
   cd Medical-ChatBot
   ```

2. **Installer** les dépendances :

   ```bash
   npm install
   ```
   ou
   ```bash
   yarn
   ```

---

## Configuration

1. **Créer** un fichier `.env.local` (ou `.env`) à la racine du projet.
2. **Ajouter** votre clé OpenAI dans ce fichier :

   ```plaintext
   VITE_OPENAI_API_KEY=sk-__VOTRE_CLE_ICI__
   ```

   Remplacez `sk-__VOTRE_CLE_ICI__` par votre clé OpenAI réelle (ne la committez pas publiquement).

3. (Optionnel) Si vous utilisez un ID d’organisation OpenAI, vous pouvez l’ajouter, mais la plupart du temps, ce n’est pas nécessaire.

**Important** : Pour un simple prototype, cette méthode suffit, mais la clé reste visible dans le code compilé. Pour un usage en production, préférez un backend pour protéger la clé.

---

## Utilisation

1. **Lancer** le serveur de développement :

   ```bash
   npm run dev
   ```
   ou
   ```bash
   yarn dev
   ```

2. Ouvrez votre navigateur à l’adresse indiquée (généralement [http://localhost:5173](http://localhost:5173)).
3. **Collez** votre texte ou lettre médicale dans la zone prévue.
4. **Cliquez** sur « Améliorer » pour envoyer la requête à l’API.
5. **Consultez** le texte amélioré qui s’affiche dans la zone de résultat.

---

## Structure du projet

```
Medical-ChatBot/
├─ public/
├─ src/
│  ├─ components/
│  │  └─ ChatGPTForm.jsx   # Composant principal (formulaire + appel API)
│  ├─ App.jsx              # Composant racine
│  ├─ main.jsx             # Point d'entrée (Vite)
│  └─ ...
├─ .env.local              # Contient VITE_OPENAI_API_KEY (ignoré par Git)
├─ package.json
├─ README.md
└─ ...
```

- **`ChatGPTForm.jsx`** : gère le formulaire, les appels à l’API OpenAI et l’affichage des résultats.
- **`.env.local`** : stocke la clé d’API OpenAI (placeholder conseillé : `sk-__VOTRE_CLE_ICI__`).

---

## Améliorations possibles

- **Style personnalisé** : ajouter des options pour un style plus formel, plus concis, etc.
- **Comparaison** : afficher côte à côte la lettre originale et la lettre améliorée.
- **Sécurisation** : introduire un vrai backend pour éviter d’exposer la clé en clair côté front.
- **Support GPT-4** : si la clé a accès à GPT-4, modifier la requête pour en profiter.

---

## Contribuer

Les contributions sont les bienvenues ! Pour contribuer :

1. **Fork** le projet.
2. **Crée** une branche pour ta fonctionnalité (`git checkout -b feature/ma-feature`).
3. **Commit** tes modifications (`git commit -m 'Add ma-feature'`).
4. **Push** ta branche (`git push origin feature/ma-feature`).
5. **Ouvre** une Pull Request vers le dépôt principal.

---

## Licence

Ce projet est sous licence [MIT](LICENSE). Vous êtes libre de l’utiliser, de le modifier et de le redistribuer selon les termes de la licence.

---

**Remarque** : Ce README ne contient aucune clé OpenAI réelle. Veillez à ne jamais commiter vos véritables clés ou jetons confidentiels dans un dépôt public.