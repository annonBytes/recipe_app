import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from '../../store/inventorySlice'
import { RootState } from '../../store'
import { Button } from '../../components/Button/button'
import styled from "styled-components";


export const InventoryFilter = () => {
    const dispatch = useDispatch()
    const filter = useSelector((state: RootState) => state.inventory.showOnlyDone)

    return (
        <Contain>
            <Button onClick={() => dispatch(toggleFilter())}>
                {filter ? 'Show All' : 'Show Done'}
            </Button>
        </Contain>
    )
}

const Contain = styled.div`
  position: absolute;
  top: 0;
`