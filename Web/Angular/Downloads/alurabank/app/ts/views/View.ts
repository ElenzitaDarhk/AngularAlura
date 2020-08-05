import { logarTempoDeExecucao } from '../helpers/decorators/index.js';

export abstract class View<T> {

    protected _elemento: JQuery;
    private _escapar: boolean;

    constructor(seletor: string, escapar: boolean = false)
    {
        this._elemento = $(seletor);
        this._escapar = escapar;
    }
    
    @logarTempoDeExecucao()
    update(mensagem: T): void {
        
        let template = this.template(mensagem);

        if(this._escapar)
            template = template.replace(/<script>[\s\S]*?<\/script/g,'');


        this._elemento.html(this.template(mensagem));
    }

    abstract template(mensagem: T): string;
}