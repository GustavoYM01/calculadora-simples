function Calculadora() {
  this.display = document.querySelector('.display')

  this.inicia = () => {
    this.capturaCliques()
    this.capturaEnter()
  }

  this.capturaEnter = () => {
    document.addEventListener('keyup', element => {
      if(element.keyCode === 13) {
      this.realizaConta()
      }
    })
  }

  this.capturaCliques = () => {
    document.addEventListener('click', event => {
      const element = event.target

      if(element.classList.contains('btn-num')) this.addNumDisplay(element)
      if(element.classList.contains('btn-clear')) this.clear(element)
      if(element.classList.contains('btn-del')) this.del(element)
      if(element.classList.contains('btn-eq')) this.realizaConta(element)
    })
  }

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value)

      if(!conta) {
        alert('Conta inválida')
        return
      }

      this.display.value = conta
    }
    catch(error) {
      alert('Conta inválida')
      return
    }
  }

  this.addNumDisplay = element => {
    this.display.value += element.innerText
    this.display.focus()
  }
  this.clear = () => this.display.value = ''
  this.del = () => this.display.value = this.display.value.slice(0, -1)

}

const calculadora = new Calculadora()
calculadora.inicia()