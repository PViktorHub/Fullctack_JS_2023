const tick = {
    id: 0,
    time: 0
};

function code(text = 'code') {
    const d = new Date();
    const time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    console.log(time, text);
}

code('From start');

const toId = setTimeout(() => code('After 2 sec'), 2000);
const toId2 = setTimeout(() => code('After 3 sec'), 3000);
console.log(toId, toId2);
clearInterval(toId);

const tickFunc = (...symbols) => {
    console.log(symbols);
    tick.time++;
    code(tick.time);
    if (tick.time > 10) {
        clearInterval(tick.id);
    }
}

// tick.id = setInterval(tickFunc, 1000, 'ɱ', 'ɲ', 'ɳ', 'ɵ', 'ɶ', 'ɷ', 'ɸ', 'ʂ', 'ʆ', 'ʉ', 'ʓ', 'ʛ', 'ʥ', 'ʨ', 'ʬ');

const loaderBackSec = {
    id: 0,
    time: 9,
    element: document.querySelector('.loader'),
    symbols: ['ɱ', 'ɲ', 'ɳ', 'ɵ', 'ɶ', 'ɷ', 'ɸ', 'ʂ', 'ʆ', 'ʉ', 'ʓ', 'ʛ', 'ʥ', 'ʨ', 'ʬ'],
    arrows: ['↑', '↗', '→', '↘', '↓', '↙', '←', '↖'],
    bars: ['▂', '▃', '▅', '▆', '▇', '▉'],
    colorfulSymbols: ['❤', '💛', '💚', '💙', '💜', '🧡', '💖', '💗', '💘', '💝', '💞', '💟', '💐', '💮', '💯', '🔆', '🔅', '🌈', '🌟', '🎇'],
    symbolIndex: 0,
    arrowIndex: 0,
    barIndex: 0,
    colorSymbolIndex: 0,
    colorCounter: 0,
};

const loaderBackSecFunc = (loader) => {
    loader.element.innerText = loader.colorfulSymbols[loader.colorSymbolIndex] + loader.bars[loader.barIndex] + loader.arrows[loader.arrowIndex] + loader.symbols[loader.symbolIndex];
    loader.symbolIndex = (loader.symbolIndex + 1) % loader.symbols.length;
    loader.arrowIndex = (loader.arrowIndex + 1) % loader.arrows.length;
    loader.barIndex = (loader.barIndex + 1) % loader.bars.length;
    loader.colorSymbolIndex = (loader.colorSymbolIndex + 1) % loader.colorfulSymbols.length;
};

loaderBackSec.id = setInterval(loaderBackSecFunc, 1000, loaderBackSec);