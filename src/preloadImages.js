const preloadImages = (imagesSrc, callback) => {
    let counter = imagesSrc.length;

    imagesSrc.forEach(src => {
        const img = new Image();
        img.src = src;

        img.addEventListener("load", () => {
            if (--counter <= 0) {
                callback();
            }
        })
    });
}

export default preloadImages;
