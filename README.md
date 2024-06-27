# Projet de Tests Unitaires et Intégration Continue

Ce projet inclut des tests unitaires pour une fonction JavaScript et utilise GitHub Actions pour l'intégration continue.

## Structure du Projet
```
projet-test-unitaire/
├── .github/
│ └── workflows/
│ └── ci.yml
├── node_modules/
├── package.json
├── test.js
├── .gitignore
└── README.md
```


## Installation

1. Clonez le dépôt et accédez au répertoire :
    ```
    git clone <URL_DE_VOTRE_DEPOT_GITHUB>
    cd projet-test-unitaire
    ```

2. Installez les dépendances :
    ```
    npm install
    ```

## Exécution des Tests

Lancez les tests unitaires : npm test


## Intégration Continue

GitHub Actions est configuré pour exécuter les tests à chaque `push` ou `pull request` vers la branche `master`.