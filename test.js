const assert = require('assert');

// La fonction somme() retourne la somme des nombres passés en paramètre.
// Tout paramètre manquant aura 0 comme valeur par défaut.
// Si un des paramètre n'est pas de type `number`, la fonction lèvera une
// exception avec le message d'erreur "paramètre invalide".
function somme(nombre1, nombre2) {
  if (typeof nombre1 !== 'number' || typeof nombre2 !== 'number') {
    throw new Error('paramètre invalide');
  }
  nombre1 = nombre1 || 0;
  nombre2 = nombre2 || 0;
  return nombre1 + nombre2;
}

describe('somme', function() {
  it('Avec les valeurs de paramètres 2 et 3, la fonction somme() est sensée retourner la valeur 5', function() {
    assert.strictEqual(somme(2, 3), 5);
  });

  it('Avec les valeurs de paramètres 0 et 5, la fonction somme() est sensée retourner la valeur 5', function() {
    assert.strictEqual(somme(0, 5), 5);
  });

  it('Avec les valeurs de paramètres 2 et \'a\', la fonction somme() est sensée lever une exception avec le message "paramètre invalide"', function() {
    assert.throws(() => somme(2, 'a'), /paramètre invalide/);
  });
});