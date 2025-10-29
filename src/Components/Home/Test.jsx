import { useState } from "react";

export default function DropdownWithAddOption() {
  const [options, setOptions] = useState(["Option1", "Option2"]);
  const [selected, setSelected] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [newOption, setNewOption] = useState("");

  const handleSelectChange = (e) => {
    if (e.target.value === "add-new") {
      setShowInput(true);
      setSelected(""); // reset selection
    } else {
      setSelected(e.target.value);
      setShowInput(false);
    }
  };

  const handleAddOption = () => {
    if (newOption.trim()) {
      setOptions([...options, newOption]);
      setSelected(newOption);
      setNewOption("");
      setShowInput(false);
    } else {
      alert("Please enter a value");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <select value={selected} onChange={handleSelectChange}>
        <option value="" disabled>
          Select an option
        </option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
        <option value="add-new">Add New Option</option>
      </select>

      {showInput && (
        <div style={{ display: "flex", gap: "5px" }}>
          <input
            type="text"
            value={newOption}
            onChange={(e) => setNewOption(e.target.value)}
            placeholder="Enter new option"
          />
          <button type="button" onClick={handleAddOption}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
