# Tests end-to-end — Behind Asteroids

> ⚠️ **Le jeu de ce dépôt n'est pas de moi.**
> C'est *Behind Asteroids, The Dark Side*, écrit par **Gaëtan Renaudeau ([@gre](https://github.com/gre))**
> pour js13kGames 2015, où il a gagné les catégories Desktop, Mobile et Community.
> Code et documentation d'origine : **[gre/behind-asteroids](https://github.com/gre/behind-asteroids)**.
> Le jeu est jouable [ici](https://js13kgames.com/games/behind-asteroids-the-dark-side/index.html).
>
> Ce dépôt est une copie utilisée comme cible d'un exercice de tests automatisés pendant ma
> formation (2023). **Ma contribution se limite à `test/`, `nightwatch/` et la configuration
> associée.**

---

## Ce que je teste

La cible est intéressante justement parce qu'elle est hostile à l'automatisation : le jeu est
un unique `<canvas>` (`#c`), sans DOM à interroger, et la version desktop est un jeu de frappe
au clavier. Il n'y a donc rien à cliquer et rien à assert au sens habituel.

`test/isplayable.js`, en Nightwatch, fait deux choses :

**Démarrer une partie.** Attendre que le canvas soit visible, puis enchaîner les clics sur `#u`
pour traverser l'écran d'accueil et les premiers menus.

**Jouer réellement.** Le jeu affiche dans `#key` la lettre à taper pour envoyer un astéroïde.
Le test lit ce texte, renvoie la lettre au `body` en rafale, relit `#key`, et compte combien de
lettres *différentes* se sont succédé. Une lettre qui change veut dire que la précédente a été
consommée, donc qu'un astéroïde est bien parti. L'assertion porte sur ce compteur.

C'est un contournement assumé : sans état exposé, le seul signal observable de l'extérieur est
le changement de la consigne affichée. Le test vérifie la boucle de jeu à travers ce signal.

## Lancer

```bash
npm install
# servir le jeu sur http://127.0.0.1:8080
npx nightwatch test/isplayable.js
```

Le build du jeu et son fonctionnement sont documentés dans le
[dépôt d'origine](https://github.com/gre/behind-asteroids).
