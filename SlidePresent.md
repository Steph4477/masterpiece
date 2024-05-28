---
marp: true
paginate: false
color: black
style: |
  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: linear-gradient(to left, 
    color: black;
    padding: 50px;
    
  }


  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);  
    width: 50%;  
  }

---

![bg](https://i.imgur.com/jVEqRAk.jpg) 
<!-- 1
Hello everyone, Stéphane Morel, I introduce myself as a student of the promotion, designer and application developer.

I am in professional retraining, I wanted to do this training after a previous web developer training.
I wanted to learn certain concepts and especially the design of applications. Which made me choose this program with Simplons. I am targeting the title of designer and application developer in addition to web developer.

For the context of my masterpiece project: I have had a first professional life in commerce. I want to create a business management application called BPIM (Business Product Inventory Management) where merchants can track their products on the system and ultimately this application will be linked to an online e-commerce so the merchant will have all the information necessary to effectively manage his store.

-->

---

![bg](https://i.imgur.com/v0IDlvO.jpg) 
<!-- 2
Dans le sommaire, vous pouvez voir que je vais vous conduire de l'expression des besoins à une démonstration en passant par la succession de toutes les étapes de conception d'un projet informatique.
Pour terminer avec une conclusion, évidemment.
 
-->

---

![bg](https://i.imgur.com/9l8ByMh.jpg) 
<!-- 3
Je me suis inspiré de ma première vie professionnelle dans le commerce. Je voulais concevoir un outil puissant de gestion pour les commerçants. À terme, cet outil sera en lien avec leur boutique en ligne pour les aider à gérer efficacement leurs produits, clients, livraisons, factures, employés... le tout centralisé dans une seule et même application BPIM.
Durant ma présentation, je vais vous expliquer comment j'ai conçu une fonctionnalité d'ajout d'un ou plusieurs produits par commerçant.

-->

---

![bg](https://i.imgur.com/PPwsYAW.jpg) 
<!-- 4 
Un petit peu de contexte.
 

-->

---

![bg](https://i.imgur.com/fJhMF41.jpg) 
<!-- 5
Je suis d'abord parti par une étude des utilisateurs cibles. Les 2 principaux, en tout cas, commerçants et clients. Donc là je me suis appuyé sur la technique des personas. Je vous montre un premier persona qui idéalise un commerçant avec ses attentes et surtout ses besoins pour gérer sa boutique efficacement et accroître la satisfaction de ses clients.
-->

---

![bg](https://i.imgur.com/vEfKSxR.jpg) 
<!-- 6 
Ensuite un persona qui représente un client parce qu'on n'a pas de commerce sans client ! Qui lui a d'autres besoins et frustrations en recherche de matériels et d'innovation constante qui ne peut se permettre de manquer de quoi que ce soit. Parce qu'on le sait tous les clients sont très exigeants !

L'idée des personas, c'est d'identifier de vrais besoins pour être certain qu'on conçoit et qu'on développe de vraies fonctionnalités et pas des fonctionnalités qui ne correspondraient pas aux attentes de leurs utilisateurs. Je vais tenter de répondre à chaque frustration de mes utilisateurs cibles.


-->

---

![bg](https://i.imgur.com/df6MJbh.jpg) 
<!-- 7 
J'ai commencé par lister les fonctionnalités principales de mon application. Pour la fonctionnalité que je vais vous présenter en fil conducteur de cette présentation qui est de créer un produit appartenant à un marchand spécifique.

J'aurais besoin que ...
-->

---

![bg](https://i.imgur.com/58pH0Mb.jpg) 
<!-- 8 
Avant de démarrer le projet donc là sur cette slide, je vous présente une partie des objectifs que je me suis fixés.

Dans mon contexte, je me suis attardé sur les tests d'intégration avec mon backend.

J'ai démarré mon développement pour mobile en premier car c'est quand même plus pratique nous le verrons dans la partie démonstration de l'application, je suis en train de travailler actuellement sur la version desktop.

De veiller à mettre en place un tant soit peu des bonnes pratiques que ce soit par exemple le nommage.

Et également de veiller à ce que l'application soit bien sécurisée en chiffrant les mdp des utilisateurs et en validant les entrées utilisateurs, par exemple. Pour me protéger des injections SQL.

-->

---

![bg](https://i.imgur.com/qjuWYBd.jpg) 
<!-- 8.5 
Ces objectifs étant fixés et le contexte posé, le point de départ c'est d'exprimer des besoins. Étant seul j'ai choisi de m'appuyer sur GitHub qui a une fonctionnalité de gestion de projet afin de pouvoir identifier des fonctionnalités. 
J'ai exprimé les besoins un peu comme le ferait un PO dans une équipe de dev (en tant que commerçant je souhaite pouvoir ajouter un article avec...) ici c'est plutôt un formulaire d'ajout de produit avec les propriétés de mes articles avec l'ensemble des règles de gestion associées et que je dois implémenter.
-->
---

![bg](https://i.imgur.com/gMVuJIu.jpg)
<!-- 9  
PPuis j'ai découpé ces besoins en milestones pour un premier découpage de la fonctionnalité.

-->

---

![bg](https://i.imgur.com/ERASI0z.jpg) 
<!-- 10 
Puis enfin en tickets de dev dans un kanban qui m'a permis de découper en tâches encore plus petites.
Ce qui m'a permis de savoir que si mes tickets de chaque milestone étaient terminés alors la tâche était finie et je pouvais passer à la suivante et ainsi de suite.

J'ai appris grâce à cette formation à concevoir avant d'implémenter.
-->
---

![bg](https://i.imgur.com/mbuPVgf.jpg)
<!-- 11 
Donc je vais parler de la partie conception

-->
---

![bg](https://i.imgur.com/8c4xGme.jpg) 
<!-- 12 
Et plus particulièrement de la conception du front
-->
---

![bg](https://i.imgur.com/MUiJv7B.jpg) 
<!-- 13 
J'ai procédé à la définition des zones de mes différents écrans. Ici, je vous montre un zoning, l'application est assez simple, mais l'important c'est de situer sur un écran, le type d'information qu'on a dans chacune des zones, l'en-tête, la navigation, etc.

-->
---

![bg](https://i.imgur.com/xaQCPsl.jpg)
<!-- 14 
Après la définition des zones, j'ai procédé à un wireframing donc grossièrement d'avoir une vision du futur écran à implémenter, les liens entre les pages HTML pour le front.

On peut commencer à se projeter dans le futur écran avec la barre de navigation et le logo qui indique l'identité du site.

Et en termes de conception, ça va nous aider plus tard, pour définir les différents éléments conteneurs qui vont nous permettre d'avoir la disposition souhaitée.

-->

---

![bg](https://i.imgur.com/3ekq60r.jpg) 
<!-- 15 
J'ai procédé à la réflexion qui ici est assez plate et simple, mais de l'arborescence du site, comment on navigue dans le site ?

Pour atteindre le formulaire de création d'article qui est le fil rouge de ma présentation.


-->

---

![bg](https://i.imgur.com/56zsnPe.jpg) 
<!-- 16 
Je vous présente la charte graphique où j'ai défini la palette de couleurs et la police que j'ai utilisée.

-->
---

![bg](https://i.imgur.com/yc6LLMr.jpg)
<!-- 17
Enfin la maquette statique.
C'est en quelque sorte le zoning + les wireframes + la charte graphique qui donnent la maquette statique.
Tout est statique, il n'y a aucune logique, ni de validation, aucun lien avec le back mais de voir le rendu final des écrans.

-->
---

![bg](https://i.imgur.com/RvxQGlw.jpg)
<!-- 18  
La conception du Front de la présentation étant terminée, je me suis préoccupé dans un 2e temps de la conception et la modélisation des données.

-->
---

![bg](https://i.imgur.com/h4DpI6W.jpg) 
<!-- 19 
Toujours en m'appuyant sur l'expression de besoin, j'ai suivi la méthode MERISE qui nous donne 3 ÉTAPES À SUIVRE dans la conception et la modélisation des données. 
Le modèle conceptuel, le modèle logique ainsi que le modèle physique pour construire le schéma de la base de données. 
Au niveau conceptuel, il s'agit d'identifier et de représenter ici sous la forme d'un modèle graphique dit ENTITÉ ASSOCIATION, mais qu'on pourrait représenter textuellement pour représenter les entités qui ont été identifiées dans l'analyse des besoins.
Et chacune de ces entités a des propriétés qui lui sont propres, qui viennent définir l'entité.
Et chose particulière et OBLIGATOIRE dans cette ÉTAPE, c'est d'avoir un DISCRIMINANT, un identifiant unique qui apparaît ici en gras souligné. Et chaque entité dispose de son propre identifiant. Ça vient répondre aux besoins métiers, aux besoins des commerçants, des produits, de savoir de quoi je parle.
Il y a des symboles Bleus entre les entités qui viennent représenter grâce à un VERBE, le LIEN SÉMANTIQUE qu'il y a entre les entités qui sont une association, ainsi que des CARDINALITÉS pour dire combien de fois une entité peut être en association avec une autre. Ici on a une relation 1 à plusieurs et on peut le lire dans les 2 sens.
Exemple :

0 ou plusieurs commerçants lister un et un seul et même produit.
Un et un seul et même produit peut être listé par 0 ou plusieurs commerçants.

Donc là je fais la transition vers la slide sur le modèle logique de données.

-->
---

![bg](https://i.imgur.com/URlDNrK.jpg) 
<!-- 20 
En introduction de cette slide, on a fait le choix d'un type de base de données qui est ici relationnel.
!!!! Ou dans MERISE, les entités deviennent des tables, les propriétés deviennent des colonnes, les discriminants des clés primaires et les associations deviennent des clés étrangères !!!. 
À noter la règle importante de transformation des associations en clés étrangères. Dans une relation 1N, MERISE nous dit que la clé étrangère glisse du côté du 1. Donc pour nous, le SIRET des commerçants glisse dans la table produits qui est en association.


-->
---

![bg](https://i.imgur.com/FiNpKPu.jpg) 
<!-- 21 
Et enfin le modèle physique de données. Il s'agit d'un script SQL qui met en place la base de données.
Il s'agit de la transposition en code, en instruction SQL, du modèle logique de données et donc qui permet comme son nom l'indique d'aller créer physiquement le schéma de la base de données sur le disque dur dans un système physique. 

Donc dans les grandes lignes, c'est le reflet du modèle logique. Sauf que j'ai un peu dénormalisé le modèle en introduisant un identifiant numérique dans toutes les tables et qui devient la clé primaire, ce qui va optimiser les jointures pour des raisons de performance. Cependant, je garantis en base de données la cohérence des données, à savoir la reprise de chacun des discriminants en les transformant en clés secondaires, c'est-à-dire en mettant une contrainte d'unicité.

-->
---

![bg](https://i.imgur.com/co5SeNu.jpg)
<!-- 22  
Je vais donc maintenant passer à la conception des traitements. 
Qui dit programme informatique dit données. Donc là je vous ai présenté la partie donnée, conception des données, de quelles données on a besoin dans l'application et maintenant il s'agit de présenter les traitements. Qu'est-ce qu'on va faire de ces données ?

-->
---

![bg](https://i.imgur.com/bSFt65E.jpg) 
<!-- 23 
Toujours en vue de répondre aux besoins des commerçants, je me suis appuyé sur le concept de cas d'utilisation qui est ici représenté graphiquement avec un diagramme UML de cas d'utilisation. On retrouve l'acteur de mon application, notre commerçant, qui est authentifié car je me suis focalisé sur l'ajout de produits dans le système. Le diagramme est à jour en ce sens. 

On note qu'il y a une notion de multiplicité, 0 à plusieurs, la petite étoile dans la notation UML pour dire plusieurs fois, c'est la multiplicité qui est associée au cas d'utilisation. La petite étiquette en UML donne une condition préalable pour effectuer une action.

-->
---

![bg](https://i.imgur.com/QaynTiP.jpg)
<!-- 24  
Une fois qu'on a identifié les différents traitements à implémenter, on rentre dans le détail. Je suis dans une technologie orientée objet et qui dit objet dit classe. 
Je parlerai de la stack plus tard mais je suis en TypeScript donc là je l'évoque car on vient poser du vocabulaire et pour poser ce vocabulaire 
il faut savoir dans quel langage orienté objet on parle. 
On retrouve donc les différentes classes de mes entités, mes entités métiers sont devenues des tables en base de données et là elles sont en train de devenir des classes côté traitement. Donc chacune de mes entités est représentée sous la forme d'une classe qui va me permettre d'instancier cette classe pour obtenir des objets et faire des traitements avec. Donc on y retrouve quelques concepts de l'orienté objet.
Pour ne pas répéter le mapping de mon identifiant qui est du même type et qui porte le même nom dans mes entités, j'ai procédé à une abstraction dans une classe que j'ai appelée base entity et dont toutes mes entités concrètes donc merchant et product mais même d'autres si par la suite j'ai d'autres entités héritent de l'ID de type number. C'est ce qu'on appelle l'héritage en langage objet. 
On le voit en UML. Pour parler un petit peu du langage UML, le + veut dire public.
Sinon il y a une association de type agrégation par exemple entre merchant et product.
Le petit losange vide ou blanc du côté de product vient dire que c'est merchant qui a une référence vers product.
Ça vient dire que si je supprime un produit, ça ne supprimera pas le commerçant associé. Ce n'est pas parce que je supprime un produit que je supprime le compte d'un commerçant. 
On voit le petit 1 du côté du merchant, c'est la multiplicité, pour dire combien de fois on peut être en association. 

-->
---

![bg](https://i.imgur.com/Yqfqe4g.jpg) 
<!-- 25 
Cette 3e et dernière slide qui présente la conception des traitements, 
c'est un diagramme de séquence toujours pour mon cas d'utilisation, d'ajout de un ou plusieurs produits par commerçant. 
Comment s'exécute le code correspondant au cas d'utilisation ? 
Puisque un cas d'utilisation, c'est une exécution de séquence de traitement dans le programme.
L'acteur à gauche qui est ici le commerçant et qui va déclencher l'exécution du cas d'utilisation.
Concrètement c'est cliquer sur le bouton qui va soumettre le formulaire de création d'article. 
J'envoie une information à un autre objet pour faire une partie des traitements. 
J'envoie une requête HTTP avec le verbe, l'URL et le body en JSON qui correspond aux données entrées dans mon formulaire vers le back pour être traité.
L'essentiel que je fais apparaître ici, c'est la communication entre les objets. 
Quand on crée un article, ça peut bien se passer ou mal se passer.
Pour ça, on a les scénarios alternatifs. Donc là il y a un rectangle qui apparaît avec un trait en pointillé au milieu. La partie haute, tout se passe bien avec une réponse HTTP qui traverse toutes les couches du système pour envoyer un statut 201 created. C'est un retour de fonction.
Et la partie basse du rectangle, le scénario avec les cas d'erreur, j'ai mis en place la validation. Ça ne va pas plus loin après le validateur et ça va retourner un autre statut HTTP 400 au client pour lui dire qu'il y a eu une erreur de validation que j'ai identifiée au préalable. Exemple : champ manquant, référence déjà existante...

-->
---

![bg](https://i.imgur.com/AZOZJ7G.jpg) 
<!-- 26 
Ayant conçu les traitements et l'interface. 
J'ai mis en place et suivi un principe d'architecture. Donc là, je vais présenter des slides autour de l'architecture.

-->
---

![bg](https://i.imgur.com/JXlLjUW.jpg)
<!-- 27 

!!! .... !!!

Persistance des données
Ces couches ont des responsabilités bien spécifiques, comme je viens de le dire. 
Et également des responsabilités communes. Enfin, j'ai mis en place pour des raisons d'expérience utilisateur, de la validation dans le front, dans la couche présentation et pour la garantie de la qualité de la cohérence des données. J'ai validé dans la couche métier. 
Donc le principal ou un des principaux avantages du découpage en 3 couches de l'application, !!! 
c'est par exemple de pouvoir les déployer indépendamment les unes des autres !!!.. 
mais aussi de travailler indépendamment sur chaque couche.

-->
---

![bg](https://i.imgur.com/8TXrtUe.jpg)
<!-- 28  
Pour répondre aux besoins de cette séparation en couches logiques, je me suis appuyé sur une stack technique qui est adaptée à cette architecture en choisissant 
SvelteKit qui est un framework que j'ai choisi pour sa réactivité et son routeur sous forme d'arborescence de fichiers. 
J'y reviendrai plus tard dans la partie implémentation.
NestJs parce qu'il est dans le même langage que SvelteKit en TypeScript et qu'il utilise des ORM (object relation mapping) pour l'aspect relationnel.
Et enfin PostgreSQL qui est une base de données relationnelle qui vient répondre aux problématiques de cohérence et de vérification de l'intégrité des données évoquées plutôt dans l'architecture. 
Et puis c'est une base gratuite par rapport à d'autres concurrents du marché qui sont payants.

-->
---

![bg](https://i.imgur.com/SwFYGSp.jpg) 
<!-- 29 
Je vais passer à la partie implémentation après avoir conçu les 3 couches de l'application et vous présenter comment j'ai implémenté dans les grandes lignes mon code par couche et par responsabilité. 

-->
---

![bg](https://i.imgur.com/RN2p2VV.jpg) 
<!-- 30 -->
---

![bg](https://i.imgur.com/2xvN9ve.jpg) 

<!-- 31 
Parler du router

-->
---

![bg](https://i.imgur.com/xlGExB6.jpg)
<!-- 32  
app.html
-->
---

![bg](https://i.imgur.com/ObAGwqa.jpg) 
<!-- 33 -->
---

![bg](https://i.imgur.com/gXgnhlq.jpg) 
<!-- 34 
réactivité
UX

-->
---

![bg](https://i.imgur.com/3nNd8BU.jpg) 
<!-- 35 
validation du formulaire avec des regex sinon message d'erreurs
-->
---

![bg](https://i.imgur.com/ExY0iu2.jpg) 
<!-- 36 
couleur rouge
validation des regex
-->
---

![bg](https://i.imgur.com/dma0Bnk.jpg) 
<!-- 37 
aria-label
test accessibilité
-->
---

![bg](https://i.imgur.com/Ax01duC.jpg) 
<!-- 38 
fonction fetch de base pour factoriser mon code pour les autres fetch, variable d'environement

-->
---

![bg](https://i.imgur.com/re9ZDfQ.jpg) 
<!-- 39 -->
---

![bg](https://i.imgur.com/UvyLLeA.jpg) 
<!-- 40 
on retrouve notre Base entity
chaque entity et dans un dossier
un dossier Auth pour un soucis de lisibilité et de factorisation de mon code

-->
---
![bg](https://i.imgur.com/AntDzoM.jpg)

---

![bg](https://i.imgur.com/EnRpmEB.jpg)
<!-- 41 
Renvoie des statuts HTTP vus dans le diagramme de séquence.
Ne passe pas le contrôleur si les entrées ne sont pas validées.
Je lui demande de les valider par mon DTO.
La couche contrôleur a fini son travail, ses responsabilités, 
c'est-à-dire d'exposer le endpoint, 
d'appliquer la validation sur les inputs. La prochaine étape, c'est d'appeler la couche services qui elle, va concrètement implémenter la logique métier de cette fonctionnalité.  
 -->
---

![bg](https://i.imgur.com/2RCovav.jpg) 
<!-- 42 
Le DTO en exemple pour la création d'un article,
on retrouve les champs de saisie qu'on avait dans le front
avec les mêmes règles de validation sur champ obligatoire et la longueur. 

-->
---

![bg](https://i.imgur.com/Kp4TDGs.jpg) 
<!-- 43 
La prochaine étape, c'est d'appeler la couche services qui elle, va concrètement implémenter la logique métier de cette fonctionnalité de création d'article
qui appelle la méthode save du repository de NestJS qui va sauvegarder l'article en BDD.

-->
---

![bg](https://i.imgur.com/KHnRrS9.jpg)
<!-- 44  
Base entity.
Relation entre les entities.
Et on a donc des annotations avec ce framework ORM pour lui dire que cette classe est mappée avec la table Merchant.
Donc en sauvegardant les données dans le service avec la méthode save, l'ORM fera une requête SQL insert into products (reference, name, description, merchant_id) values
    ('CD123456', 'Livre - Le Petit Prince', 'Un conte philosophique écrit par Antoine de Saint-Exupéry', 1),
donc l'ORM est configuré et s'appuie sur le mapping.

-->

---
![bg](https://i.imgur.com/yXRnmKb.jpg)
<!-- 44_5-->
---

![bg](https://i.imgur.com/IYDTveQ.jpg) 
<!-- 45 -->
---

![bg](https://i.imgur.com/jj9amj1.jpg) 
<!-- 46 
J'ai mis en place un jeu de données avec lesquels j'ai fait des tests m'évitant de remplir 50 fois les mêmes formulaires.
-->
---

![bg](https://i.imgur.com/z7WdeqB.jpg)
<!-- 47  -->
---

![bg](https://i.imgur.com/QGDFaXw.jpg)
<!-- 48  
Côté test, j'ai surtout testé les routes de mon back avec Postman en simulant le front pour pouvoir tester si tout fonctionnait avec les renvois de statuts déjà pensés au préalable dans le diagramme de séquence, vous vous rappelez :)
Là c'est le cas où tout se passe bien.
-->
---

![bg](https://i.imgur.com/G0OIBfQ.jpg) 
<!-- 49 -->
---

![bg](https://i.imgur.com/FRkXQWG.jpg) 
<!-- 50 -->
---

![bg](https://i.imgur.com/tyVAm71.jpg)
<!-- 51 -->
---

![bg](https://i.imgur.com/3cdgXQX.jpg)
<!-- 52 -->
---

![bg](https://i.imgur.com/gVLe9PR.jpg)
<!-- 51 
J'ai enfin testé mon application sur différents navigateurs pour voir la compatibilité de mon application.
 -->
---

![bg](https://i.imgur.com/RLjXiBe.jpg) 
<!-- 52 -->
---

![bg](https://i.imgur.com/YxuYV23.jpg) 
<!-- 53 -->



