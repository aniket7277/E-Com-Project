import { colorList } from "./ColorList";

type ColorProps = {
  selectedColors: string[];
  onColorChange: (colors: string[]) => void;
};

export default function Color({ selectedColors, onColorChange }: ColorProps) {
  const toggleColor = (name: string) => {
    if (selectedColors.includes(name)) {
      onColorChange(selectedColors.filter((c) => c !== name));
    } else {
      onColorChange([...selectedColors, name]);
    }
  };

  return (
    <div className="colorWrapper">
      <div className="colorTitle">
        <h2>Color</h2>
      </div>
      <div className="colorList">
        {colorList.map(({ id, name, color }) => (
          <div
            key={id}
            className={`colorItem ${selectedColors.includes(name) ? "selected" : ""}`}
            style={{
              backgroundColor: color,
              border: selectedColors.includes(name) ? "2px solid #000" : "1px solid #ccc",
              cursor: "pointer",
            }}
            onClick={() => toggleColor(name)}
            title={name}
          />
        ))}
      </div>
    </div>
  );
}
