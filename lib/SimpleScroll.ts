

export default class SimpleScroll{

    private selector:string;
    private domArr:NodeList;
    private options:{};


    constructor(selector: string, options: {} = {}){
        this.selector = selector;
        this.domArr = document.querySelectorAll(this.selector);
        this.options = options;
    }

    init(_cb:any): any{
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                _cb(entry.isIntersecting, entry.target, observer);
            });
        },this.options);
        this.domArr.forEach( (b:any) => {
            io.observe(b);
        });
    }
}

