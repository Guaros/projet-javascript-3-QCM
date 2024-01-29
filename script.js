import {List} from "./Utilitaire.js";
import {Gentools} from "./Utilitaire.js";

class Reponse
{
    /*
    Représente une question 

    Propriétés : 
        - descriptionReponse : String : L'énoncé de la réponse
        - estCorrecte : Boolean : true si la réponse est correcte sinon false 
    */
    constructor(descriptionReponse, estCorrecte)
    {
        this.descriptionReponse = descriptionReponse;
        this.estCorrecte = estCorrecte;
    }

    toString()
    {
        // affichage de Reponse
        return `${this.descriptionReponse} ${this.estCorrecte}`;
    }
}

class Question
{
    /*
    Représente une question 

    Propriétés : 
        - descriptionQuestion : String : L'énoncé de la question
        - listeReponses : List<Reponse> : Liste des Reponse 
    */
    constructor(descriptionQuestion, listeReponses)
    {
        this.descriptionQuestion = descriptionQuestion;
        this.listeReponses = listeReponses;
    }

    toString()
    {
        // affichage de Question sous forme de chaine de caractères
        return `${this.descriptionQuestion} ${this.listeReponses.toString()}\n`;
    }
}

class Quizz
{
    /*
    Représente le quizz 

    Propriétés : 
        - nomFichier : String : Le nom du fichier JSON qui stocke les questions
        - listeQuestion : List<Question> : Liste des Question 
        - numeroManche : Number (entier) : Le numéro de la manche courante 
        - score : Number (entier) : Le score du joueur
        - choixReponse : Number (entier) : La réponse du joueur
    */
    constructor()
    {
        this.nomFichier = null;
        this.listeQuestions = new List();
        this.numeroManche = 0;
        this.score = 0;
        this.choixReponse = 0;

        this.initialiserBoutons();
    }

    initialiserBoutons()
    {
        // Initialise les boutons au chargement de la page 
        for (let bouton of document.getElementById("conteneurReponses").children)
        {
            bouton.addEventListener("click", this.jouerManche.bind(this)); 
            bouton.disabled = true;
        }
    }

    changerCouleurFond(bouton, couleur)
    {
        /*
            Change la couleur de fond d'un bouton

            Paramêtres : 
                - bouton : HTMLElement : bouton sur lequel on veut changer la couleur
                - couleur : String : couleur de fond 
        */
        bouton.style.backgroundColor = couleur;
    }

    async recupererDonnees()
    {
        // Récupère les données du fichier json
        try 
        {
            let reponse = await fetch(this.nomFichier);
            let donnees = await reponse.json();
            this.initialiserListeQuestions(donnees);
        }
        catch (error)
        {
            console.log(error);
        }
    }

    initialiserListeQuestions(contenuJson)
    {
        /* 
            Converti les données récupérées en Liste de Question 

            Paramêtres : 
                - contenuJson : JSON : Le fichier JSON à convertir 
        */
        let listeReponses = null;
      
        for (let question of contenuJson["questions"])
        {
            listeReponses = List.toList(question.reponses).map(reponse => new Reponse(reponse.description, reponse.estCorrecte));
            this.listeQuestions.append(new Question(question.description, listeReponses));
        }
    }

    afficherQuestion()
    {
        // Permet d'afficher la question courante (énoncé de la question, propositions de réponses)
        let question = this.listeQuestions.get(this.numeroManche);
        document.getElementById("descriptionQuestion").innerText = question.descriptionQuestion;

        for (let [indiceReponse, reponse] of question.listeReponses.enumerate())
        {
            document.getElementById(`reponse${indiceReponse+1}`).innerText = reponse.descriptionReponse;
        }  
    }

    afficherReponses()
    {
        // Permet d'afficher les réponses (bonnes et mauvaises)
        let reponses = this.listeQuestions.get(this.numeroManche).listeReponses.toArray();
        let boutons = document.getElementById("conteneurReponses").children;
        let couleur = "";
        
        for (let [reponse, bouton] of Gentools.zip(reponses, boutons))
        {
            couleur = reponse.estCorrecte ? bouton.style.backgroundColor = "green" : bouton.style.backgroundColor = "red";
            this.changerCouleurFond(bouton, couleur);
        }
    }

    recupererChoix(boutonClique)
    {
        /* 
            Récupère le choix de l'utilisateur (le bouton sur lequel il a cliqué)

            Paramêtres : 
                - boutonClique : HTMLElement : Le bouton sur lequel l'utilisateur a cliqué
        */
        let idBoutonClique = boutonClique.target.id
        this.choixReponse = Number(idBoutonClique.substr(idBoutonClique.length - 1));
    }

    boutonsFinPartie()
    {
        // Change l'état des boutons à la fin de la partie (desactive les boutons réponse, efface les réponses, réactive les bouton démarrer...)
        for (let bouton of document.getElementById("conteneurReponses").children)
        {
            bouton.innerText = "        ";
            bouton.disabled = true;
            document.getElementById("boutonDemarrer").disabled = false;
            document.getElementById("theme").disabled = false;
        }
    }

    reactiverBoutonsReponse()
    {
        // Reactive les boutons réponse pour recommencer une partie
        for (let bouton of document.getElementById("conteneurReponses").children)
        {
            bouton.disabled = false;
        }
    }

    mancheSuivante()
    { 
        // Permet de passer à la manche suivante (remet les couleurs en gris, affiche la prochaine question...)
        for (let bouton of document.getElementById("conteneurReponses").children)
        {
            this.changerCouleurFond(bouton, "#D9AC46");
        }

        if (this.numeroManche == this.listeQuestions.len())
        {
            this.finirPartie();
        }
        else 
        {
            this.afficherQuestion();
        }
    }

    finirPartie()
    {
        // Permet de finir une partie (efface la question, reset le score, le numéro de la manche...)
        this.boutonsFinPartie();
        document.getElementById("descriptionQuestion").innerText = "";

        this.numeroManche = 0;
        this.score = 0;
        this.listeQuestions.clear();
    }

    jouerManche(boutonClique)
    {
        /* 
            Permet de jouer une manche (affiche la question, le score, passe à la manche suivante...)

            Paramêtres : 
                - boutonClique : HTMLElement : Le bouton sur lequel l'utilisateur a cliqué    
        */
        this.afficherReponses();
        this.afficherScore(boutonClique);
        this.numeroManche += 1;
        setTimeout(this.mancheSuivante.bind(this), 400);
    }

    afficherScore(boutonClique)
    {
        /*
            Affiche le score du joueur à chaque manche

            Paramêtres : 
                - boutonClique : HTMLElement : Le bouton sur lequel l'utilisateur a cliqué
        */
        this.recupererChoix(boutonClique);
        let reponse = this.listeQuestions.get(this.numeroManche).listeReponses.get(this.choixReponse-1).estCorrecte;

        if (reponse)
        {
            this.score += 1;
        }

        document.getElementById("score").innerText  = this.score;
    }

    async jouerPartie()
    {
        // Permet de jouer une partie (récupère le thème, les questions, désactive le bouton démarrer, active les boutons réponse,  affiche la première question...)
        let choixQuizz = document.getElementById("theme").value;
        if (choixQuizz)
        {
            document.getElementById("boutonDemarrer").disabled = true;
            document.getElementById("theme").disabled = true;
            document.getElementById("score").innerText = this.score;

            this.nomFichier = `quizz/${choixQuizz}.json`;
            
            await this.recupererDonnees();
            this.afficherQuestion();

            this.reactiverBoutonsReponse();
        }
    }

    toString()
    {
        // affichage de Quizz sous forme de chaine de caractères
        return `${this.listeQuestions.toString()}\n`;
    }
}

let quizz = new Quizz();
document.getElementById("boutonDemarrer").addEventListener("click", quizz.jouerPartie.bind(quizz));







/*
A faire : 
- choisir un thème (mettre d'autres questions)
- gerer le responsive
*/