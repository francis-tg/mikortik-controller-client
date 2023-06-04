import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  useDisclosure
} from "@chakra-ui/react";
import React from "react";
import {FaPlusCircle} from "react-icons/fa";
import CustomAlertDialog from "../components/CustomAlertDialog";
function AddRouter() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <Box m={5}>
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        <GridItem
          width='100%'
          backgroundColor='gray.300'
          height={100}
          rounded='sm'
          onClick={onOpen}>
          <Flex justifyContent='center' alignItems='center' p={5}>
            <FaPlusCircle size={55} />
          </Flex>
        </GridItem>
        <GridItem
          width='100%'
          height={100}
          rounded='sm'
          backgroundColor='teal.400'></GridItem>
      </Grid>
      <CustomAlertDialog
        isOpen={isOpen}
        onClose={onClose}
        showConfirmBtn={true}
        showCancelBtn={true}
        confirmText='Enregistrer'
        cancelText='Annuler'
        title='Ajouter un router'>
        {/* <Form> */}
        <FormControl>
          <FormLabel>Nom du router</FormLabel>
          <Input type='text' />
        </FormControl>
        <FormControl>
          <FormLabel>Adresse Ip</FormLabel>
          <Input type='text' />
        </FormControl>
        <FormControl>
          <FormLabel>Mot de passe</FormLabel>
          <Input type='password' />
        </FormControl>
        {/*  </Form> */}
      </CustomAlertDialog>
    </Box>
  );
}

export default AddRouter;
