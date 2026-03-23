# Choix des Design Paterns

Pour cet énoncé, on va utilsier plusierus Design Paterns :

## Adaptater

On va utiliser un Adaptater car les capteurs de la marque A et de la marque B n'utilisent pas la même interface.
Il faut que tout les capteurs soient gérés depuis une même interface

## Observer

On va utiliser un Observer car il faut pouvoir effectuer plusieurs actions différentes (notifications) lorsque qu'un capteur détecte quelque chose

## Strategy 

On va utiliser un Strategie car il va falloir envoyer des notifications sur 3 canaux différents (email, log et Discord), mais l'envoiue de ces notifications se fait d'une façon différente