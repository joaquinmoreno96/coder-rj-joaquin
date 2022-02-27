import React from "react";
import swal from "sweetalert";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Textarea,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";

import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

export default function Contact() {
    return (
        <Flex bg={useColorModeValue("gray.100", "gray.900")} align="center" justify="center" id="contact">
            <Box borderRadius="lg" m={{ base: 5, md: 16, lg: 10 }} p={{ base: 5, lg: 16 }}>
                <Box>
                    <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
                        <Heading
                            fontSize={{
                                base: "4xl",
                                md: "5xl",
                            }}
                        >
                            CONTACTANOS
                        </Heading>

                        <Stack spacing={{ base: 4, md: 8, lg: 20 }} direction={{ base: "column", md: "row" }}>
                            <Stack align="center" justify="space-around" direction={{ base: "row", md: "column" }}>
                                <Link href="https://github.com/joaquinmoreno96?tab=repositories">
                                    <IconButton
                                        aria-label="github"
                                        variant="ghost"
                                        size="lg"
                                        fontSize="3xl"
                                        icon={<BsGithub />}
                                        _hover={{
                                            bg: "blue.500",
                                            color: useColorModeValue("white", "gray.700"),
                                        }}
                                        isRound
                                    />
                                </Link>

                                <Link href="https://twitter.com/MorenoJoaqo">
                                    <IconButton
                                        aria-label="twitter"
                                        variant="ghost"
                                        size="lg"
                                        icon={<BsTwitter size="28px" />}
                                        _hover={{
                                            bg: "blue.500",
                                            color: useColorModeValue("white", "gray.700"),
                                        }}
                                        isRound
                                    />
                                </Link>

                                <Link href="https://www.linkedin.com/in/joaquin-gabriel-moreno-1130a7210/">
                                    <IconButton
                                        aria-label="linkedin"
                                        variant="ghost"
                                        size="lg"
                                        icon={<BsLinkedin size="28px" />}
                                        _hover={{
                                            bg: "blue.500",
                                            color: useColorModeValue("white", "gray.700"),
                                        }}
                                        isRound
                                    />
                                </Link>
                            </Stack>

                            <Box
                                bg={useColorModeValue("white", "gray.700")}
                                borderRadius="lg"
                                p={8}
                                color={useColorModeValue("gray.700", "whiteAlpha.900")}
                                shadow="base"
                            >
                                <VStack spacing={5}>
                                    <FormControl isRequired>
                                        <FormLabel>Nombre</FormLabel>

                                        <InputGroup>
                                            <InputLeftElement children={<BsPerson />} />
                                            <Input type="text" name="name" placeholder="Your Name" />
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel>Email</FormLabel>

                                        <InputGroup>
                                            <InputLeftElement children={<MdOutlineEmail />} />
                                            <Input type="email" name="email" placeholder="Your Email" />
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel>Mensaje</FormLabel>

                                        <Textarea name="message" placeholder="Your Message" rows={6} resize="none" />
                                    </FormControl>

                                    <Button
                                        onClick={() => swal("Mail enviado")}
                                        colorScheme="blue"
                                        bg="blue.400"
                                        color="white"
                                        _hover={{
                                            bg: "blue.500",
                                        }}
                                        isFullWidth
                                    >
                                        Enviar mensaje
                                    </Button>
                                </VStack>
                            </Box>
                        </Stack>
                    </VStack>
                </Box>
            </Box>
        </Flex>
    );
}
