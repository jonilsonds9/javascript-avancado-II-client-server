class ListaNegociacoes {

  constructor(armadilha) {
    this._negociacoes = [];
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
  }

  get negociacoes() {
    return [].concat(this._negociacoes);
  }

  esvazia() {
    this._negociacoes = [];
  }

  ordena(criterio) {
    this._negociacoes.sort(criterio);
  }

  inverteOrdem() {
    this._negociacoes.reverse();
  }

  // novo método
  get volumeTotal() {
    return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
 }
}