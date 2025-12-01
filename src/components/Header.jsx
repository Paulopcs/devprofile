export default function Header({ dark, setDark }) {
  return (
    <header className="header">
      <h2 className="logo">Paulo Eduardo</h2>

        <p><strong>E-mail:</strong> pauloeduardopsilva@gmail.com</p>
        <p><strong>Contato:</strong> (35) 98429-3140</p>
       

      <button className="toggle-btn" onClick={() => setDark(!dark)}>
        {dark ? "🌞 Claro" : "🌙 Escuro"}
      </button>
    </header>
  );
}
