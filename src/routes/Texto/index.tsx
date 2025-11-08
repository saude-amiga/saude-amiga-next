import { useEffect, useState } from "react";

export default function Texto() {
    const [fontSize, setFontSize] = useState(16);
    const [fontColor, setFontColor] = useState("default");
    const [fontFamily, setFontFamily] = useState("sans-serif");

    useEffect(() => {
        const savedSize = localStorage.getItem("fontSize");
        const savedColor = localStorage.getItem("fontColor");
        const savedFamily = localStorage.getItem("fontFamily");

        if (savedSize) setFontSize(parseInt(savedSize));
        if (savedColor) setFontColor(savedColor);
        if (savedFamily) setFontFamily(savedFamily);
    }, []);

    useEffect(() => {
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
    }, [fontSize, fontColor, fontFamily]);


    return (
        <div className="texto-panel">
            <h1>Texto</h1>

            <p>
                <button onClick={() => setFontSize((s) => Math.min(s + 1, 48))}>
                    Aumentar fonte
                </button>
            </p>

            <p>
                <button onClick={() => setFontSize((s) => Math.max(s - 1, 10))}>
                    Diminuir fonte
                </button>
            </p>

            <p>
                Alterar cor do texto:
                <select
                    value={fontColor}
                    onChange={(e) => setFontColor(e.target.value)}
                    style={{ marginLeft: "0.5rem" }}
                >
                    <option value="default">Cor do tema</option>
                    <option value="#000000">Preto</option>
                    <option value="#ffffff">Branco</option>
                    <option value="#ff0000">Vermelho</option>
                    <option value="#00ff00">Verde</option>
                    <option value="#0000ff">Azul</option>
                </select>
            </p>

            <p>
                Alterar fonte:
                <select
                    value={fontFamily}
                    onChange={(e) => setFontFamily(e.target.value)}
                    style={{ marginLeft: "0.5rem" }}
                >
                    <option value="sans-serif">Sans-serif</option>
                    <option value="serif">Serif</option>
                    <option value="monospace">Monospace</option>
                    <option value="cursive">Cursive</option>
                </select>
            </p>
        </div>
    );
}