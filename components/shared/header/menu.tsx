import UserButton from './user-button'
import CartButton from './cart-button'

export default function Menu() {
    return (
        <div className="flex justify-end items-center gap-4">
            <UserButton />
            <CartButton />
        </div>
    )
}
