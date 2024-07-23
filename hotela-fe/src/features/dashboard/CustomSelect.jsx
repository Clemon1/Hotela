import PropTypes from "prop-types";
import { Select } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

function CustomSelect({ label, placeholder, data, showBorder }) {
  const icon = <></>;
  const isMobile = useMediaQuery("(max-width: 767px)"); // Adjusted for mobile view

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
      searchable
      nothingFoundMessage="Nothing found..."
      clearable
      p={{ base: 2, sm: 0 }}
      styles={(theme) => ({
        root: {
          borderRight: !isMobile && showBorder ? `1px solid #d1d1d1` : "", // Add right border on non-mobile
          height: isMobile ? "auto" : "50px", // Set height for non-mobile
          display: "flex",
          flexDirection: "column",
          width: isMobile && "100%", // Ensure the root element takes full width
          border: isMobile ? `1px solid ${theme.colors.gray[6]}` : "none", // Add blue border on mobile
        },
        input: {
          border: isMobile ? `1px solid ${theme.colors.blue[6]}` : "none", // Add blue border on mobile
          boxShadow: "none", // Remove shadow
          padding: 0, // Remove padding
          marginTop: !isMobile && -7,
          width: "100%",
        },
        label: {
          textAlign: "start", // Align label to start
          marginBottom: 0, // Space between label and input
          alignSelf: !isMobile && "flex-start", // Ensure the label aligns at the start
          color: theme.colors.blue[6], // Label color
        },
        placeholder: {
          color: theme.colors.gray[5], // Placeholder text color
          textAlign: "start", // Align placeholder text to start
        },
      })}
    />
  );
}

CustomSelect.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  showBorder: PropTypes.bool,
};

CustomSelect.defaultProps = {
  showBorder: false,
};

export default CustomSelect;
