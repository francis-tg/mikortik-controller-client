import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  useDisclosure,
  useToast
} from "@chakra-ui/react";
import React, {useState} from "react";
import {FaPlusCircle} from "react-icons/fa";
import CustomAlertDialog from "../components/CustomAlertDialog";
import {BASE_URL} from "../api/comon";
function AddRouter() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [formData, setFormData] = useState({
    name: "",
    ip: "",
    username: "",
    password: ""
  });
  const [Router, setRouter] = useState([]);
  const {name, ip, username, password} = formData;
  const toast = useToast();
  function onChange(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value
    }));
  }
  function addRouter() {
    /* if (Object.keys(formData).map((k) => !formData[k]).length !== 0)
      return toast({
        description: "Veuillez renseigner les champs...",
        status: "warning"
      }); */
    fetch(`${BASE_URL}/router/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then((r) => {
      r.status === 200 &&
        toast({description: "Router a été bien ajouté", status: "success"});
    });
  }
  function fetchRouter() {
    fetch(`${BASE_URL}/router/all`, {
      method: "GET"
    }).then(async (r) => {
      if (r.status === 200) {
        const data = await r.json();
        setRouter(data);
      }
    });
  }
  React.useEffect(() => {
    fetchRouter();
  }, [Router]);
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
        {Router.map((router, i) => (
          <GridItem
            width='100%'
            height={100}
            rounded='sm'
            backgroundColor='teal.400'></GridItem>
        ))}
      </Grid>
      <CustomAlertDialog
        isOpen={isOpen}
        onClose={onClose}
        showConfirmBtn={true}
        showCancelBtn={true}
        confirmText='Enregistrer'
        cancelText='Annuler'
        title='Ajouter un router'
        onConfirm={addRouter}>
        {/* <Form> */}
        <FormControl>
          <FormLabel htmlFor='name'>Nom du router</FormLabel>
          <Input type='text' id='name' onChange={onChange} value={name} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='username'>Nom d'utilisateur</FormLabel>
          <Input
            type='text'
            id='username'
            onChange={onChange}
            value={username}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='ip'>Adresse Ip</FormLabel>
          <Input type='text' id='ip' onChange={onChange} value={ip} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='password'>Mot de passe</FormLabel>
          <Input
            type='password'
            id='password'
            onChange={onChange}
            value={password}
          />
        </FormControl>
        {/*  </Form> */}
      </CustomAlertDialog>
    </Box>
  );
}

export default AddRouter;
