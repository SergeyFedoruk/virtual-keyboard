const keysColl = [
    [
        { code: 'Back-quote', value: '`',valueShift: '~', valueBel: 'ё', valueUppBel: 'Ё' },
        { code: 'Digit1', value: 1, valueShift: '!' },
        { code: 'Digit2', value: 2, valueShift: '@', valueShiftBel: '"'  },
        { code: 'Digit3', value: 3, valueShift: '#', valueShiftBel: '№'  },
        { code: 'Digit4', value: 4, valueShift: '$', valueShiftBel: ';'  },
        { code: 'Digit5', value: 5, valueShift: '%' },
        { code: 'Digit6', value: 6, valueShift: '^', valueShiftBel: ':'  },
        { code: 'Digit7', value: 7, valueShift: '&', valueShiftBel: '?'  },
        { code: 'Digit8', value: 8, valueShift: '*' },
        { code: 'Digit9', value: 9, valueShift: '(' },
        { code: 'Digit0', value: 0, valueShift: ')' },
        { code: 'Minus', value: '-', valueShift: '_' },
        { code: 'Equal', value: '=', valueShift: '+' },
        { code: 'Backspace', value: 'Backspace', class: 'keyboard-key-up' },
    ],
    [
        { code: 'Tab', value: 'Tab', class: 'keyboard-key-up' },
        { code: 'KeyQ', value: 'q', valueUpp: 'Q', valueBel: 'й', valueUppBel: 'Й'  },
        { code: 'KeyW', value: 'w', valueUpp: 'W', valueBel: 'ц', valueUppBel: 'Ц'  },
        { code: 'KeyE', value: 'e', valueUpp: 'E', valueBel: 'у', valueUppBel: 'У'  },
        { code: 'KeyR', value: 'r', valueUpp: 'R', valueBel: 'к', valueUppBel: 'К'  },
        { code: 'KeyT', value: 't', valueUpp: 'T', valueBel: 'е', valueUppBel: 'Е'  },
        { code: 'KeyY', value: 'y', valueUpp: 'Y', valueBel: 'н', valueUppBel: 'Н'  },
        { code: 'KeyU', value: 'u', valueUpp: 'U', valueBel: 'г', valueUppBel: 'Г'  },
        { code: 'KeyI', value: 'i', valueUpp: 'I', valueBel: 'ш', valueUppBel: 'Ш'  },
        { code: 'KeyO', value: 'o', valueUpp: 'O', valueBel: 'ў', valueUppBel: 'Ў'  },
        { code: 'KeyP', value: 'p', valueUpp: 'P', valueBel: 'з', valueUppBel: 'З'  },
        { code: 'BracketLeft', value: '[', valueShift: '{', valueBel: 'х', valueUppBel: 'Х'   },
        { code: 'BracketRight', value: ']', valueShift: '}', valueBel: '’', valueUppBel: '’'  },
        { code: 'Backslash', value: '\\', valueShift: '|', valueShiftBel: '/'     },
        { code: 'Delete', value: 'Del', class: 'keyboard-key-up' },
    ],
    [
        { code: 'CapsLock', value: 'CapsLock', class: 'keyboard-key-up' },
        { code: 'KeyA', value: 'a', valueUpp: 'A', valueBel: 'ф', valueUppBel: 'Ф'  },
        { code: 'KeyS', value: 's', valueUpp: 'S', valueBel: 'ы', valueUppBel: 'Ы'  },
        { code: 'KeyD', value: 'd', valueUpp: 'D', valueBel: 'в', valueUppBel: 'В'  },
        { code: 'KeyF', value: 'f', valueUpp: 'F', valueBel: 'а', valueUppBel: 'А'  },
        { code: 'KeyG', value: 'g', valueUpp: 'G', valueBel: 'п', valueUppBel: 'П'  },
        { code: 'KeyH', value: 'h', valueUpp: 'H', valueBel: 'р', valueUppBel: 'Р'  },
        { code: 'KeyJ', value: 'j', valueUpp: 'J', valueBel: 'о', valueUppBel: 'О'  },
        { code: 'KeyK', value: 'k', valueUpp: 'K', valueBel: 'л', valueUppBel: 'Л'  },
        { code: 'KeyL', value: 'l', valueUpp: 'L', valueBel: 'д', valueUppBel: 'Д'  },
        { code: 'Semicolon', value: ';', valueShift: ':', valueBel: 'ж', valueUppBel: 'Ж'   },
        { code: 'Quote', value: "'", valueShift: '"', valueBel: 'э', valueUppBel: 'Э'     },
        { code: 'Enter', value: 'Enter', class: 'keyboard-key-up' },
    ],
    [
        { code: 'ShiftLeft', value: 'Shift', class: 'keyboard-key-up' },
        { code: 'Backslash', value: '\\', valueShift: '|', valueShiftBel: '/'   },
        { code: 'KeyZ', value: 'z', valueUpp: 'Z', valueBel: 'я', valueUppBel: 'Я'    },
        { code: 'KeyX', value: 'x', valueUpp: 'X', valueBel: 'ч', valueUppBel: 'Ч'    },
        { code: 'KeyC', value: 'c', valueUpp: 'C', valueBel: 'с', valueUppBel: 'С'    },
        { code: 'KeyV', value: 'v', valueUpp: 'V', valueBel: 'м', valueUppBel: 'М'   },
        { code: 'KeyB', value: 'b', valueUpp: 'B', valueBel: 'і', valueUppBel: 'І'   },
        { code: 'KeyN', value: 'n', valueUpp: 'N', valueBel: 'т', valueUppBel: 'Т'   },
        { code: 'KeyM', value: 'm', valueUpp: 'M', valueBel: 'ь', valueUppBel: 'Ь'   },
        { code: 'Comma', value: ',', valueShift: '<', valueBel: 'б', valueUppBel: 'Б'  },
        { code: 'Period', value: '.', valueShift: '>', valueBel: 'ю', valueUppBel: 'Ю' },
        { code: 'Slash', value: '/', valueShift: '?', valueBel: '.', valueUppBel: '.', valueShiftBel: ','  },
        { code: 'ArrowUp', value: '↑' },
        { code: 'ShiftRight', value: 'Shift', class: 'keyboard-key-up', },
    ],
    [
        { code: 'ControlLeft', value: 'Ctrl', class: 'keyboard-key-up' },
        { code: 'MetaRight', value: 'Win' },
        { code: 'AltLeft', value: 'Alt' },
        { code: 'Space', value: ' ', class: 'keyboard-key-space' },
        { code: 'AltRight', value: 'Alt' },
        { code: 'ControlRight', value: 'Ctrl', class: 'keyboard-key-up' },
        { code: 'ArrowLeft', value: '←' },
        { code: 'ArrowDown', value: '↓' },
        { code: 'ArrowRight', value: '→' },

    ],
];

const createKeys = (keysColl, key_Board_, lang, upp, display, shift) => {
    const keyboard = key_Board_;
    localStorage.setItem('lng', JSON.stringify(lang));

    keyboard.innerHTML = '';

    keysColl.forEach((line) => {
        const keyboardLine = document.createElement('div');
        keyboardLine.classList.add('keyboard-line');
        keyboard.append(keyboardLine);

        line.forEach((item) => {
            const keyboardKey = document.createElement('button');
            keyboardKey.classList.add('keyboard-key');
            let { value } = item;
            if (!shift) {
                if (upp && lang) {
                    if (item.valueUppBel) {
                        value = item.valueUppBel;
                    }
                } else if (upp) {
                    if (item.valueUpp) {
                        value = item.valueUpp;
                    }
                } else if (lang) {
                    if (item.valueBel) {
                        value = item.valueBel;
                    }
                }
            } else if (shift) {
                if (upp && lang) {
                    if (item.valueShiftBel) {
                        value = item.valueShiftBel;
                    } else if (item.valueBel) {
                        value = item.valueBel;
                    } else if (item.valueShift) {
                        value = item.valueShift;
                    }
                } else if (upp) {
                    if (item.valueShift) {
                        value = item.valueShift;
                    }
                } else if (lang) {
                    if (item.valueShiftBel) {
                        value = item.valueShiftBel;
                    } else if (item.valueUppBel) {
                        value = item.valueUppBel;
                    } else if (item.valueShift) {
                        value = item.valueShift;
                    }
                } else if (item.valueShift) {
                    value = item.valueShift;
                } else if (item.valueUpp) {
                    value = item.valueUpp;
                }
            }

            keyboardKey.textContent = value;
            keyboardKey.setAttribute('data-code', item.code);

            if (item.class) {
                keyboardKey.classList.add(item.class);
            }

            keyboardLine.append(keyboardKey);

            keyboardKey.addEventListener('click', () => {
                const { isNeedRender, cl } = printKey(display, keyboardKey.textContent, upp);
                if (isNeedRender) {
                    createKeys(keysColl, key_Board_, lang, cl, display, shift);
                }
            });
        });
    });
};


const printKey = (d, char, capslock) => {
    let isNeedRender = false;
    let cl = capslock;
    const display = d;
    const start = display.selectionStart;
    switch (char) {
        case 'Backspace':
            display.focus();
            if (start > 0) {
                display.value = display.value.slice(0, start - 1) + display.value.slice(start);
                display.selectionStart = start - 1;
                display.selectionEnd = start - 1;
            }
            break;

        case 'Tab':
            display.value += '    ';
            break;

        case 'Del':
        case 'Delete':
            display.focus();
            if (start < display.value.length) {
                display.value = display.value.slice(0, start) + display.value.slice(start + 1);
                display.selectionStart = start;
                display.selectionEnd = start;
            }
            break;

        case 'CapsLock':
            cl = !cl;
            isNeedRender = true;
            break;

        case 'Enter':
            display.value += '\n';
            break;

        case 'ArrowLeft':
            display.value += '←';
            break;

        case 'ArrowRight':
            display.value += '→';
            break;

        case 'ArrowUp':
            display.value += '↑';
            break;

        case 'ArrowDown':
            display.value += '↓';
            break;

        case 'Shift':
        case 'Ctrl':
        case 'Control':
        case 'Win':
        case 'Meta':
        case 'MetaRight':
        case 'Alt':
        case 'AltGraph':
            break;

        default: display.value += char;
    }
    return { isNeedRender, cl };
};

