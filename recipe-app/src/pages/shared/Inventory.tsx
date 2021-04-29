import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { addInventory } from '../../store/inventorySlice'
import './styles/inventory.css'
import Header from './header';
import { Input } from '../../components/Input/input'
import { Button } from '../../components/Button/button'
import { ErrorMessage } from '../../components/ErrorText/error'
import { useFilteredInventory } from '../../hooks/useFilteredInventory'
import { toggleInventory } from '../../store/inventorySlice'
import { InventoryItem } from './InventoryItem';
import { OpenInventoryCount } from './OpenInventoryCount';
import { InventoryFilter } from './InventoryFilter';



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
                        {filteredInventory.map((inventory) => (
                            <div className='item-container'>
                                <div className='item-name'>
                                    <InventoryItem key={inventory.id} inventory={inventory} onToggle={() => dispatch(toggleInventory(inventory))} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <InventoryFilter />
                    <OpenInventoryCount />


                </div>

            </div>

        </>
    )
}