# Démarche créative de la page d'incription

### `Choix de couleurs`

Le design global est minimaliste et moderne axé sur les parties interactives
Il permet à l'utilisateur de rester focus sur l'esssentiel en limitant les éléments purement décoratifs qui peuvent distraire l'utilisateur

### `police`
Nous avons opté pour la police Source Sans Pro en raison de sa facilité de lecture
Runs the app in the development mode.

### `bordures`

Nous avons opté pour des bordures légèrement arrondies afin de donner au champs un look plus moderne et moins cru.

### `icones`

Nous avons utilisé des icones en svg en lieu des habituels librairies commme font-awesome en raison de l'envergure -moindre du projet.

### `champs de saisi, labels et message d'erreur`

Les champs de saisi sont larges et gras pour une meilleure visibilité.
Ils ont été combinés avec leurs labels respectifs afin d'obtenir l'effet de "flottage".

Cela est très important dans la mesure où le wireframe ne contient aucun label, ici remplacé par le placeholder. Problème: losque l'utilisateur se met à saisir, le placeholder disparait cachant ainsi une information cruciale à l'utilisteur à savoir l'intitulé de l'information à saisir.

En cas d'eurreurs sur l'un des inputs, nous utilisons la class `invalid` de boostrap pour signifier clairement l'erreur à l'utilisateur en plus de message d'erreur

## Conteneurs, Grids , flexbox

Les boutons sont conformes au wireframe pour les versions tablettes et ordinateurs.
Cependant sur mobiles, ils sont transform en des elements "block level" qui occuppent toute la largeur de l'écran et s'empillent.

L'image incitative à l'inscription vient avant le formulaire sur la version mobile et reste, comme sur le wireframe à coté du  formulaire sur la version mobile.

## Validation, effets javascript

Pour simplifier la validation et réduire la taille du code, nous avons opté pour l'API Constraint Validation qui permet de faire le gros du travail avec simplement des attributs HTML et gérer les erreurs de manière globale ou au cas par cas via HTML.
