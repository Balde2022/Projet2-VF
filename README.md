TeleSport

Creation d'un projet pour la chaîne de télévision TéléSport pour les jeux olympiques. Le projet consite a mettre en place le front-end d'un dashboard à disposition des utilisateurs permettant de visualiser les informations des précédents Jeux olympiques.

Architecture du projet

src 
|--app
|   |__Views
|   |      |__Detail
|   |      |      |__detail.component.css
|   |      |      |__detail.component.html
|   |      |      |__detail.component.ts
|   |      |
|   |      |
|   |      |__Home
|   |            |__home.component.css
|   |            |__home.component.html
|   |            |__home.component.ts  
|   |       
|   |__Shared
|          |__Models
|          |     |__Olympic
|          |     |        |__olympic.ts 
|          |     |
|          |     |__Participations
|          |                     |__participation.ts
|          |
|          |__Services
|          |     |__olympic-services
|          |                       |__olympic.service.ts
|          |
|          |__Not_Found_Pages
|                           |__not-found-page.component.css
|                           |__not-found-page.component.html
|                           |__not-found-page.component.ts
|__asset
       |__Mock
             |__olympic.json
Lancer l'application

Pour demarrer le projet, Il faut ouvrir le terminal, puis taper "cd Tele-sport/src/assets/mock" ,puis lancer le serveur json avec la commande "json-server --watch olympic.json" Dans un nouveau terminal pour lancer l'application, enter la commande : ng serve Le navigateur vous redirigera vers l'application a l'adresse : http://localhost:4200
