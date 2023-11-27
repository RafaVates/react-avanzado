import React, {useContext, useRef, useState} from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore' 
import { Stack, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import BuyConfirm from './BuyConfirm';

const BuyForm = () => {

    const {total, totalItems} = useContext(CartContext)
    const [open, setOpen] = useState(false);
    const [nro, setNro] = useState(0);
    const nombreRef = useRef()
    const emailRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const db = getFirestore()
        const orders = collection(db, "orders")
        const newOrder = {
            cliente: {
                name: nombreRef.current.value,
                email: emailRef.current.value
            },
            productos: {
                cantidad: totalItems,
                total: total
            }
        }
        addDoc(orders, newOrder)
        .then((docRef) => {
            setNro(docRef.id);
            setOpen(true);
        })
        .catch((error) => {
            console.error("Hubo un error. Intente nuevamente mas tarde: ", error);
        });

    }

    return (
        <Stack spacing={1}>
            <Typography variant='h4' >Complete sus datos</Typography>
            <form  onSubmit={handleSubmit}>
                <Stack spacing={1}>
                    <TextField
                        required
                        id="nombre"
                        label="Nombre"
                        variant="filled"
                        margin='normal'
                        inputRef={nombreRef}
                    />
                    <TextField
                        required
                        id="email"
                        label="E-mail"
                        variant="filled"
                        margin='normal'
                        inputRef={emailRef}
                    />
                    <Button type="submit" variant='contained'>Enviar</Button>
                </Stack> 
            </form>
            <BuyConfirm open={open} setOpen={setOpen} nro={nro}/>
        </Stack>
    )
}   

export default BuyForm


