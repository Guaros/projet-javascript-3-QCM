/* 
Comment importer ce module 

En JS : 

Tout en haut du fichier 

import {Random} from "./Utilitaire.js";
import {List} from "./Utilitaire.js";
import {Gentools} from "./Utilitaire.js";

Ensuite invoquer l'élément que l'on souhaite utiliser
- Pour les méthodes d'instance : Le nom de l'objet.Le nom de la méthode 
    - let l = new List(1, 2, 3);

- Pour les méthodes statiques : Le nom de la classe.Le nom de la méthode 
     - let v = Random.randint(0, 10);

En HTML : 

<script type="module" src="script.js"></script>
*/

export class ErreurArguments extends Error 
{
    /*
    Personnalise le nom de l'erreur erreurArguments
    Voir la documentation de la fonction erreurArguments
    */
    constructor(message) 
    {
      super(message); 
      this.name = "ErreurArguments";
    }
}

export class ErreurDecimal extends Error 
{
    /*
    Personnalise le nom de l'erreur erreurDecimal
    Voir la documentation de la fonction erreurDecimal
    */
    constructor(message) 
    {
      super(message); 
      this.name = "ErreurDecimal";
    }
}

export class ErreurGenerateur extends Error 
{
    /*
    Personnalise le nom de l'erreur erreurGenerateur
    Voir la documentation de la fonction erreurGenerateur
    */
    constructor(message) 
    {
      super(message); 
      this.name = "ErreurGenerateur";
    }
}

export class ErreurHomogene extends Error 
{
    /*
    Personnalise le nom de l'erreur erreurHomogene
    Voir la documentation de la fonction erreurHomogene
    */
    constructor(message) 
    {
      super(message); 
      this.name = "ErreurHomogene";
    }
}

export class ErreurIndex extends Error 
{
    /*
    Personnalise le nom de l'erreur erreurIndex
    Voir la documentation de la fonction erreurIndex
    */
    constructor(message) 
    {
      super(message); 
      this.name = "ErreurIndex";
    }
}

export class ErreurIterable extends Error 
{
    /*
    Personnalise le nom de l'erreur erreurIterable
    Voir la documentation de la fonction erreurIterable
    */
    constructor(message) 
    {
      super(message); 
      this.name = "ErreurIterable";
    }
}

export class ErreurNonAppartenance extends Error 
{
    /*
    Personnalise le nom de l'erreur erreurNonAppartenance
    Voir la documentation de la fonction erreurNonAppartenance
    */
    constructor(message) 
    {
      super(message); 
      this.name = "ErreurNonAppartenance";
    }
}

export class ErreurType extends Error 
{
    /*
    Personnalise le nom de l'erreur erreurType
    Voir la documentation de la fonction erreurType
    */
    constructor(message) 
    {
      super(message); 
      this.name = "ErreurType";
    }
}

export class ErreurTailleIterable extends Error 
{
    /*
    Personnalise le nom de l'erreur erreurTailleIterable
    Voir la documentation de la fonction erreurTailleIterable
    */
    constructor(message) 
    {
      super(message); 
      this.name = "ErreurTailleIterable";
    }
}

export class ErreurVide extends Error 
{
    /*
    Personnalise le nom de l'erreur erreurVide
    Voir la documentation de la fonction erreurVide
    */
    constructor(message) 
    {
      super(message); 
      this.name = "ErreurVide";
    }
}

export class ErreurZero extends Error 
{
    /*
    Personnalise le nom de l'erreur erreurZero
    Voir la documentation de la fonction erreurZero
    */
    constructor(message) 
    {
      super(message); 
      this.name = "ErreurZero";
    }
}





function erreurArguments(nomFonction, nbAttendus)
{
    /*
    Erreur déclanchée si le nombre d'arguments n'est pas égal au nombre de paramêtres

    Paramêtres
        - nomFonction: String: Le nom de la fonction 
        - nbAttendus: Number: Le nombre de paramêtres attendus
    */
    throw new ErreurArguments(`${nomFonction} attend au minimum ${nbAttendus} paramêtre(s)`);
}

function erreurDecimal(nomParametre)
{
    /*
    Erreur déclanchée si la valeur d'un paramêtre donnée est un décimal 

    Paramêtres
        - nomParametre: String: Le nom du paramêtre qui pose problème
    */
    throw new ErreurDecimal(`Vous avez donné un décimal pour le paramêtre ${nomParametre}, un entier était attendu`);
}

function erreurGenerateur(iterable)
{
    /*
    Erreur déclanchée si tous les itérables d'un générateur ne sont pas de la même taille

    Paramêtres
        - iterable: Iterable: L'itérable qui n'a pas la bonne taille
    */
    throw new ErreurGenerateur(`Tous les itérables doivent avoir la même taille, l'itérable ${iterable} a une taille différente`);
}

function erreurHomogene(iterable)
{
    /*
    Erreur déclanchée si un itérable n'est pas homogène (tous ses éléments ne sont pas de même type)

    Paramêtres
        - iterable: Iterable: L'iterable qui est hétérogène
    */
    throw new ErreurHomogene(`Tous les éléments de ${iterable} doivent être de même type`);
}

function erreurIndex(nomParametre)
{
    /*
    Erreur déclanchée si la valeur d'un index donné (entier) est en dehors des limites 

    Paramêtres
        - nomParametre: String: Le nom du paramêtre qui pose problème
    */
    throw new ErreurIndex(`L'index donné pour le parametre ${nomParametre} est en dehors des limites`);
}

function erreurIterable(objet)
{
    /*
    Erreur déclanchée si la valeur donnée n'est pas un itérable

    Paramêtres
        - objet: Object: La valeur donnée 
    */
    throw new ErreurIterable(`${objet} n'est pas itérable`);
}

function erreurNonAppartenance(valeurDonnee, iterable)
{
    /*
    Erreur déclanchée si une valeur donnée n'appartient pas à une structure (itérable)

    Paramêtres
        - valeurDonnee: Object: La valeur donnée
        - iterable: Iterable: La structure 
    */ 
    throw new ErreurNonAppartenance(`L'élément ${valeurDonnee} n'appartient pas à ${iterable}`);
}

function erreurTailleIterable(iterable, nbElements)
{
    /*
    Erreur déclanchée si un itérable donné n'a pas au minimum nb éléments

    Paramêtres
        - iterable: Iterable: L'itérable qui n'a pas assez d'éléments
        - nbElements: Number: Le nombre d'éléments minimum que l'itérable doit avoir
    */ 
    throw new ErreurTailleIterable(`L'itérable ${iterable} doit avoir au minimum ${nbElements} éléments`);
}

function erreurType(nomParametre, typeAttendu, valeurDonnee)
{
    /*
    Erreur déclanchée si le type d'un argument donné n'est pas le type attendu 

    Paramêtres
        - nomParametre: String: Le nom du paramêtre qui pose problème
        - typeAttendu: String: Le type du paramêtre attendu 
        - Valeurdonnee: Object: La valeur donnée en argument
    */
    let valeur; 

    if (typeof valeurDonnee != "object")
    {
        valeur = typeof valeurDonnee;
    }
    else 
    {
        valeur = Object.prototype.toString.call(valeurDonnee);
    }

    throw new ErreurType(`Le type attendu du paramêtre ${nomParametre} est ${typeAttendu}, vous avez donné un ${valeur}`);
}

function erreurVide(iterable)
{
    /*
    Erreur déclanchée si un itérable est vide (n'a aucun élément)

    Paramêtres
        - iterable: Iterable: L'itérable qui est vide
    */
    throw new ErreurVide(`La structure ${iterable} ne doit pas être vide`);
}

function erreurZero(valeurDonnee)
{
    /*
    Erreur déclanchée si une valeur donnée vaut zéro

    Paramêtres
        - valeurDonnee: Number: Le nombre qui vaut zéro
    */
    throw new ErreurZero(`L'élément ${valeurDonnee} ne peut pas etre à 0`);
}






export class List 
{
    /*
    Cette classe représente une liste. Il s'agit d'une refonte du type Array 
    avec une meilleure gestion des erreurs et une syntaxe proche de celle des listes Python
    */
    constructor(...parametres)
    {
        /*
        Constructeur de la classe List.
        Peut prendre aucune valeur (liste vide) ou un nombre variable de valeurs 

        Exemple : 
        -> let l = new List();
        -> let l = new List(1, 2, 3);
        -> let l = new List(1, "a", true, 5.6, [1, 2, 3]);
        -> let l = new List([1, 2, 3], [4, 5, 6]);
        -> let l = new List(new List());
        -> let l = new List(new List(1, 2, [3, 4, 5]), 6, 7);
        -> let l = new List(8, "hello", new List(1, 2, [3, 4, 5]), 6, 7);
        */
        this.tab = [];

        if (parametres.length != 0)
        {
            for (let parametre of parametres)
            {
                this.append(parametre);
            }
        }
    }

    static range(...parametres)
    {
        /* 
        Permet de creer et remplir une liste à partir d'un slice 
        (voir la documentation de la méthode slice pour plus d'informations)

        Le pas est facultatif (1 par défaut) et peut être négatif (valeurs de début et de fin inversées)
        Les valeurs de début et de fin ne peuvent pas être négatives

        La valeur de début est inclue et le valeur de fin est exclue dans les 2 sens

        Renvoit:
            -> List
         
        Exemple:
            -> let l = List.range(0, 10); 
            -> let l = List.range(4, 8);
            -> let l = List.range(0, 10, 2);
            -> let l = List.range(10, 0, -1);
        */
        if (parametres.length < 2)
        {
            erreurArguments("range", 2);
        }

        let valeurParametre = null;
        let typeParametre = "";

        let nomParametres = ["debut", "fin", "pas"];
        let nomParametre = "";

        for (let indiceParametre in parametres)
        {
            indiceParametre = Number(indiceParametre);
            valeurParametre = parametres[indiceParametre];
            typeParametre = typeof valeurParametre;
            nomParametre = nomParametres[indiceParametre];

            if (typeParametre != "number" && typeParametre != "undefined")
            {
                erreurType(nomParametre, "number", typeParametre);
            }
            else if (!Number.isInteger(valeurParametre) && typeParametre != "undefined")
            {
                erreurDecimal(nomParametre);
            }
        }
        
        let debut = parametres[0];
        let fin = parametres[1];
        let pas = 1;
        let liste = new List();
            
        if (parametres.length > 2)
        {
            pas = parametres[2];
            if (pas == 0)
            {
                erreurZero("pas");
            }
        }

        if (pas >= 0)
        {
            for (let i=debut ; i < fin ; i += pas)
            {
                liste.append(i);
            }
        }
        else 
        {
            for (let i=debut ; i > fin ; i += pas)
            {
                liste.append(i);
            }
        }

        return liste;   
    }

    static toList(iterable)
    {
        /* 
        Convertit un iterable en Liste

        Parametres:
            -> iterable: Iterable: L'itérable à convertir

        Retour:
            -> List 

        Exemple:
            -> let l = List.toList([1, 2, 3]);
            -> let l = List.toList("abcd");
        */
        let liste = new List();

        if (typeof iterable == "undefined")
        {
            erreurArguments("toList", 1);
        }
        else if ( !(Symbol.iterator in Object(iterable)) )
        {
            erreurIterable(iterable);
        }
        
        for (let element of iterable)
        {
            liste.append(element);
        }
        return liste;
              
    }

    *[Symbol.iterator]() 
    { 
        /* 
        Permet d'itérer sur toutes les valeurs de la liste 
    
        Exemple:
            -> for (let valeur of new List(1, 2, 3))
               {
                    console.log(valeur);
               }
        */
        for (let element of this.tab)
        {
            yield element;
        }
    }

    all()
    {
        /* 
        Renvoit true si tous les éléments de la liste sont évalués à true, sinon renvoit false
        Si la liste est vide, elle renvoit true
    
        Exemple:
            -> let v = new List(1, 2, 3).all();
            -> let v = new List(1, 2, 0).all();
            -> let v = new List().all();
        */
        let test = true;

        for (let element of this)
        {
            if (!element)
            {
                test = false;
            }
        }
        return test;
    } 

    any()
    {
        /* 
        Renvoit true si au moins l'un des éléments de la liste est évalué à true sinon renvoit false
        Si la liste est vide, elle renvoit false
        
        Exemple:
            -> let v = new List(1, 2, 3).any();
            -> let v = new List(0, 0, 0).any();
            -> let v = new List().any();
        */
        let test = false;

        for (let element of this)
        {
            if (element)
            {
                test = true;
            }
        }
       
        return test;
    }

    append(valeur)
    {
        /* 
        Ajoute une valeur à la fin de la liste

        Paramêtres:
            -> valeur: Object: La valeur à ajouter

        Exemple:
            -> let l = new List(1, 2, 3);
               l.append(4);
        */
        if (typeof valeur == "undefined")
        {
            erreurArguments("append", 1);
        }
        
        this.tab.push(valeur);
    }

    clear()
    {
        /* 
        Vide la liste (supprime tout son contenu)
         
        Exemple:
            -> let l = new List(1, 2, 3);
               l.clear();      
        */
    
        this.tab = [];
    }

    contains(valeur)
    {
        /* 
        Renvoit true si une valeur appartient à la liste, sinon false
        
        Paramêtres:
            -> valeur: Object: L'élément à tester
        
        Retour:
            -> Boolean

        Exemple:
            -> let v = new List("a", "b", "c").contains("c");
            -> let v = new List("a", "b", "c").contains("d");
        */
        if (typeof valeur == "undefined")
        {
            erreurArguments("contains", 1);
        }
        
        return this.tab.includes(valeur);
    }

    copy()
    {
        /* 
        Renvoit une copie de la liste
     
        Retour:
            -> List

        Exemple:
            -> let l = new List("a", "b", "c").copy();
        */
        return List.toList(this.tab.slice());
    }

    count(valeur)
    {
        /* 
        Compte le nombre d'occurrences d'une valeur
         
        Paramêtres:
            -> valeur: Object: La valeur à compter

        Retour:
            -> Number
        
        Exemple:
            -> let v = new List("a", "b", "a", "c", "a").count("a");
            -> let v = new List("a", "b", "a", "c", "a").count("d");  
        */
        if (typeof valeur == "undefined")
        {
            erreurArguments("count", 1);
        }
        
        let compteur = 0;
        for (let element of this)
        {
            if (element == valeur)
            {
                compteur += 1;
            }
        }
        return compteur;
    }

    duplicate(nb)
    {
        /* 
        Duplique plusieurs fois le contenu de la liste  
        Si le nombre donné est inférieur ou égal à 0, la liste est vidée
         
        Paramêtres:
            -> nb: Number: Le nombre de fois que le contenu doit être dupliqué
        
        Exemple:
            -> let l = new List(1, 2, 3);
               l.duplicate(3);
            -> let l = new List(1, 2, 3);
               l.duplicate(0);        
        */
        let typeNb = typeof nb;
        let iterable = this.copy();

        if (typeNb == "undefined")
        {
            erreurArguments("duplicate", 1);
        }
        else if (typeNb != "number")
        {
            erreurType("nb", "number", nb);
        }
        else if (!Number.isInteger(nb))
        {
            erreurDecimal("nb");
        }
       
        if (nb <= 0)
        {
            this.tab = [];
        }
        else 
        {
            for (let i=0 ; i < nb-1 ; i += 1)
            {
                for (let element of iterable)
                {
                    this.append(element);
                }
            }
        } 
    }

    *enumerate()
    {
        /* 
        Renvoit un générateur de Array au format [indice, valeur] avec
        indice : l'indice de chaque élément
        valeur : la valeur de chaque élément

        Exemple:
            -> for (let [indice, valeur] of new List(1, 2, 3).enumerate())
               {
                    console.log(indice, valeur);
               }
        */
        for (let i=0 ; i < this.len() ; i += 1)
        {
            yield [i, this.get(i)];
        }
    }

    extend(iterable)
    {
        /* 
        Concatène tous les éléments d'un itérable à la fin de la liste 
         
        Paramêtres:
            -> iterable: Iterable: L'itérable à concaténer
        
        Exemple:
            -> let l = new List(1, 2, 3);
               l.extend([4, 5, 6]);
            -> let l = new List(1, 2, 3);
               l.extend([4, "hello"]); 
            -> let l = new List(1, 2, 3);
               l.extend(new List(4, 5, 6));
               
        */
        if (typeof iterable == "undefined")
        {
            erreurArguments("extend", 1);
        }
        else if ( !(Symbol.iterator in Object(iterable)) )
        {
            erreurIterable(this);
        }
  
        if (iterable == this)
        {
            iterable = this.copy();
        }

        for (let element of iterable)
        {
            this.append(element);
        }
    
    }
    
    fill(nb, valeur)
    {
        /* 
        Permet d'ajouter une valeur plusieurs fois dans la liste
        Si le nombre est inférieur ou égal à 0, la liste est inchangée

        Paramêtres:
            - nb: Number (entier): Le nombre de fois 
            - valeur: Object: La valeur à rajouter 
         
        Exemple:
            -> let l = new List("a", "b", "c");
               l.fill(4, "d");     
        */
        if (typeof nb == "undefined" || typeof valeur == "undefined")
        {
            erreurArguments("fill", 2);
        } 
        if (typeof nb != "number")
        {
            erreurType("fill", "number", nb);
        }
        else if (!Number.isInteger(nb))
        {
            erreurDecimal("nb");
        }
        
        for (let i=0 ; i < nb ; i += 1)
        {
            this.append(valeur);
        }    
    }
 
    filter(fonction)
    {
        /* 
        Permet d'executer une fonction callback sur tous les éléments de la liste

        Cette fonction doit prendre 1 paramêtre (l'élément courant) et renvoyer 1 booléen. 
        Elle va renvoyer une copie de la liste dont tous les éléments de la fonction renvoit true

        Paramêtres:
            - fonction: function: La fonction à appliquer

        Retour:
            -> List
         
        Exemple:
            -> let l = new List(1, 4, -3, 8, -5).filter( nb => nb > 0 );
        */
        if (typeof fonction == "undefined")
        {
            erreurArguments("fonction", 1);
        }
        else if (typeof fonction != "function")
        {
            erreurType("fonction", "function", fonction);
        }
        
        return List.toList(this.tab.filter(fonction)); 
    }

    get(index)
    {
        /* 
        Récupère un élément de la liste 
       
        Les index fonctionnent avec les nombres positifs 
        0 : premier élément
        1 : deuxième élément
        ...
        length-1 : dernier élément

        Mais également avec les nombres négatifs
        -1 : dernier élément
        -2 : avant dernier élément
        ...
        -length : premier élément 

        Paramêtres:
            -> index: Number (entier): L'index de l'élément à récupérer

        Retour:
            -> Object 

        Exemple:
            -> let v = new List("a", "b", "c").get(2);
            -> let v = new List("a", "b", "c").get(-3);
        */
        let typeIndex = typeof index;

        if (typeIndex == "undefined")
        {
            erreurArguments("get", 1);
        }
        else if (typeIndex != "number")
        {
            erreurType("index", "number", index);
        }
        else if (!Number.isInteger(index))
        {
            erreurDecimal("index");
        }
        else if (index < - this.len() || index >= this.len())
        {
            erreurIndex("index");
        }

        if (index >= 0)
        {
            return this.tab[index];
        }
        else 
        {
            return this.tab[this.len() + index];
        }
    }
  
    index(valeur)
    {
        /* 
        Récupère l'indice de la première occurrence d'une valeur donnée 
        Lève une erreur erreurNonAppartenance si la valeur n'est pas dans la liste
         
        Paramêtres:
            -> valeur: Object: La valeur à compter

        Retour:
            -> Number
        
        Exemple:
            -> let v = new List("a", "b", "a", "c", "a").index("a");
        */
        
        if (typeof valeur == "undefined")
        {
            erreurArguments("index", 1);
        }
        
        let trouve = false;
        let indice = 0;
        let element = null;
           
        for ([indice, element] of this.enumerate())
        {
            if (element == valeur)
            {
                trouve = true;
                break;
            }
        }

        if (trouve)
        {
            return indice;
        }
        else 
        {
            erreurNonAppartenance(valeur, this);
        }
        
    }

    insert(index, valeur)
    {
        /* 
        Insère une valeur à l'intérieur de la liste

        0 : avant la première élément
        1 : entre le premier et le deuxième élément
        2 : entre le deuxième et le troisième élément
        ...
        length : à la fin de la liste 

        Ne fonctionne pas avec les index négatifs

        Paramêtres:
            -> index: Number (entier): L'index de l'élément à récupérer
            -> valeur: Object: La valeur à ajouter

        Exemple:
            -> let l = new List("a", "b", "c");
               l.insert(0, "d");
            -> let l = new List("a", "b", "c");
               l.insert(1, "d");
            -> let l = new List("a", "b", "c");
               l.insert(3, "d");
        */
        let typeIndex = typeof index;
        let typeValeur = typeof valeur;

        if (typeIndex == "undefined" || typeValeur == "undefined")
        {
            erreurArguments("insert", 2);
        }
        else if (typeIndex != "number")
        {
            erreurType("index", "number", index);
        }
        else if (!Number.isInteger(index))
        {
            erreurDecimal("index");
        }
        else if (index > this.len() || index < 0)
        {
            erreurIndex("index");
        }
        
        this.tab.splice(index, 0, valeur);
    }

    join(separateur)
    {
        /* 
        Transforme tous les éléments de liste en chaine de caractères et les concatène, 
        chaque élément est séparé par une autre chaine appelée délimiteur

        Retour:
            -> String

        Exemple:
            -> let v = new List(1, 2, 3).join(" ");
            -> let v = new List(1, 2, 0).join("--");
        */
        let typeSeparateur = typeof separateur; 
        if (typeSeparateur  == "undefined")
        {
            erreurArguments("join", 1);
        }
        else if (typeSeparateur != "string")
        {
            erreurType("separateur", "string", separateur);
        }

        let chaine = "";
        for (let [indice, element] of this.enumerate())
        {
            if (indice != this.len() - 1)
            {
                chaine += (element + separateur);
            }
            else
            {
                chaine += (element);
            }
        }
        return chaine;
        
    }

    len()
    {
        /* 
        Renvoit le nombre d'éléments de la liste 

        Retour:
            -> Number

        Exemple:
            -> let v = new List().len();
            -> let v = new List(1, 2, 3).len();
        */
        return this.tab.length;
    }

    map(fonction)
    {
        /* 
        Permet d'executer une fonction callback sur tous les éléments de la liste.
        Elle ne modifie pas la liste courante mais renvoit une copie 
        
        Cette fonction doit prendre 1 paramêtre (l'élément courant) et renvoyer 1 valeur

        Paramêtres:
            - fonction: function: La fonction à appliquer

        Retour:
            -> List
         
        Exemple:
            -> let l = new List(1, 2, 3).map( nb => nb * nb );
        */
        if (typeof fonction == "undefined")
        {
            erreurArguments("fonction", 1);
        }
        else if (typeof fonction != "function")
        {
            erreurType("fonction", "function", fonction);
        }

        return List.toList(this.tab.map(fonction)); 
    }

    max()
    {
        /* 
        Renvoit le plus grand élément de la liste.
        Lève une erreur erreurHomogene si tous les éléments ne sont pas du même type
        Lève une erreur erreurVide si la liste est vide 

        Renvoit:
            -> Object
         
        Exemple:
            -> let v = new List(7, 2, -4, 6, -8).max();  
            -> let v = new List("a", "b", "a", "c", "a").max();
        */
        if (this.len() != 0)
        {
            let type = typeof this.get(0);
            let maxi = this.get(0);
            let memeType = true;

            for (let elem of this)
            {
                if (elem > maxi)
                {
                    maxi = elem;
                }

                if (typeof elem != type)
                {
                    memeType = false;
                }
            }

            if (!memeType)
            {
                erreurHomogene(this);
            }
            else 
            {
                return maxi;
            }
        }
        else 
        {
            erreurVide(this);
        }
    }

    min()
    {
        /* 
        Renvoit le plus petit élément de la liste.
        Lève une erreur erreurHomogene si tous les éléments ne sont pas du même type
        Lève une erreur erreurVide si la liste est vide 

        Renvoit:
            -> Object
         
        Exemple:
            -> let v = new List(7, 2, -4, 6, -8).min(); 
            -> let v = new List("a", "b", "a", "c", "a").min();
        */
        if (this.len() != 0)
        {
            let type = typeof this.get(0);
            let mini = this.get(0);
            let memeType = true;

            for (let elem of this)
            {
                if (elem < mini)
                {
                    mini = elem;
                }

                if (typeof elem != type)
                {
                    memeType = false;
                }
            }

            if (!memeType)
            {
                erreurHomogene(this);
            }
            else 
            {
                return mini;
            }
        }
        else 
        {
            erreurVide(this);
        }
    }

    pop(index)
    {
        /* 
        Renvoit et supprime de la liste la valeur correspondant à l'indice donnée
        Ne fonctionne pas avec les index négatifs. 

        Si le paramêtre index n'est pas précisé, le dernier élément sera renvoyé et supprimé

        Paramêtres:
            -> index: Number (entier) || undefined: L'index de l'élément à supprimer
        
        Retour:
            -> Object

        Exemple:
            -> let l = new List("a", "b", "c");
               let v = l.pop();
            -> let l = new List("a", "b", "c");
               let v = l.pop(1);
        */
        let typeIndex = typeof index;
        let indice = 0;
        let valeur = null; 

        if (typeIndex != "number" && typeIndex != "undefined")
        {
            erreurType("index", "number", index);
        }
        else if (!Number.isInteger(index) && typeIndex != "undefined")
        {
            erreurDecimal("index");
        }
        else if (index >= this.len() || index < 0)
        {
            erreurIndex("index");
        }
        
        if (typeIndex == "undefined")
        {
                indice = this.len() - 1;
        }
        else 
        {
            indice = index;
        }

        valeur = this.tab[indice];
        this.tab.splice(indice, 1);
        return valeur;
       
    }

    remove(valeur)
    {
        /* 
        Supprime une valeur de la liste. Lève une erreur erreurNonAppartenance 
        si la valeur n'est pas dans la liste. Si la valeur est présente plusieurs fois,
        seule la première occurrence est supprimée

        Paramêtres:
            -> valeur: Object: La valeur à supprimer

        Exemple:
            -> let l = new List("a", "b", "c");
               l.remove("b");
            -> let l = new List("a", "b", "c", "b", "d");
               l.remove("b");
        */
        if (typeof valeur == "undefined")
        {
            erreurArguments("remove", 1);
        }
        
        let trouve = false;
        let indice = 0;
        let element = null;

        for ([indice, element] of this.enumerate())
        {
            if (element == valeur)
            {
                trouve = true;
                break;
            }
        }
        
        if (trouve)
        {
            this.pop(indice);
        }
        else
        {
            throw new erreurNonAppartenance(valeur, this);
        }
        
    }
   
    reverse()
    {
        /* 
        Renverse la liste (inverse son sens)
         
        Exemple:
            -> let l = new List(1, 2, 3);
               l.reverse();   
        */
    
        this.tab = this.tab.reverse();
    }

    set(index, valeur)
    {
        /* 
        Modifie un élément de la liste

        Les index fonctionnent avec les nombres positifs 
        0 : premier élément
        1 : deuxième élément
        ...
        length-1 : dernier élément

        Mais également avec les nombres négatifs
        -1 : dernier élément
        -2 : avant dernier élément
        ...
        -length : premier élément 
        
        Paramêtres:
            -> index: Number (entier): L'index de l'élément à récupérer
            -> valeur: Object: La nouvelle valeur à affecter

        Exemple:
            -> let l = new List("a", "b", "c");
               l.set(2, "d");
            -> let l = new List("a", "b", "c");
               l.set(-3, "d");
        */
        let typeIndex = typeof index;
        let typeValeur = typeof valeur;

        if (typeIndex == "undefined" || typeValeur == "undefined")
        {
            erreurArguments("set", 2);
        }
        else if (typeIndex != "number")
        {
            erreurType("index", "number", index);
        }
        else if (!Number.isInteger(index))
        {
            erreurDecimal("index");
        }
        else if (index < - this.len() || index >= this.len())
        {
            erreurIndex("index");
        }
        
        if (index >= 0)
        {
            this.tab[index] = valeur;
        }
        else 
        {
            this.tab[this.len() + index] = valeur;
        }
        
    }

    slice(...parametres)
    {
        /* 
        Permet d'accéder à des éléments de la liste à travers un slice 

        Un slice est une copie d'une partie de la liste avec un indice de début et un indice de fin 
        et éventuellement un pas (facultatif, 1 par défaut)

        Le pas peut également être négatif, dans ce cas la valeur de fin et de début sont inversées
        Les valeurs de début et de fin ne peuvent pas être négatives 

        Si le pas est positif, l'indice de début est inclu et l'indice de fin exclu
        Si le pas est négatif, l'indice de début est exclu et l'indice de fin inclu 
        
        Renvoit:
            -> List
         
        Exemple:
            -> let l = new List("a", "b", "c", "d", "e", "f").slice(0, 3); 
            -> let l = new List("a", "b", "c", "d", "e", "f").slice(0, 6); 
            -> let l = new List("a", "b", "c", "d", "e", "f").slice(0, 6, 2); 
            -> let l = new List("a", "b", "c", "d", "e", "f").slice(0, 6, 3); 
            -> let l = new List("a", "b", "c", "d", "e", "f").slice(6, 0, -1); 
            -> let l = new List("a", "b", "c", "d", "e", "f").slice(6, 0, -2); 
        */
        if (parametres.length < 2)
        {
            erreurArguments("slice", 2);
        }
        
        let valeurParametre = null;
        let typeParametre = "";

        let nomParametres = ["debut", "fin", "pas"];
        let nomParametre = "";
            
        for (let [indiceParametre, _] of this.enumerate())
        {
            valeurParametre = parametres[indiceParametre];
            typeParametre = typeof valeurParametre;
            nomParametre = nomParametres[indiceParametre];

            if (typeParametre != "number" && typeParametre != "undefined")
            {
                erreurType(nomParametre, "number", typeParametre);
            }
            else if (!Number.isInteger(valeurParametre) && typeParametre != "undefined")
            {
                erreurDecimal(nomParametre);
            }
            else if (valeurParametre < - this.len() || valeurParametre > this.len())
            {
                erreurIndex(nomParametre);
            }
        }

        let debut = parametres[0];
        let fin = parametres[1];
        let pas = 1;
        let listeCopie = new List();
            
        if (parametres.length > 2)
        {
            pas = parametres[2];
            if (pas == 0)
            {
                erreurZero("pas");
            }
        }

        if (pas >= 0)
        {
            for (let i=debut ; i < fin ; i += pas)
            {
                listeCopie.append(this.tab[i]);
            }
        }
        else 
        {
            for (let i=debut ; i > fin ; i += pas)
            {
                listeCopie.append(this.tab[i-1]);
            }
        }

        return listeCopie;
       
    }

    sort(cle)
    {
        /* 
        Trie la liste si tous les éléments sont homogènes (du même type)
        Le tri se fait sur l'ordre de comparaison par défaut (numérique, alphanumérique...)

        On peut préciser en argument une fonction callback facultative pour redéfinir l'ordre
        Cette callback prend 2 valeurs en arguments, l'élément actuel et l'élément suivant 
        et doit renvoyer
        - un nombre négatif : si l'élément courant est inférieur au suivant
        - zéro : si l'élément courant est égal au suivant
        - un nombre positif : si l'élément courant est supérieur au suivant
         
        Exemple:
            -> let l = new List(7, 2, -4, 6, -8); 
               l.sort(); 
            -> let l = new List("a", "b", "a", "c", "a");
               l.sort();
            -> let l = new List(7, 2, -4, 6, -8); // Pour trier dans l'ordre décroissant 
               l.sort( (a, b) => a > b ? -1 : a < b ? 1 : 0 );
        */
        if (typeof cle != "function" && typeof cle != "undefined")
        {
            erreurType("cle", "function", cle);
        }


        if (this.len() != 0)
        {
            let type = typeof this.get(0);
            let memeType = true;

            for (let elem of this)
            {
                if (typeof elem != type)
                {
                    memeType = false;
                }
            }

            if (!memeType)
            {
                erreurHomogene(this);
            }
        }
        this.tab = this.tab.sort(cle);
    }

    sum()
    {
        /* 
        Renvoit la somme de tous les éléments de la liste.
        Lève une erreur erreurHomogene si tous les éléments ne sont pas du même type
        Renvoit 0 si la liste est vide 

        Renvoit:
            -> Object
         
        Exemple:
            -> let v = new List(1, 2, 3).sum();       
            -> let v = new List("a", "b", "c").sum();
        */
        if (this.len() != 0)
        {
            let type = typeof this.get(0);
            let somme = null;
            let memeType = true;

            for (let elem of this)
            {
                if (somme == null)
                {
                    somme = elem;
                }
                else 
                {
                    somme += elem;
                }

                if (typeof elem != type)
                {
                    memeType = false;
                }
            }

            if (!memeType)
            {
                erreurHomogene(this);
            }
            else 
            {
                return somme;
            }
        }
        else 
        {
            return 0;
        }
    }

    toArray()
    {
        /* 
        Convertit la liste en Array 

        Retour:
            -> Array 

        Exemple:
            -> let v = new List(1, 2, 3).toArray();
        */
        return this.tab;
    }

    toString()
    {
        /* 
        Représentation textuelle d'une liste 
        Une liste est délimitée par <>

        Renvoit:
            -> String

        Exemple:
            -> let v = new List().toString();
            -> let v = new List(1, 2, 3).toString();
            -> let v = new List(1, "a", true, 5.6, [1, 2, 3]).toString();
            -> let v = new List([1, 2, 3], [4, 5, 6]).toString();
            -> let v = new List(new List()).toString();
            -> let v = new List(new List(1, 2, [3, 4, 5]), 6, 7).toString();
            -> let v = new List(8, "hello", new List(1, 2, [3, 4, 5]), 6, 7).toString();
        */
        let repr = "<";
       
        for (let [indice, element] of this.enumerate())
        {
            if (Array.isArray(element))
            {
                if (indice < this.len() - 1)
                {
                    repr += `[${element}], `;
                }
                else 
                {
                    repr += `[${element}]`;
                }
            }
            else 
            {
                if (indice < this.len() - 1)
                {
                    repr += `${element}, `;
                }
                else 
                {
                    repr += `${element}`;
                }
            }  
        }
        repr += ">";
        return repr;
    }
}



export class Random 
{
    /* 
    Classe qui possède un ensemble de méthodes utilitaires sur la génération aléatoire 
    basées sur le module random de Python
    */

    static choice(iterable)
    {
        /*
        Renvoit un élément aléatoire d'un itérable 
        
        Parametres:
            - iterable: Iterable: Itérable dans lequel renvoyer un élément

        Return: 
            -> Object

        Exemples:
            -> let v = Random.choice(["a", "b", "c"]);
            -> let v = Random.choice(new List("a", "b", "c"));
        */
        if (typeof iterable == "undefined")
        {
            erreurArguments("choice", 1);
        }
        else if ( !(Symbol.iterator in Object(iterable)) )
        {
            erreurIterable(iterable);
        }

        if (iterable instanceof List)
        {
            return iterable.get(Random.randint(0, iterable.len() - 1));
        }
        else 
        {
            return iterable[Random.randint(0, iterable.length - 1)];
        }
    }

    static randint(min, max)
    {
        /*
        Genère un nombre entier aléatoire entre min (inclu) et max (inclu)

        Parametres:
            - min: Number (entier): premier nombre
            - max: Number (entier): deuxième nombre

        Return: 
            -> Number

        Exemples:
            -> let v = Random.genererNombre(2, 5);
        */
        if (typeof min == "undefined" || typeof max == "undefined")
        {
            erreurArguments("random", 2);
        }
        else if (typeof min != "number")
        {
            erreurType("min", "number", min);
        }
        else if (typeof max != "number")
        {
            erreurType("max", "number", max);
        }
        else if (!Number.isInteger(min))
        {
            erreurDecimal("min");
        }
        else if (!Number.isInteger(max))
        {
            erreurDecimal("max");
        }

        let intervalle = max - min;
        return Math.round(Math.random() * intervalle) + min;
    }

    static shuffle(iterable)
    {
        /*
        Mélange un itérable (attention, l'objet courant est modifié)
        
        Parametres:
            - iterable: Iterable: Itérable à mélanger

        Exemples:
            -> let l = Random.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            -> let l = Random.shuffle(new List(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
        */
        if (typeof iterable == "undefined")
        {
            erreurArguments("shuffle", 1);
        }
        else if ( !(Symbol.iterator in Object(iterable)) )
        {
            erreurIterable(iterable);
        }

        let indice1 = 0;
        let indice2 = 0;
        let tmp = null;

        if (iterable instanceof List)
        {
            for (let i=0 ; i < 300 ; i += 1)
            {
                indice1 = Random.randint(0, iterable.len() - 1);
                indice2 = Random.randint(0, iterable.len() - 1);
                tmp = iterable.get(indice1);
                iterable.set(indice1, iterable.get(indice2));
                iterable.set(indice2, tmp);
            }
        }
        else 
        {
            for (let i=0 ; i < 300 ; i += 1)
            {
            
                indice1 = Random.randint(0, iterable.length - 1);
                indice2 = Random.randint(0, iterable.length - 1);
                tmp = iterable[indice1];
                iterable[indice1] = iterable[indice2];
                iterable[indice2] = tmp;
            }
            
        }
        
    }
}



export class Gentools 
{
    /* 
    Classe qui possède un ensemble de générateurs, il est basé sur itertools de Python
    */

    static *chain(...iterables)
    {
        /*
        Renvoit un générateur du chainage des itérables

        Le chainage correspond à tous les éléments du 1er itérable, 
        puis du 2ième, puis du 3ième ... 

        Paramêtres:
            - ...iterables: Iterable: Nombre variable d'itérables à chainer

        Retour:
            -> generator

        Exemple:
            for (let valeur of Gentools.chain([1, 2, 3], "abc"))
            {
                console.log(valeur);
            }
        */
        for (let iterable of iterables)
        {
            if ( !(Symbol.iterator in Object(iterable)) )
            {
                erreurIterable(iterable);
            }
        }

        for (let iterable of iterables)
        {
            for (let element of iterable)
            {
                yield element;
            }
        }
    }

    static *compress(iterable1, iterable2)
    {
        /*
        Prend 2 iterables de même taille et renvoit un générateur
        qui garde tous les éléments du premier iterable dont 
        l'élément du deuxième itérable (même indice) est évalué à true
.. 
        Paramêtres:
            - iterable1: Iterable: itérable des éléments à filtrer
            - iterable2: Iterable: itérables d'éléments qui seront vrais ou faux

        Retour:
            -> generator

        Exemple:
            for (let valeur of Gentools.compress(["a", "b", "c", "d", "e"], [0, 1, 1, 0, 1]))
            {
                console.log(valeur);
            }
        */
        if (typeof iterable1 == "undefined" || typeof iterable2 == "undefined")
        {
            erreurArguments("compress", 2);
        }
        else if (!(Symbol.iterator in Object(iterable1)))
        {
            erreurIterable(iterable1);
        }
        else if (!(Symbol.iterator in Object(iterable2)))
        {
            erreurIterable(iterable2);
        }

        if (iterable1 instanceof List)
        {
            iterable1 = iterable1.toArray();
        }
    
        if (iterable2 instanceof List)
        {
            iterable2 = iterable2.toArray();
        }

    
        if (iterable1.length != iterable2.length)
        {
            erreurGenerateur(iterable2);
        }

        let compteur = 0;
        for (let element of iterable1)
        {
            if (iterable2[compteur])
            {
                yield element;
            }
            compteur += 1;
        }

        /*

        if (iterable2 instanceof List)
        {
            iterable2 = iterable2.toArray();
        }

        for (let index in iterable1)
        {
            index = Number(index);

            if ()

            yield [iterable1[index], iterable2[index]];
        }
        */
    }

    static *filterfalse(iterable, fonction)
    {
        /*
        Renvoit un générateur qui filtre tous les éléments d'un itérable
        dont une fonction pour chaque élément associé renvoit false
        (l'inverse de filter)

        Paramêtres:
            - iterable: Iterable: itérable des éléments à filtrer
            - fonction: function: La fonction à appliquer

        Retour:
            -> generator

        Exemple:
            for (let valeur of Gentools.filterfalse([4, 2, -3, 7, -6], nb => nb < 0))
            {
                console.log(valeur);
            }
        */
        if (typeof iterable == "undefined" || typeof fonction == "undefined")
        {
            erreurArguments("filterfalse", 2);
        }
        else if (!(Symbol.iterator in Object(iterable)))
        {
            erreurIterable(iterable);
        }
        else if (typeof fonction != "function")
        {
            erreurType("fonction", "function", fonction);
        }

        for (let element of iterable)
        {
            if (!fonction(element))
            {
                yield element;
            }
        }      
    }

    static *pairwise(iterable)
    {
        /*
        Renvoit un générateur des couples (Array) de chaque élément et de son suivant
        Si l'élément est le dernier, son suivant sera le premier élément 

        Paramêtres:
            - iterable: Iterable: itérable des couples à renvoyer

        Retour:
            -> generator

        Exemple:
            for (let [element, suivant] of Gentools.pairwise("abcdef"))
            {
                console.log(element, suivant);
            }
        */
        if (typeof iterable == "undefined")
        {
            erreurArguments("pairwise", 1);
        }
        else if (!(Symbol.iterator in Object(iterable)))
        {
            erreurIterable(iterable);
        }

        if (iterable instanceof List)
        {
            iterable = iterable.toArray();
        }

        if (iterable.length < 2)
        {
            erreurTailleIterable(iterable, 2);
        }

        for (let index in iterable)
        {
            index = Number(index);
            if (index != iterable.length - 1)
            {
                yield [iterable[index], iterable[index+1]];
            }
            else 
            {
                yield [iterable[index], iterable[0]];
            }
        }
    }

    static *zip(...iterables)
    {
        /*
        Renvoit un générateur d'Array ou chaque élément de chaque itérable sont associés
        entre eux par leur indice 

           [1ier élément du premier itérable, 
            2ième élément du premier itérable, 
            3ième élément du premier itérable]

            [1ier élément du deuxième itérable, 
            2ième élément du deuxième itérable, 
            3ième élément du deuxième itérable]
            ...

        Paramêtres:
            - ...iterables : Iterable : Nombre variable d'itérables à associer

        Retour:
            -> generator

        Exemple:
            for (let valeur of Gentools.zip([1, 2, 3], "abc"))
            {
                console.log(valeur);
            }
        */
        if (!iterables.length)
        {
            erreurArguments("zip", 1);
        }

        let nombreIterables = iterables.length;

        for (let iterable of iterables)
        {
            if (!(Symbol.iterator in Object(iterable)))
            {
                erreurIterable(iterable);
            }

            if (iterable instanceof List)
            {
                iterable = iterable.toArray();
            }
        }

        let tailleIterables = iterables[0].length;

        for (let iterable of iterables)
        {
            if (iterable.length != tailleIterables)
            {
                erreurGenerateur(iterable);
            }
        }

        let generation = [];

        for (let element in iterables[0])
        {
            for (let iterable in iterables)
            {
                iterable = Number(iterable);
                element = Number(element);
                generation.push(iterables[iterable][element]);
                
            }
            yield generation;
            generation = [];
        }
    }
}