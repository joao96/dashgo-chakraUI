import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>João Victor</Text>
          <Text color="gray.300" fontSize="small">
            jvpoletti@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="João Victor"
        src="https://github.com/joao96.png"
      />
    </Flex>
  );
}
