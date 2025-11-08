import { useEffect, useState } from "react";
import { FaPlus, FaMinus, FaPalette, FaFont, FaTextHeight, FaSun, FaMoon, FaUndo, FaEye } from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";

export default function Texto() {
    const { theme } = useTheme();
    const [fontSize, setFontSize] = useState<number | null>(null);
    const [fontColor, setFontColor] = useState<string | null>(null);
    const [fontFamily, setFontFamily] = useState<string | null>(null);

    useEffect(() => {
        const savedSize = localStorage.getItem("fontSize");
        const savedColor = localStorage.getItem("fontColor");
        const savedFamily = localStorage.getItem("fontFamily");

        setFontSize(savedSize ? parseInt(savedSize) : 16);
        setFontColor(savedColor ?? "default");
        setFontFamily(savedFamily ?? "sans-serif");
    }, []);

    useEffect(() => {
        if (fontSize === null || fontColor === null || fontFamily === null) return;

        const root = document.documentElement;

        root.style.setProperty("--user-font-size", `${fontSize}px`);
        root.style.setProperty("--user-font-family", fontFamily);
        localStorage.setItem("fontSize", fontSize.toString());
        localStorage.setItem("fontFamily", fontFamily);

        const userColor = fontColor === "default" ? null : fontColor;
        if (!userColor) {
            const themeColor = getComputedStyle(document.body).getPropertyValue("--text-color").trim();
            root.style.setProperty("--user-font-color", themeColor);
            localStorage.removeItem("fontColor");
        } else {
            root.style.setProperty("--user-font-color", userColor);
            localStorage.setItem("fontColor", userColor);
        }
    }, [fontSize, fontColor, fontFamily, theme]);

    if (fontSize === null || fontColor === null || fontFamily === null) return null;

    const resetToDefault = () => {
        setFontSize(16);
        setFontColor("default");
        setFontFamily("sans-serif");
        localStorage.removeItem("fontSize");
        localStorage.removeItem("fontColor");
        localStorage.removeItem("fontFamily");
    };

    const colorOptions = [
        {
            label: "Cor do tema",
            value: "default",
            icon: theme === "dark" ? <FaMoon /> : <FaSun />,
            style: {
                border: "2px solid var(--user-font-color)",
                backgroundColor: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
            },
        },
        { label: "Preto", value: "#000000", style: { backgroundColor: "#000000" } },
        { label: "Branco", value: "#ffffff", style: { backgroundColor: "#ffffff" } },
        { label: "Vermelho", value: "#ff0000", style: { backgroundColor: "#ff0000" } },
        { label: "Verde", value: "#00ff00", style: { backgroundColor: "#00ff00" } },
        { label: "Azul", value: "#0000ff", style: { backgroundColor: "#0000ff" } },
        { label: "Roxo", value: "#800080", style: { backgroundColor: "#800080" } },
        { label: "Laranja", value: "#ff6600", style: { backgroundColor: "#ff6600" } },
        { label: "Cinza", value: "#666666", style: { backgroundColor: "#666666" } },
        {
            label: "Modo Daltônico",
            value: "#ffcc00",
            icon: <FaEye />,
            style: {
                backgroundColor: "#ffcc00",
                border: "2px dashed #333",
                color: "#000",
                fontSize: "1.2rem",
            },
        }

    ];

    return (
        <div style={{
            maxWidth: "600px",
            margin: "2rem auto",
            padding: "2rem",
            backgroundColor: "var(--card-bg)",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            color: "var(--user-font-color)"
        }}>
            <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>🎨 Configurações de Texto</h1>

            <div style={{ marginBottom: "2rem" }}>
                <label style={{ fontWeight: 600, fontSize: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <FaTextHeight />
                    Tamanho da fonte:
                </label>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginTop: "0.5rem" }}>
                    <button
                        onClick={() => setFontSize(Math.max(fontSize - 1, 10))}
                        style={{
                            ...buttonStyle,
                            backgroundColor: "#ff4d4d",
                            color: "#fff",
                            transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.1)";
                            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >
                        <FaMinus />
                    </button>

                    <span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>{fontSize}px</span>

                    <button
                        onClick={() => setFontSize(Math.min(fontSize + 1, 48))}
                        style={{
                            ...buttonStyle,
                            backgroundColor: "#4CAF50",
                            color: "#fff",
                            transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.1)";
                            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >
                        <FaPlus />
                    </button>

                </div>
            </div>

            <div style={{ marginBottom: "2rem" }}>
                <label style={{ fontWeight: 600, fontSize: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <FaPalette />
                    Cor do texto:
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
                    {colorOptions.map(({ label, value, style, icon }) => (
                        <button
                            key={value}
                            onClick={() => setFontColor(value)}
                            title={label}
                            style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "6px",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                                transform: value === fontColor ? "scale(1.1)" : "scale(1)",
                                border: value === fontColor ? "3px solid var(--user-font-color)" : "none",
                                ...style,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.1)";
                                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = value === fontColor ? "scale(1.1)" : "scale(1)";
                                e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
                            }}

                        >
                            {icon}
                        </button>
                    ))}
                </div>
            </div>

            <div style={{ marginBottom: "2rem" }}>
                <label style={{ fontWeight: 600, fontSize: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <FaFont />
                    Tipo de fonte:
                </label>
                <select
                    value={fontFamily}
                    onChange={(e) => setFontFamily(e.target.value)}
                    style={{
                        padding: "0.5rem",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                        backgroundColor: "var(--bg-color)",
                        color: "var(--user-font-color)",
                        fontSize: "1rem",
                        cursor: "pointer",
                        marginTop: "0.5rem"
                    }}
                >
                    <option value="sans-serif">Sans-serif</option>
                    <option value="serif">Serif</option>
                    <option value="monospace">Monospace</option>
                    <option value="cursive">Cursive</option>
                </select>
            </div>

            <div style={{ textAlign: "center" }}>
                <button onClick={resetToDefault} style={{
                    padding: "0.6rem 1.2rem",
                    fontSize: "1rem",
                    borderRadius: "999px",
                    border: "none",
                    backgroundColor: "#0077ff",
                    color: "#fff",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem"
                }}>
                    <FaUndo />
                    Redefinir para padrão
                </button>
            </div>
        </div>
    );
}

const buttonStyle = {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "var(--card-bg)",
    color: "var(--user-font-color)",
    cursor: "pointer",
};