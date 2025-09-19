import { hotDeals } from "./HotdealList";

type HotDealsProps = {
  selectedHotDeals: string[];
  onHotDealsChange: (deals: string[]) => void;
};

export default function HotDeals({
  selectedHotDeals,
  onHotDealsChange,
}: HotDealsProps) {
  const toggleDeal = (name: string) => {
    if (selectedHotDeals.includes(name)) {
      onHotDealsChange(selectedHotDeals.filter((d) => d !== name));
    } else {
      onHotDealsChange([...selectedHotDeals, name]);
    }
  };

  return (
    <div className="hotDealsWrapper">
      <div className="hotDealsTitle">
        <h2>Hot Deals</h2>
      </div>
      <div className="hotDealsList">
        {hotDeals.map(({ id, name, qunatity }) => {
          const isSelected = selectedHotDeals.includes(name);
          return (
            <label
              key={id}
              className="hotDealItem"
              style={{
                color: isSelected ? "#33A0FF" : "#262626",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={selectedHotDeals.includes(name)}
                onChange={() => toggleDeal(name)}
              />
              <span>{name}</span>
              <span>{qunatity}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
