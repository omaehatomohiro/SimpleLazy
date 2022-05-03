import SimpleScroll from "./SimpleScroll";

export default class SimpleLazy{

    constructor(options = {}){
        this.init(options);
    }

    init(options:{}){
        const target = new SimpleScroll('.simple-lazy',options);
        target.init((flag:boolean,dom:HTMLImageElement,observer:any) => {
            if(flag){
                observer.unobserve(dom);
                const src:string|null = dom.getAttribute('data-img-src');
                if(src===null) return false;
                dom.setAttribute('src',src);
            }
        });
    }
}
