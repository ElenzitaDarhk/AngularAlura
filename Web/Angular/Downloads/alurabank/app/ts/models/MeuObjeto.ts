import { Imprimivel } from './Imprimivel.js';
import { Igualavel } from './Igualavel.js';

export interface MeuObjeto extends Imprimivel, Igualavel<MeuObjeto>
{

}