import data from '@/lib/data'
import { connectToDatabase } from '.'
import Product from './models/product.model'
import User from './models/user.model'
import Review from './models/review.model'
import { cwd } from 'process'
import { loadEnvConfig } from '@next/env'

loadEnvConfig(cwd())

const main = async () => {
    try {
        // Ambil data dari file data.ts, termasuk products, users, dan reviews
        const { products, users, reviews } = data
        await connectToDatabase(process.env.MONGODB_URI)

        // Hapus data lama
        await Product.deleteMany()
        await User.deleteMany()
        await Review.deleteMany()

        // Masukkan data produk dan user baru
        const createdProducts = await Product.insertMany(products)
        const createdUsers = await User.insertMany(users)

        // Buat review untuk setiap produk berdasarkan ratingDistribution
        const rws = []
        for (let i = 0; i < createdProducts.length; i++) {
            let x = 0
            const { ratingDistribution } = createdProducts[i]
            for (let j = 0; j < ratingDistribution.length; j++) {
                // Untuk setiap rating (rating = j+1)
                for (let k = 0; k < ratingDistribution[j].count; k++) {
                    x++
                    // Filter array reviews untuk rating yang sesuai (rating = j+1)
                    const reviewsWithRating = reviews.filter((r) => r.rating === j + 1)
                    rws.push({
                        ...reviewsWithRating[x % reviewsWithRating.length],
                        isVerifiedPurchase: true,
                        product: createdProducts[i]._id,
                        user: createdUsers[x % createdUsers.length]._id,
                        updatedAt: Date.now(),
                        createdAt: Date.now(),
                    })
                }
            }
        }
        const createdReviews = await Review.insertMany(rws)

        console.log({
            createdProducts,
            createdUsers,
            createdReviews,
            message: 'Seeded database successfully',
        })
        process.exit(0)
    } catch (error) {
        console.error(error)
        throw new Error('Failed to seed database')
    }
}

main()
