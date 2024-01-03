const factory = function(tag, props, ns) {
    if (!tag) {
        return;
    }
    let elem;
    if (isElement(tag)) {
        elem = tag;
    } else if (typeof tag === 'string') {
        if (tag.charAt(0) === '<') {
            const parser = new DOMParser();
            const doc = parser.parseFromString(tag, 'text/html');
            elem = doc.firstChild;
        } else if (typeof ns === 'string') {
            elem = document.createElementNS(ns, tag);
        } else {
            elem = document.createElement(tag);
        }
    } else {
        throw new Error('invalid tag type: ' + typeof tag);
    }
    if (isObject(props)) {
        Object.keys(props).forEach(function(key) {
            if (key === 'style') {
                if (isObject(props.style)) {
                    style(elem, props.style);
                }
            } else if (key === 'dataset') {
                if (isObject(props.dataset)) {
                    Object.keys(props.dataset).forEach(key => {
                        elem.dataset[key] = props.dataset[key];
                    });
                }
            } else if (key === 'parent' && isElement(props.parent)) {
                props.parent.appendChild(elem);
            } else if (key === 'children') {
                if (isArray(props.children)) {
                    props.children.forEach(function(child) {
                        if (isElement(child)) {
                            elem.appendChild(child);
                        } else if (typeof child === 'string') {
                            elem.appendChild(document.createTextNode(child));
                        }
                    });
                }
            } else if (typeof props[key] === 'function') {
                elem.addEventListener(key, props[key]);
            } else if (typeof ns === 'string') {
                elem.setAttributeNS(null, key, props[key]);
            } else {
                elem[toCamelCase(key)] = props[key];
            }
        });
    } else if (typeof props === 'string') {
        elem.innerHTML = props;
    }
    return elem;
};
function setChildren(props, children) {
    if (props && Array.isArray(children) && children.length) {
        if (Array.isArray(props.children)) {
            props.children = props.children.concat(children);
        } else {
            props.children = children;
        }
    }
    return props;
}
const createElement = (module.exports.createElement = (
    elem,
    props,
    ...children
) => {
    if (typeof elem === 'function') {
        return factory(new elem(props), setChildren(props, children));
    } else {
        return factory(elem, setChildren(props, children));
    }
});
const createElementNS = (module.exports.factory = (
    ns,
    elem,
    props,
    ...children
) => {
    return factory(elem, setChildren(props, children), ns);
});

const domElements = (module.exports.domElements = [
    'link',
    'meta',
    'style',
    'title',
    'address',
    'article',
    'aside',
    'footer',
    'header',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'hgroup',
    'nav',
    'section',
    'blockquote',
    'dd',
    'dir',
    'div',
    'dl',
    'figcaption',
    'figure',
    'hr',
    'li',
    'main',
    'ol',
    'p',
    'pre',
    'ul',
    'a',
    'abbr',
    'b',
    'bdi',
    'bdo',
    'br',
    'cite',
    'code',
    'data',
    'dfn',
    'em',
    'i',
    'kdb',
    'mark',
    'q',
    'rp',
    'rt',
    'rtc',
    'ruby',
    's',
    'samp',
    'small',
    'span',
    'strong',
    'sub',
    'sup',
    'time',
    'tt',
    'u',
    'var',
    'wbr',
    'area',
    'audio',
    'img',
    'map',
    'track',
    'video',
    'applet',
    'embed',
    'iframe',
    'noembed',
    'object',
    'param',
    'picture',
    'source',
    'canvas',
    'noscript',
    'script',
    'del',
    'ins',
    'caption',
    'col',
    'colgroup',
    'table',
    'tbody',
    'td',
    'tfoot',
    'th',
    'thead',
    'tr',
    'button',
    'datalist',
    'fieldset',
    'form',
    'input',
    'label',
    'legend',
    'meter',
    'optgroup',
    'option',
    'output',
    'progress',
    'select',
    'textarea',
    'details',
    'dialog',
    'menu',
    'menuitem',
    'summary',
    'content',
    'element',
    'shadow',
    'slot',
    'template',
]);
const domFactory = (module.exports.domFactory = {});
domElements.forEach(elem => {
    domFactory[elem] = function(props, ...children) {
        return createElement(elem, props, ...children);
    };
    domFactory[elem.toUpperCase()] = domFactory[elem];
    domFactory[elem.toLowerCase()] = domFactory[elem];
});

const defaultNameSpace = 'http://www.w3.org/2000/svg';
const svgElements = (module.exports.svgElements = [
    'a',
    'altGyph',
    'altGlyphDef',
    'altGlyphItem',
    'animate',
    'animateColor',
    'animateMotion',
    'animateTransform',
    'circle',
    'clipPath',
    'color-profile',
    'cursor',
    'defs',
    'desc',
    'discard',
    'ellipse',
    'feBlend',
    'feColorMatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDistantLight',
    'feDropShadow',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussianBlur',
    'feImage',
    'feMerge',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'fePointLight',
    'feSpecularLighting',
    'feSpotLight',
    'feTile',
    'feTurbulence',
    'filter',
    'font',
    'font-face',
    'font-face-format',
    'font-face-name',
    'font-face-src',
    'font-face-uri',
    'foreignObject',
    'g',
    'glyph',
    'glyphRef',
    'hatch',
    'hatchpath',
    'hkern',
    'image',
    'line',
    'linearGradient',
    'marker',
    'mask',
    'mesh',
    'meshgradient',
    'meshpatch',
    'meshrow',
    'metadata',
    'missing-glyph',
    'mpath',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'script',
    'set',
    'solidcolor',
    'stop',
    'style',
    'svg',
    'switch',
    'symbol',
    'text',
    'textPath',
    'title',
    'tref',
    'tspan',
    'unknown',
    'use',
    'view',
    'vkern',
]);
const svgFactory = (module.exports.svgFactory = {});
svgElements.forEach(elem => {
    svgFactory[elem] = function(props, ...children) {
        return createElementNS(defaultNameSpace, elem, props, ...children);
    };
    svgFactory[elem] = svgFactory[elem];
    svgFactory[elem.toUpperCase()] = svgFactory[elem];
    svgFactory[elem.toLowerCase()] = svgFactory[elem];
});

// window query
const query = (module.exports.query = {});
const searchParams = new URLSearchParams(document.location.search);
searchParams.forEach((key, value) => {
    query[key] = value;
});

module.exports.Inputs = function(inputs) {
    if (Array.isArray(inputs)) {
        const container = domFactory.DIV({className: 'jdom-inputs-container'});
        inputs.forEach(input => {
            let elem;
            if (input) {
                if (input.type === 'select') {
                    elem = generateSelect(input);
                } else if (input.type === 'checkbox') {
                    elem = generateCheckbox(input);
                } else if (
                    input.type === 'button' ||
                    input.type === 'reset' ||
                    input.type === 'submit'
                ) {
                    elem = generateButton(input);
                } else if (isElement(input)) {
                    elem = input;
                } else {
                    elem = generateInput(input);
                }
            }
            if (elem) {
                container.appendChild(elem);
            }
        });
        return container;
    }
};

module.exports.ButtonGroup = function(buttons) {
    if (Array.isArray(buttons)) {
        const container = domFactory.DIV({className: 'jdom-button-group'});
        buttons.forEach(input => {
            if (input) {
                container.appendChild(generateButton(input));
            }
        });
        return container;
    }
};

function generateInput(input) {
    var elem = document.createElement('input');
    elem.type = input.type || 'text';
    elem.className = 'jdom-input jdom-text';
    if (input.name) {
        elem.name = input.name;
        elem.id = input.name;
    }
    elem.value = query[input.name] || input.defaultValue || '';
    elem.placeholder = input.placeholder || '';
    if (input.style) {
        style(elem, input.style);
    }
    if (input.required) {
        elem.required = true;
    }
    if (input.step) {
        elem.step = input.step;
    }
    if (input.readOnly) {
        elem.readOnly = true;
    }
    if (input.disabled) {
        elem.disabled = true;
    }
    let container;
    if (input.type === 'hidden') {
        return elem;
    }
    container = document.createElement('div');
    container.className = 'jdom-input-container';
    var label = document.createElement('label');
    label.className = 'jdom-input-label';
    if (input.description) {
        label.title = input.description;
    }
    if (input.name) {
        label.innerText =
            input.name.replace(/([A-Z])/g, ' $1').replace(/^./, function(str) {
                return str.toUpperCase();
            }) + ': ';
        label.htmlFor = input.name;
    }
    container.appendChild(label);
    container.appendChild(elem);
    return container;
}

function generateSelect(input) {
    var elem = document.createElement('select');
    elem.className = 'jdom-input jdom-select';
    if (input.name) {
        elem.name = input.name;
        elem.id = input.name;
        elem.value = input.name;
    }
    if (input.style) {
        style(elem, input.style);
    }
    if (input.required) {
        elem.required = true;
    }
    if (input.readOnly) {
        elem.readOnly = true;
    }
    if (input.disabled) {
        elem.disabled = true;
    }
    elem.onchange = handleInputs.bind(null, input, elem);
    if (Array.isArray(input.options)) {
        input.options.forEach((option, index) => {
            const elem = document.createElement('option');
            if (typeof option === 'string') {
                option = {name: option, value: option};
            }
            elem.value = option.value;
            elem.innerHTML = option.name;
            elem.appendChild(elem);
            if (option.value === query[input.name]) {
                elem.selectedIndex = index;
            }
        });
    }
    var container = document.createElement('div');
    container.className = 'jdom-input-container';
    var label = document.createElement('label');
    label.className = 'jdom-input-label';
    if (input.description) {
        label.title = input.description;
    }
    if (input.name) {
        label.innerText =
            input.name.replace(/([A-Z])/g, ' $1').replace(/^./, function(str) {
                return str.toUpperCase();
            }) + ': ';
        label.htmlFor = input.name;
    }
    container.appendChild(label);
    container.appendChild(elem);
    return container;
}

function generateCheckbox(input) {
    var elem = document.createElement('input');
    elem.className = 'jdom-input jdom-checkbox';
    elem.type = 'checkbox';
    if (input.name) {
        elem.name = input.name;
        elem.id = input.name;
        elem.checked = query[input.name] === 'on';
    }
    if (input.style) {
        style(elem, input.style);
    }
    if (input.readOnly) {
        elem.readOnly = true;
    }
    if (input.disabled) {
        elem.disabled = true;
    }
    elem.onchange = handleInputs.bind(null, input, elem);
    var container = document.createElement('div');
    container.className = 'jdom-input-container';
    var label = document.createElement('label');
    label.className = 'jdom-input-label';
    if (input.description) {
        label.title = input.description;
    }
    if (input.name) {
        label.innerText =
            input.name.replace(/([A-Z])/g, ' $1').replace(/^./, function(str) {
                return str.toUpperCase();
            }) + ': ';
        label.htmlFor = input.name;
    }
    container.appendChild(label);
    container.appendChild(elem);
    return container;
}

function generateButton(input) {
    var elem = document.createElement('button');
    elem.className = 'jdom-input-button';
    elem.type = input.type || 'button';
    if (input.name) {
        elem.name = input.name;
        elem.id = input.name;
    }
    elem.innerText = input.name;
    style(elem, {
        textTransorm: 'uppercase',
        border: 'none',
        cursor: 'pointer',
    });
    if (input.style) {
        style(elem, input.style);
    }
    elem.onclick = () => {
        if (typeof input.click === 'function') {
            input.click(elem);
        }
        window.setTimeout(() => {
            if (
                elem.parentNode &&
                elem.parentNode.className === 'jdom-button-group'
            ) {
                Array.prototype.forEach.call(
                    elem.parentNode.children,
                    child => {
                        if (child === elem) {
                            child.style.zIndex = 1;
                        } else {
                            child.style.zIndex = 0;
                        }
                    }
                );
            }
        });
    };
    if (input.description) {
        elem.title = input.description;
    }
    if (input.readOnly) {
        elem.readOnly = true;
    }
    if (input.disabled) {
        elem.disabled = true;
    }
    return elem;
}

function handleInputs(config) {
    const submitButton = new QueryList('button[type="submit"]')[0];
    if (typeof config.change === 'function') {
        if (config.change(config) && submitButton) {
            submitButton.click();
        }
    } else if (submitButton) {
        submitButton.click();
    }
}

const on = (module.exports.on = (element, event, handler, options) => {
    element.addEventListener(event, handler, options);
});
const once = (module.exports.once = (element, event, handler, options) => {
    element.addEventListener(
        event,
        handler,
        Object.assign({once: true}, options)
    );
});
const off = (module.exports.off = (element, event, handler, options) => {
    element.removeEventListener(event, handler, options);
});
const dispatch = (module.exports.dispatch = (elem, event) => {
    const evt = new Event(event);
    elem.dispatchEvent(evt);
});

module.exports.currentScript = function currentScript() {
    const scripts = document.getElementsByTagName('script');
    for (var i = scripts.length - 1; i >= 0; i--) {
        const script = scripts[i];
        if (script.src) {
            return script;
        }
    }
};

const style = (module.exports.style = (elem, props) => {
    if (isElement(elem) && isObject(props)) {
        Object.keys(props).forEach(key => {
            elem.style[key] = props[key];
        });
    }
});

const QueryList = (module.exports.QueryList = class QueryList {
    constructor(selector, context) {
        var scope = this;
        scope.length = 0;
        if (isElement(selector)) {
            scope[0] = selector;
            scope.length = 1;
        } else {
            const objectType = type(selector);
            if (objectType === 'String') {
                if (selector.charAt(0) === '<') {
                    scope[0] = createElement(selector);
                    scope.length = 1;
                } else {
                    if (!context) {
                        context = document;
                    }
                    var nodelist = context.querySelectorAll(selector);
                    Array.prototype.forEach.call(nodelist, function(
                        node,
                        index
                    ) {
                        scope[index] = node;
                    });
                    scope.length = nodelist.length;
                }
            } else if (
                objectType === 'NodeList' ||
                objectType === 'HTMLCollection'
            ) {
                Array.prototype.forEach.call(selector, function(node, index) {
                    scope[index] = node;
                });
                scope.length = selector.length;
            } else if (
                objectType === 'Array' ||
                selector instanceof QueryList
            ) {
                var index = 0;
                selector.forEach(function(node) {
                    if (isElement(node)) {
                        scope[index] = node;
                        index++;
                    }
                });
                scope.length = index;
            } else if (objectType === 'Function') {
                if (document.readyState === 'complete') {
                    selector();
                } else {
                    var ready = window.setInterval(function() {
                        if (document.readyState === 'complete') {
                            window.clearInterval(ready);
                            selector();
                        }
                    }, 10);
                }
            } else {
                throw new Error(
                    'QueryList: invalid selector type: ' + objectType
                );
            }
        }
        return scope;
    }
    on(event, handler, options) {
        const scope = this;
        scope.forEach(elem => {
            on(elem, event, handler, options);
        });
        return scope;
    }
    once(event, handler, options) {
        const scope = this;
        scope.forEach(elem => {
            once(elem, event, handler, options);
        });
        return scope;
    }
    off(event, handler, options) {
        const scope = this;
        scope.forEach(elem => {
            off(elem, event, handler, options);
        });
        return scope;
    }
    style(obj) {
        const scope = this;
        scope.forEach(elem => {
            style(elem, obj);
        });
        return scope;
    }
    dispatch(event) {
        const scope = this;
        scope.forEach(elem => {
            dispatch(elem, event);
        });
        return scope;
    }
    hasClass(str, strict) {
        const arrFun = !strict ? 'some' : 'every';
        return this[arrFun](elem => {
            return hasClass(elem, str);
        });
    }
    addClass(str) {
        const scope = this;
        scope.forEach(elem => {
            addClass(elem, str);
        });
        return scope;
    }
    removeClass(str) {
        const scope = this;
        scope.forEach(elem => {
            removeClass(elem, str);
        });
        return scope;
    }
});
QueryList.prototype.filter = Array.prototype.filter;
QueryList.prototype.forEach = Array.prototype.forEach;
QueryList.prototype.map = Array.prototype.map;
QueryList.prototype.pop = Array.prototype.pop;
QueryList.prototype.push = Array.prototype.push;
QueryList.prototype.shift = Array.prototype.shift;
QueryList.prototype.slice = Array.prototype.slice;
QueryList.prototype.some = Array.prototype.some;
QueryList.prototype.splice = Array.prototype.splice;
QueryList.prototype.unshift = Array.prototype.unshift;
module.exports.$ = function(selector, context) {
    return new QueryList(selector, context);
};

const type = (module.exports.type = function(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
});
const isObject = (module.exports.isObject = function isObject(obj) {
    return type(obj) === 'Object';
});
const isArray = (module.exports.isArray = function isArray(obj) {
    return Array.isArray(obj);
});
const isElement = (module.exports.isElement = function isElement(obj) {
    return typeof HTMLElement === 'object'
        ? obj instanceof HTMLElement
        : typeof SVGElement === 'object'
        ? obj instanceof SVGElement
        : obj &&
          typeof obj === 'object' &&
          obj !== null &&
          obj.nodeType === 1 &&
          typeof obj.nodeName === 'string';
});
const hasClass = (module.exports.hasClass = function(elem, className) {
    if (isElement(elem) && typeof className === 'string') {
        return new RegExp('(\\s|^)' + className + '(\\s|$)').test(
            elem.className
        );
    }
});
const addClass = (module.exports.addClass = function(elem, className) {
    if (isElement(elem) && typeof className === 'string') {
        if (
            new RegExp('(\\s|^)' + className + '(\\s|$)').test(
                elem.className
            ) !== true
        ) {
            elem.className += (elem.className ? ' ' : '') + className;
        }
    }
    return this;
});
const removeClass = (module.exports.addClass = function(elem, className) {
    if (isElement(elem) && typeof className === 'string') {
        if (
            new RegExp('(\\s|^)' + className + '(\\s|$)').test(elem.className)
        ) {
            elem.className = elem.className
                .replace(new RegExp('(\\s|^)' + className + '(\\s|$)'), ' ')
                .replace(/^\s+|\s+$/g, '');
        }
    }
    return this;
});
const toCamelCase = (module.exports.toCamelCase = function(str) {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
            return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
        })
        .replace(/\s+/g, '');
});
