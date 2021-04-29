import { Inventory } from '../../config/inventory'
import styled from "styled-components";

type InventoryItemProps = {
    inventory: Inventory
    onToggle: () => void
}


export const InventoryItem = ({ inventory, onToggle }: InventoryItemProps) => {
    return (
        <List>
            <input type='checkbox' checked={inventory.done} onChange={() => onToggle()} />
            {inventory.title}
        </List>
    )
}

const List = styled.div`
  display: flex;
  font-size: 16px;
  justify-content: center;
  align-items: center;

  input {
    justify-content: center;
    align-items: center; 
    margin-bottom: 0; 
    margin-right: 10px;
  }
`