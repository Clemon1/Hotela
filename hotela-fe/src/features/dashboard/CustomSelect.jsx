import { Select } from "@mantine/core";
import "../../styles/App.css"; // Import your custom CSS file

function CustomSelect() {
  return (
    <>
      <Select
        placeholder="Location"
        data={["London", "Manchester", "Birmingham"]}
        styles={(theme) => ({
          placeholder: {
            color: "blue", // Style for the "Location" placeholder
            fontSize: "16px",
          },
        })}
      />
      <Select
        placeholder="Where are you going?"
        data={["London", "Manchester", "Birmingham"]}
        styles={(theme) => ({
          placeholder: {
            color: "green", // Style for the "Where are you going?" placeholder
            fontSize: "20px",
          },
        })}
      />
    </>
  );
}

export default CustomSelect;
