/** Class representing a matrix. */
class Matrix {

    /**
     * Create a matrix instance.
     * @param {string} selector - CSS selector.
     */
    constructor(selector) {
        if (!selector) return false;
        
        this.selector = selector;
        this.stop = false;
        this.DELAY = 50;
        this.window = window;
        this.document = document;
    }

    /** Initialization method. */
    init() {
        this.$element = this.document.querySelector(this.selector);
        if (this.$element == null) return false;

        this.context = this.$element.getContext('2d');

        this.width = this.$element.width = this.window.innerWidth;
        this.height = this.$element.height = this.window.innerHeight;
        this.letters = Array(256).join(1).split('');

        this.window.addEventListener('dblclick', e => {
            this.stop = !this.stop;
        });

        setInterval(() => { this.draw(); }, this.DELAY);
    }

    /** Drawing method. */
    draw() {
        if (this.stop !== false) return false;
        this.context.fillStyle = 'rgba(0,0,0,.05)';
        this.context.fillRect(0, 0, this.width, this.height);
        this.context.fillStyle = `rgba(0,327,217,${Math.random() * 5 + 0.8})`;
        this.letters.map((y, i) => {
            const text = String.fromCharCode(65 + Math.random() * 33);
            const x = i * 10;
            this.context.fillText(text, x, y);
            this.letters[i] = (y > 758 + Math.random() * 1e4) ? 0 : y + 10;
        });
    }
}

(new Matrix('.matrix')).init();