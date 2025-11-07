import { useTheme } from '../../contexts/ThemeContext';

const Contraste = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Modo de Contraste</h1>
      <p>O tema atual é: <strong>{theme === 'dark' ? 'Escuro' : 'Claro'}</strong></p>
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