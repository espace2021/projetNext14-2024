/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["res.cloudinary.com"]
        },
    env:{
        API_URL : "http://localhost:3001/api",
        SECRET : "secret",
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:"pk_test_51KtYRUD3HS4vNAwatvmqAEXLKKX11UOcpkHfLnw9UPI9kZ7AJCOeLkqik61wHFXLmRGHUd4aNBvp45v82DpskKl300bMfznwlE",
        STRIPE_SECRET_KEY:"sk_test_51KtYRUD3HS4vNAwa7ANL32HQqRTywhV3JHWIp3BxAIHv04bWoz22aKlRs9Q1L6znSX2i5fu5i3Xkl9i2Goz7jAkC00LL0T3lTL",
        NEXT_PUBLIC_URL:"http://localhost:3000"
    }    
}

module.exports = nextConfig
