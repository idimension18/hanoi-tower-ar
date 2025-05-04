# hanoi-tower-ar
hanoi tower in ar using A-Frame

# Lancement du programme
La dernière version tourne, en principe, sur `le-floch.iiens.net`, du moins pendant quelques mois.
Pour vérifier le code directement, une possibilité est d'exécuter la commande `npm i -g five-server@latest && five-server --port=8000` dans un terminal dans le dossier contenant `index.html`, puis d'ouvrir un navigateur à l'adresse `127.0.0.1:8000`.

# Plateformes testées
Le jeu fonctionne correctement sur Firefox sur Linux, MacOS et IpadOS. (Windows et IOS n'ont pas été testés). Nous n'avons pas eu de succès sur Android.

# Jeu
Le jeu nécessite un marqueur Hanoi. Une fois celui-ci dans le champ de la caméra, pourvu qu'il soit suffisamment visible et sans trop de reflets, la base des tours de Hanoi doit apparaître dessus. Un viseur rouge est au centre de l'écran. Pour jouer : viser une tour la sélectionne. Celle-ci passe en vert. Ensuite, viser une deuxième tour déclenche un transfer, si cela est possible, de la première tour vers la deuxième. Un transfer est possible si la première tour possède au moins une pièce, auquel cas la plus haute est choisie, et si la 2e tour est soit vide soit possède des pièces telles que la plus haute est plus grande que la pièce choisie. Sinon, rien ne se passe. Dans tous les cas, les deux tours sont désélectionnées. L'objectif est de transférer les 4 pièces sur la tour de droite, avec le moins de coups possibles.