export function logarTempoDeExecucao(emSegundos: boolean = false) {

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodoOriginal = descriptor.value;

        descriptor.value = function (...args: any[])
        {
            let unidadeTempo = 'ms';
            let divisor = 1;

            if(emSegundos) 
            {
                unidadeTempo = 's';
                let divisor = 1000;
            }

            console.log("____________________________________");
            console.log(`Método:${propertyKey} Parâmetros:${JSON.stringify(args)}`);
            
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();

            console.log(`Retorno:${JSON.stringify(retorno)}`);

            console.log(`Tempo de execução: ${(t2-t1)/divisor} ${unidadeTempo}`);   

            return retorno;
        }
        
        return descriptor;
    }
} 