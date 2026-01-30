function Calculadora() {
  this.nome = 'Calculadora';
  this.display = document.querySelector('.display');

  this.inicia = () => {
    this.cliqueBotoes();
    this.pressionaEnter();
  };

  this.pressionaEnter = () => {
    this.display.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.realizaConta();
      }
    });
  };

  this.btnParaDisplay = (valor) => {
    this.display.value += valor;
  };

  this.clearDisplay = () => {
    this.display.value = '';
  };

  this.apagaDigito = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.realizaConta = () => {
    const conta = this.display.value;

    try {
      const resultado = eval(conta);

      if (resultado === undefined || resultado === null) {
        alert('Conta inválida');
        return;
      }

      this.display.value = String(resultado);
    } catch (e) {
      alert('Conta inválida');
    }
  };

  this.cliqueBotoes = () => {
    document.addEventListener('click', (e) => {
      const el = e.target;

      if (el.classList.contains('btn-num')) {
        let valor = el.innerText;
        if (valor === 'x') valor = '*';
        if (valor === '÷') valor = '/';

        this.btnParaDisplay(valor);
        this.display.focus();
        return;
      }

      if (el.classList.contains('btn-clear')) {
        this.clearDisplay();
        this.display.focus();
        return;
      }

      if (el.classList.contains('btn-del')) {
        this.apagaDigito();
        this.display.focus();
        return;
      }

      if (el.classList.contains('btn-eq')) {
        this.realizaConta();
        this.display.focus();
        return;
      }
    });
  };
}

const calc = new Calculadora();
calc.inicia();
