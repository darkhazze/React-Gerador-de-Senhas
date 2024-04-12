import './App.css';
import { useState } from 'react';

function App() {
  //Estados que serão utilizados - senha e texto copiado
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState(12)
  const [showInput, setShowInput] = useState(false)

  //Função geradora de senha
  function generate() { 
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPassword = ""
    //Este loop for irá selecionar uma posição da variavel caracters e irá inserir em newPassword,
    // montando a senha até ter 12 caracteres
    for (let i = 0; i < passwordSize; i++) { 
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setPassword(newPassword)
  }

  //Função que chama a API do navegator copiando a senha para a area de transferencias
  function copyToClipBoard() { 
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
  }

  return (
    <div className="App">
      <h1>Gerador de senhas</h1> 
      <label for="default-password-check">Customizar tamanho?  </label>
      <input type="checkbox"
             id="default-password-check" 
             value={showInput}
             onChange={() => setShowInput(currentState => !currentState)} />
      {showInput ? (
        <div>
        <label htmlFor="passwordSize">Tamanho: </label>
        <input type='number' 
        id="passwordSize" 
        min={1} className="btn"
        value={passwordSize}
        onChange={(ev) => setPasswordSize(ev.target.value)}
        />
      </div>
      ) : null}
      
      
      <button className="btn" onClick={generate}>Gerar senha</button>
      <button className="btn" onClick={copyToClipBoard}>{copyText}</button>
      <div>
        <h2>Sua senha: </h2>
        {password}
        </div>
    </div>
  );
}

export default App;
