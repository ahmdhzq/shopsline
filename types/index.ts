import {
    ProductInputSchema,
    CartSchema,
    OrderItemSchema,
    UserInputSchema,
    UserSignInSchema,
    UserSignUpSchema,
    ShippingAddressSchema,
    OrderInputSchema,
    ReviewInputSchema,
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
    users: IUserInput[],
    reviews: {
        title: string
        rating: number
        comment: string
    }[]
}

// Types for User
export type IUserSignUp = z.infer<typeof UserSignUpSchema>
export type IUserInput = z.infer<typeof UserInputSchema>
export type IUserSignIn = z.infer<typeof UserSignInSchema>

// Types for Order
export type OrderItem = z.infer<typeof OrderItemSchema>
export type Cart = z.infer<typeof CartSchema>
export type ShippingAddress = z.infer<typeof ShippingAddressSchema>
export type IOrderInput = z.infer<typeof OrderInputSchema>

// Types for Review
export type IReviewInput = z.infer<typeof ReviewInputSchema>
export type IReviewDetails = IReviewInput & {
    _id: string
    createdAt: string
    user: {
        name: string
    }
}
