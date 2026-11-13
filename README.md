# Défi Todo-list avec React

## < Test Frontend >

## De quoi s'agit-il ?

---

Ce test a pour but d'évaluer votre capacité à créer une petite application monopage (SPA) fonctionnelle dans un temps limité. Vous trouverez ci-dessous les fonctionnalités, les exigences et les points clés à garder en tête pendant le développement.

## Fonctionnalités à réaliser

- **Créer une tâche** : En tant qu'utilisateur, je veux créer une nouvelle tâche avec un `titre` une `description`, et une `image` et l'ajouter à l'application.
- **Lister les tâches** : En tant qu'utilisateur, je veux voir toutes mes tâches dans une liste.
- **Supprimer une tâche** : En tant qu'utilisateur, je veux supprimer une tâche de la liste lorsque je n'en ai plus besoin.
- **Modifier une tâche** : En tant qu'utilisateur, je veux pouvoir modifier une tâche existante.
- **Terminée** : En tant qu'utilisateur, je veux marquer ma tâche comme terminée.

---

## Où trouver le lien de l'API ?

Le lien de l'API se trouve dans le dossier **`data`**, dans le fichier **`api`** :

```
src/
├── data/
│   └── api.js        ← le lien de l'API est ici
├── components/
├── pages/
├── App.jsx
└── main.jsx
```

---

1. Installez axios : `npm install axios`.
2. Utilisez `useEffect` pour charger les tâches au démarrage, et `useState` pour les stocker.
3. Après chaque création, modification ou suppression, **rechargez la liste**.
4. Ouvrez la console du navigateur (F12) : les erreurs y apparaissent.

## Documentation de l'API

Tous les endpoints commencent par le lien défini dans `data/api.js`.

| Méthode | Endpoint           | Body | Paramètres             | Description                           |
| ------- | ------------------ | ---- | ---------------------- | ------------------------------------- |
| GET     | `/todo`            | -    | -                      | Récupérer toutes les tâches           |
| GET     | `/todo/:id`        | -    | `_id` (ID de la tâche) | Récupérer une seule tâche             |
| POST    | `/todo`            | oui  | -                      | Créer une tâche                       |
| PUT     | `/todo/:id`        | oui  | `_id` (ID de la tâche) | Modifier une tâche                    |
| PUT     | `/todo/:id/toggle` | -    | `_id` (ID de la tâche) | Marquer comme terminée / non terminée |
| DELETE  | `/todo/:id`        | -    | `_id` (ID de la tâche) | Supprimer une tâche                   |

---

## Structure des données

### Ce que vous envoyez (body du POST et du PUT)

| Champ         | Type    | Obligatoire | Description            |
| ------------- | ------- | ----------- | ---------------------- |
| `titre`       | String  | **oui**     | Le titre de la tâche   |
| `description` | String  | non         | Le contenu de la tâche |
| `urlImage`    | String  | non         | Lien d'une image       |
| `termine`     | Boolean | non         | `false` par défaut     |

> Respectez exactement ces noms de champs, sinon l'API ne les reconnaîtra pas.

### Ce que l'API vous renvoie

`GET /todo` renvoie un **tableau** de tâches :

```json
[
  {
    "_id": "6af77a66b5d7b5f65565cb92",
    "titre": "test",
    "description": "test",
    "urlImage": "https://img.magnific.com/premium-vector/ui-ux-agency-icon_990672-239.jpg?semt=ais_hybrid&w=740&q=80",
    "termine": false,
    "createdAt": "2026-11-13T21:00:22.020Z",
    "updatedAt": "2026-11-13T21:00:22.020Z",
    "__v": 0
  }
]
```

| Champ                                         | Description                                                |
| --------------------------------------------- | ---------------------------------------------------------- |
| `_id`                                         | Identifiant unique de la tâche (ajouté par le serveur)     |
| `titre`, `description`, `urlImage`, `termine` | Les données de la tâche                                    |
| `createdAt`, `updatedAt`                      | Dates de création et de dernière modification              |
| `__v`                                         | Champ interne de la base de données, vous pouvez l'ignorer |

Utilisez `_id` pour modifier, supprimer ou marquer une tâche, et comme `key` dans votre `.map()`.

---
