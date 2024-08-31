/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { DatePickerInput } from "@mantine/dates";
import { Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

function CustomDatePicker({ label, value, placeholder, onChange }) {
  const isMobile = useMediaQuery("(max-width: 767px)"); // Adjusted for mobile view

  return (
    <Flex
      w={{ base: "100%", sm: 110 }}
      p={{ base: 2, sm: 0 }}
      style={(theme) => ({
        borderRight: !isMobile && `1px solid ${theme.colors.blue[6]}`, // Add right border if not mobile
        height: isMobile ? "auto" : "50px", // Set height for non-mobile
        flexDirection: "column",
        border: isMobile ? `1px solid ${theme.colors.blue[6]}` : "", // Apply border if mobile
      })}>
      <DatePickerInput
        value={value}
        onChange={onChange}
        label={label}
        minDate={new Date()}
        valueFormat='YYYY MMM DD'
        placeholder={placeholder}
        variant='unstyled'
        styles={(theme) => ({
          input: {
            boxShadow: "none", // Remove shadow
            padding: 0, // Remove padding
            marginTop: !isMobile && -7,
            fontWeight: 500,
            width: "100%", // Ensure the input takes the full width
            border: isMobile ? `1px solid ${theme.colors.blue[6]}` : "none", // Add blue border on mobile
          },
          label: {
            textAlign: "start", // Align label to start
            marginBottom: 0, // Space between label and input
            alignSelf: "flex-start", // Ensure the label aligns at the start
            width: "100%", // Make sure the label takes full width
            color: "#000814",
          },
          placeholder: {
            color: theme.colors.gray[5], // Placeholder text color
            textAlign: "start", // Align placeholder text to start
          },
        })}
      />
    </Flex>
  );
}

CustomDatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default CustomDatePicker;
