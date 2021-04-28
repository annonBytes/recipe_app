import { Inventory } from '../../config/inventory'

type InventoryItemProps = {
    inventory: Inventory
    onToggle: () => void
}


export const InventoryItem = ({ inventory, onToggle }: InventoryItemProps) => {
    return (
        <div className="container">
            <input type='checkbox' checked={inventory.done} onChange={() => onToggle()} />
            {inventory.title}
        </div>
    )
}