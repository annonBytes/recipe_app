import React, { useState, useEffect } from 'react'
import { Provider, useDispatch } from "react-redux";
import { addInventory } from '../../store/inventorySlice'
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import AddIcon from '@material-ui/icons/Add';
// import IconButton from '@material-ui/core/IconButton'
// import DeleteIcon from '@material-ui/icons/Delete';
// import { useStateValue } from '../../StateProvider';
import './styles/inventory.css'
import Header from './header';
import { Input } from '../../components/Input/input'
import { Button } from '../../components/Button/button'
import { ErrorMessage } from '../../components/ErrorText/error'
import { useFilteredInventory } from '../../hooks/useFilteredInventory'
import { toggleInventory } from '../../store/inventorySlice'
import { InventoryItem } from './InventoryItem';


export const Inventory = () => {

    const [value, setValue] = useState('')
    const [error, setError] = useState(false)
    const dispatch = useDispatch()

    const filteredInventory = useFilteredInventory()

    const onAdd = () => {
        if (value !== '') {
            dispatch(addInventory(value))
            setValue('')
        }
        else {
            setError(true)
        }
    }

    useEffect(() => {
        setError(false)
    }, [value])


    return (
        <>
            <Header />
            <div className="inventory">
                <div className="inventory__container">
                    <div className='add-item-box'>
                        <Input
                            className='add-item-input'
                            placeholder='Add an item...'
                            value={value}
                            onChange={(event) => setValue(event.currentTarget.value)}
                            clearable
                            onClear={() => setValue('')}
                        />
                        <Button className="btn" onClick={onAdd}>Add</Button>
                    </div>
                    <div>
                        {error && <ErrorMessage>Input cannot be empty</ErrorMessage>}
                    </div>


                    <div className='item-list'>
                        {filteredInventory.map(inventory => (
                            <InventoryItem key={inventory.id} inventory={inventory} onToggle={() => dispatch(toggleInventory(inventory))} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}