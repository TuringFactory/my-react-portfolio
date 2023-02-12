
export const diagonalFadeIn = {
    initial:{ x: -100, y: -100, opacity: 0 },
    animate:{ x: 0, y: 0, opacity: 1 },
    transition:{ease: "easeOut", duration: 1 }
}

export const rightSlideIn ={
    initial: {x:200, opacity: 0},
    animate:{x:0, opacity:1},
    transition:{ease: "easeOut", duration: 2 }
}

export const leftSlideIn ={
    initial: {x:-200, opacity: 0},
    animate:{x:0, opacity:1},
    transition:{ease: "easeOut", duration: 1 }
}

export const bottomSlideIn={
    initial: {y:200, opacity: 0},
    animate:{y:0, opacity:1},
    transition:{ease: "easeOut", duration: 1 }
}