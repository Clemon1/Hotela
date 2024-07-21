import { Select } from "@mantine/core";

function CustomSelect({ label, placeholder, data, showBorder }) {
  const icon = <></>;

  return (
    <Select
      variant="unstyled"
      rightSection={icon}
      label={label}
      placeholder={placeholder}
      data={data}
      comboboxProps={{
        transitionProps: { transition: "pop", duration: 200 },
      }}
      // bg="red"
      searchable
      nothingFoundMessage="Nothing found..."
      clearable
      styles={(theme) => ({
        root: {
          borderRight: showBorder ? `1px solid ${theme.colors.gray[5]}` : "", // Add left border
          height: "50px", // Set the desired height
          display: "flex",
          alignItems: "center", // Center vertically
          flexDirection: "column",
        },
        input: {
          border: "none", // Remove border
          boxShadow: "none", // Remove shadow
          padding: 0, // Remove padding
          marginTop: -7,
        },
        label: {
          textAlign: "start", // Align label to start
          marginBottom: 0, // Space between label and input
          marginRight: 105,
        },
        placeholder: {
          color: theme.colors.gray[5], // Placeholder text color
          textAlign: "start", // Align placeholder text to start
        },
      })}
    />
  );
}

export default CustomSelect;
