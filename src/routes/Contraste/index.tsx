import { useTheme } from '../../contexts/ThemeContext';

const Contraste = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Modo de Contraste</h1>
      <p>O tema atual é: <strong>{theme === 'dark' ? 'Escuro' : 'Claro'}</strong></p>
      <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>
        Alterar o contraste da interface pode melhorar significativamente a acessibilidade e o conforto visual.
        Para pessoas com baixa visão, sensibilidade à luz ou dificuldades de leitura, o modo de contraste elevado
        facilita a distinção entre elementos da tela, reduz o cansaço ocular e torna a navegação mais intuitiva.
        Essa opção também é útil em ambientes com muita luz ou para quem prefere uma experiência visual mais suave.
      </p>
      <button
        onClick={toggleTheme}
        style={{
          padding: '10px 20px',
          backgroundColor: theme === 'dark' ? '#444' : '#ddd',
          color: theme === 'dark' ? '#fff' : '#000',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '1rem',
        }}
      >
        Alternar para {theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
      </button>
    </div>
  );
};

export default Contraste;