import { useSelector } from "react-redux";
import { RootState } from '../../store'
import styled from "styled-components";

export const OpenInventoryCount = () => {
    const inventory = useSelector((state: RootState) => state.inventory.inventorys)
    const openInventory = inventory.filter(({ done }) => !done).length

    return (
        <Counter>
            There are {openInventory} open Inventory
        </Counter>
    )
}

const Counter = styled.div`
    font-weight: bold;
    margin-top: 20px;
`