export default function Libras() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "2rem auto",
        padding: "2rem",
        backgroundColor: "var(--card-bg)",
        borderRadius: "12px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
        fontSize: "var(--user-font-size)",
        fontFamily: "var(--user-font-family)",
        color: "var(--user-font-color)",
        lineHeight: "1.6",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>🧏‍♀️ Acessibilidade com VLibras</h1>

      <p>
        Este site conta com o recurso de acessibilidade <strong>VLibras</strong>, que permite a
        tradução do conteúdo da página para a <strong>Língua Brasileira de Sinais (Libras)</strong>.
        Essa ferramenta é voltada para pessoas surdas ou com deficiência auditiva, promovendo maior
        inclusão digital.
      </p>

      <h2 style={{ marginTop: "2rem", fontSize: "1.5rem" }}>🔹 Como usar o VLibras</h2>

      <ol style={{ paddingLeft: "1.5rem", marginTop: "1rem" }}>
        <li>
          No canto direito da tela, você verá um botão azul com o símbolo de acessibilidade
          (um bonequinho com os braços abertos).
        </li>
        <li>
          Clique nesse botão para abrir o assistente VLibras. Um avatar aparecerá na tela.
        </li>
        <li>
          O avatar irá traduzir automaticamente os textos da página para Libras.
        </li>
        <li>
          Você também pode selecionar trechos de texto com o mouse e clicar no botão de tradução
          para que o avatar interprete apenas aquela parte.
        </li>
      </ol>

      <h2 style={{ marginTop: "2rem", fontSize: "1.5rem" }}>💡 Dica</h2>
      <p>
        Caso o avatar não esteja visível, verifique se o botão de acessibilidade está ativado ou
        recarregue a página.
      </p>

      <p style={{ marginTop: "2rem" }}>
        Para saber mais sobre o VLibras, acesse o site oficial em{" "}
        <a
          href="https://vlibras.gov.br"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--user-font-color)", textDecoration: "underline" }}
        >
          vlibras.gov.br
        </a>
        .
      </p>
    </div>
  );
}