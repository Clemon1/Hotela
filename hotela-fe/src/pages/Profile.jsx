import {
  Box,
  Group,
  Stack,
  Text,
  Title,
  Button,
  TextInput,
  Flex,
  useMantineTheme,
  Container,
  Divider,
} from "@mantine/core";
import { IoPencil, IoCheckmark } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "@mantine/hooks";

function Profile() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(max-width: 517px)"); // Adjusted for mobile view

  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState(null);
  const [details, setDetails] = useState({
    firstName: "Maria",
    lastName: "Lost",
    location: "Hamburg, Germany",
    email: "Maria@lost.de",
    nationality: "German",
    dateOfBirth: "1996-11-06",
  });

  const editableRefs = useRef({});

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        editableRefs.current &&
        !editableRefs.current[editingField]?.contains(event.target)
      ) {
        setEditingField(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [editingField]);

  const handleEditClick = (field) => {
    setEditingField(field);
    setTempValue(details[field]); // Save current value for editing
  };

  const handleSaveClick = (field) => {
    if (field === "dateOfBirth") {
      const today = new Date();
      const inputDate = new Date(tempValue);
      const age = today.getFullYear() - inputDate.getFullYear();
      const month = today.getMonth() - inputDate.getMonth();
      const day = today.getDate() - inputDate.getDate();

      if (age < 18 || (age === 18 && (month < 0 || (month === 0 && day < 0)))) {
        alert("Date of birth must be at least 18 years ago.");
        return; // Do not proceed with saving
      }
    }

    setDetails((prev) => ({ ...prev, [field]: tempValue }));
    setEditingField(null);
    setTempValue(null);
  };

  const handleChange = (field, value) => {
    setTempValue(value);
  };

  // Function to extract initials from first and last name
  const getInitials = (firstName, lastName) => {
    const initials = `${firstName.charAt(0).toUpperCase()}${lastName
      .charAt(0)
      .toUpperCase()}`;
    return initials;
  };

  return (
    <Container size="md" padding="md">
      <Flex direction="column" align="center">
        <Title order={2} style={{ marginBottom: "10px" }}>
          Personal Details
        </Title>
        <Text size="sm" c="gray" style={{ marginBottom: "20px" }}>
          Edit your personal details
        </Text>

        <Flex
          w={80}
          h={80}
          bg={"blue"}
          align={"center"}
          justify={"center"}
          mb={20}
          fz={theme.fontSizes.xl}
          fw={700}
          c={"white"}
          style={{ borderRadius: "50%", fontSize: theme.fontSizes.xl }}
        >
          {getInitials(details.firstName, details.lastName)}
        </Flex>

        <Stack spacing="lg" style={{ width: "100%" }}>
          {Object.keys(details).map((field) => (
            <>
              <Group
                key={field}
                direction="row"
                align="center"
                spacing="sm"
                style={{ flexWrap: "wrap" }}
              >
                <Text
                  weight={500}
                  style={{
                    textTransform: "capitalize",
                    flex: "1 1 150px",
                    minWidth: "150px",
                    color: theme.colors.gray[7],
                  }}
                >
                  {field.replace(/([A-Z])/g, " $1")}
                </Text>
                {editingField === field ? (
                  <Group
                    style={{ flex: "1 1 auto", minWidth: "300px" }}
                    ref={(node) => {
                      if (node) editableRefs.current[field] = node;
                    }}
                    spacing="xs"
                  >
                    {field === "dateOfBirth" ? (
                      <input
                        type="date"
                        value={tempValue}
                        onChange={(e) => handleChange(field, e.target.value)}
                        style={{
                          flex: 1,
                          minWidth: "150px",
                          padding: "8px",
                          border: `1px solid ${theme.colors.gray[3]}`,
                          borderRadius: "4px",
                        }}
                      />
                    ) : (
                      <TextInput
                        value={tempValue}
                        onChange={(e) =>
                          handleChange(field, e.currentTarget.value)
                        }
                        style={{ flex: 1, minWidth: "150px" }}
                      />
                    )}
                    <Button
                      variant="outline"
                      color="green"
                      size="xs"
                      leftIcon={<IoCheckmark />}
                      onClick={() => handleSaveClick(field)}
                      style={{ minWidth: "75px" }}
                    >
                      Save
                    </Button>
                  </Group>
                ) : (
                  <Group style={{ flex: "1 1 auto", minWidth: "300px" }} noWrap>
                    <Text style={{ flex: 1, minWidth: "150px" }}>
                      {field === "dateOfBirth"
                        ? new Date(details[field]).toLocaleDateString()
                        : details[field]}
                    </Text>
                    <Button
                      variant="outline"
                      color="blue"
                      size="xs"
                      leftIcon={<IoPencil />}
                      onClick={() => handleEditClick(field)}
                      style={{ minWidth: "75px" }}
                    >
                      Edit
                    </Button>
                  </Group>
                )}
              </Group>

              {isMobile && <Divider />}
            </>
          ))}
        </Stack>
      </Flex>
    </Container>
  );
}

export default Profile;
