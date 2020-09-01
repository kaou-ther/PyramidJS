function pyramid() {
  var input = parseInt(prompt('Salut, bienvenue dans ma super pyramide ! Combien d\'étages veux-tu ?'));
  if (!Number.parseInt(input) || (Number.parseInt(input) > 25)) {

    console.log('R\éponse invalide.\n NB: Le nombre des étages de la pyramide ne d\épasse pas 25.\n Essayez encore! ')
    pyramid();
  } else {
    console.log('Voici la pyramide :\n');
    pyramidScheme(input);
  }
}

function pyramidScheme(n) {
  for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '#'.repeat(2 * i - 1));
  }
}
  pyramid();
