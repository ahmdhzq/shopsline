import {
    ProductInputSchema,
    CartSchema,
    OrderItemSchema,
    UserInputSchema,
    UserSignInSchema,
    UserSignUpSchema,
    ShippingAddressSchema,

} from '@/lib/validator'
import { z } from 'zod'

// Types for Product
export type IProductInput = z.infer<typeof ProductInputSchema>
export type Data = {
    products: IProductInput[]
    headerMenus: {
        name: string
        href: string
    }[]
    carousels: {
        image: string
        url: string
        title: string
        buttonCaption: string
        isPublished: boolean
    }[]
    users: IUserInput[]
}

// Types for User
export type IUserSignUp = z.infer<typeof UserSignUpSchema>
export type IUserInput = z.infer<typeof UserInputSchema>
export type IUserSignIn = z.infer<typeof UserSignInSchema>

// Types for Order
export type OrderItem = z.infer<typeof OrderItemSchema>
export type Cart = z.infer<typeof CartSchema>
export type ShippingAddress = z.infer<typeof ShippingAddressSchema>