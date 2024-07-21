import { useState } from "react";
import { DateInput, DatePickerInput } from "@mantine/dates";
import { Box } from "@mantine/core";

function CustomDatePicker({ label, placeholder }) {
  const [value, setValue] = useState();

  return (
    <Box
      w={110}
      //   bg="red"
      style={{
        borderRight: "1px solid #d1d1d1", // Add right border
        height: "50px", // Set the desired height
        display: "flex",
        alignItems: "center", // Center vertically
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <DatePickerInput
        value={value}
        onChange={setValue}
        label={label}
        placeholder={placeholder}
        variant="unstyled"
        styles={(theme) => ({
          input: {
            border: "none", // Remove border
            boxShadow: "none", // Remove shadow
            padding: 0, // Remove padding
            marginTop: -7,
          },
          label: {
            textAlign: "start", // Align label to start
            marginBottom: 0, // Space between label and input
            marginRight: 40,
          },
          placeholder: {
            color: theme.colors.gray[5], // Placeholder text color
            textAlign: "start", // Align placeholder text to start
          },
        })}
      />
    </Box>
  );
}

export default CustomDatePicker;
