
const firstExe = <div className="exe1"><h1>Exercício 1</h1>
<p>"Primeiro"</p>
<p>"Quinto"</p>
<p>"Segundo"</p>
<p>"Quarto"</p>
<p>"Terceiro"</p>
<p>Devido a execução de stack do JS,
as funções de console.log() sem timeout serão executadas primeiro,<br></br>
logo após, serão executadas as funções com timeout, pois essa tarefa<br></br>
é repassada para o navegador!</p>
</div>
const secondExe = <div className="exe1"><h1>Exercício2</h1><p> A call stack é a fila de execução de funções do Javascript,
     , uma função setInterval e setTimeout são tarefas do navegador, então estarão na callback queue.</p>
     <p>as funções em callback queue são adicionadas logo após todas as micro task queue e as funções do JS serem executadas</p></div>

const forthExe = <div className="exe1"><h1>Exercício4</h1>
          <p>erro:Caught on catch, it's a Rej</p>
     </div>
     const fifthExe = <div className="exe1"><h1>Exercício 5</h1>
     <p>Os métodos estáticos de uma promise são:</p>
     <p>Resolve: quando retorna com sucesso</p>
     <p>new Promise((res, rej)  res(console.log('hi')))</p>
     <p>Reject: quando retorna sem sucesso</p>
     <p>new Promise ((res, rej) rej(new Error('404')))</p></div>

const credentials = {
     User:'Vitor Pedra',
     Email:'pedra@pedra.com',
     Authorized:true

}
const sixthExe = <div className="exe1"><h1>Exercício 6</h1>
<p> User: {credentials.User}</p>
<p>Email:{credentials.Email}</p>
<p>Authorized: {credentials.Authorized? "Authorized":"Unauthorized"}</p></div>




const seventhExe=<div className="exe1"><h1>Exercício 7</h1>
    <p>Fetching data from the url we got the name</p>
    </div>

const eighthExe = <div className="exe1"><h1>Exercício 8</h1>
<p>No exercício 6 tivemos a resposta após 3 segundos,</p>
<p>aqui utilizamos Async e Await para receber a mesma promise</p></div>

const ninethExe= <div className="exe1"><h1>Exercício 9</h1>
<p>No exercício 7 obtivemos a resposta de uma api externa</p>
<p>Aqui utilizamos novamente com Async e Await</p>
<p>perceba que o texto só aparece quando realiza a tarefa</p></div>

export {firstExe,secondExe,forthExe, fifthExe, sixthExe, seventhExe, eighthExe, ninethExe}