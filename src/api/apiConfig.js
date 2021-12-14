const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: "36fee2f91710b77ac11bababdff28d11",
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;