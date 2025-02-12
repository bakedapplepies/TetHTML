function lerp(a, b, t)
{
    return (1 - t) * a + t * b;
}

const backgroundStyle = document.querySelector("body");

window.addEventListener("scroll", () => {
    const [r1, g1, b1] = [209, 79, 62];
    const [r2, g2, b2] = [105, 41, 60];
    
    const currentY = window.scrollY;
    const limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight; 
    const threshold = limit / 3.0;
    const percentage = ((Math.max(threshold, currentY) / limit) - (1.0/3.0)) * 1.5;

    const [r, g, b] = [
        lerp(r1, r2, percentage),
        lerp(g1, g2, percentage),
        lerp(b1, b2, percentage)
    ];
    
    backgroundStyle.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})