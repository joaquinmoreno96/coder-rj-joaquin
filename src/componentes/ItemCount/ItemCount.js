import React,{useState} from "react";
import { Button, Box, Badge, Image, } from "@chakra-ui/react";
import swal from 'sweetalert';


function ItemCount(props) {
    const remera = {
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeTO5sL2rOFBUyoX3ofqH7x6XgkqaI1xrP4w&usqp=CAU",
        talle: "xl",
        title: "Ben Simmons Philadelphia 76ers Jerseys",
        formattedPrice: "$5,900.00",
    };
    const [contador, setContador] = useState(props.initial)
    
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={remera.imageUrl} />

            <Box p="6">
                <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                        Nueva
                    </Badge>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        Talle {remera.talle}
                    </Box>
                </Box>

                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                    {remera.title}
                </Box>

                <Box>
                    {remera.formattedPrice}
                    <Box as="span" color="gray.600" fontSize="sm"></Box>
                </Box>
                <Button disabled={contador >= props.stock} onClick={() => setContador(contador + 1)}borderRadius="full" colorScheme="teal" padding={3} size="sm">
                    +
                </Button>

                <Button disabled={contador <= props.initial } onClick={() => setContador(contador - 1)} borderRadius="full" colorScheme="teal" padding={3} size="sm">
                    -
                </Button>
            </Box>
            <Box p="6">
                <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="5" colorScheme="teal">
                        Cantidad
                    </Badge>
                    <Badge borderRadius="full" px="5" colorScheme="teal">
                        {contador}
                    </Badge>
                    <Badge onClick={() => swal("Agregado al carrito exitosamente")}borderRadius="full" px="8" colorScheme="teal">
                        Agregar al carrito
                    </Badge>
                   
                </Box>
            </Box>
        </Box>
    );
}

export default ItemCount;
